import React from 'react';
import { Input, Select, Stack } from '@chakra-ui/react';

export interface FiltersProps {
  pageSize: number;
  sortBy: string;
  sortOrder: string;
  onPageSizeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSortByChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onSortOrderChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Filters: React.FC<FiltersProps> = ({ pageSize, sortBy, sortOrder, onPageSizeChange, onSortByChange, onSortOrderChange }) => {
  return (
    <Stack direction="row" spacing={4} mb={4}>
      <Input
        type="number"
        min={1}
        value={pageSize}
        onChange={onPageSizeChange}
        placeholder="Page Size"
      />
      <Select value={sortBy} onChange={onSortByChange}>
        <option value="name">Name</option>
        <option value="popular">Popular</option>
      </Select>
      <Select value={sortOrder} onChange={onSortOrderChange}>
        <option value="asc">Asc</option>
        <option value="desc">Desc</option>
      </Select>
    </Stack>
  );
};

export default Filters;
