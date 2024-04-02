import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import axios, { AxiosError } from 'axios';
import Filters from './Filters';
import TagsTable from './TagsTable';


interface Tag {
  name: string;
  count: number;
  has_synonyms: boolean;
  is_moderator_only: boolean;
  is_required: boolean;
}

interface TagsApiResponse {
  items: Tag[];
  has_more: boolean;
  quota_max: number;
  quota_remaining: number;
}


const App: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [pageSize, setPageSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>('name');
  const [sortOrder, setSortOrder] = useState<string>('asc');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get<TagsApiResponse>(`https://api.stackexchange.com/2.3/tags?pagesize=${pageSize}&order=${sortOrder}&sort=${sortBy}&site=stackoverflow`);
        setTags(response.data.items);
        console.log(response.data)
      } catch (error: AxiosError | any) {
        setError(error.message);
      }
      setLoading(false);
    };    

    fetchData();
  }, [pageSize, sortBy, sortOrder]);

  const handlePageSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPageSize(parseInt(e.target.value));
  };

  const handleSortByChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const handleSortOrderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOrder(e.target.value);
  };  

  return (
    <Box p={4}>
      <Filters
        pageSize={pageSize}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onPageSizeChange={handlePageSizeChange}
        onSortByChange={handleSortByChange}
        onSortOrderChange={handleSortOrderChange}
      />
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <TagsTable tags={tags} />
      )}
    </Box>
  );
};

export default App;

