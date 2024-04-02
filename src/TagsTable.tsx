import React from 'react';
import { Table, Thead, Tbody, Tr, Th} from '@chakra-ui/react';
import TagRow from './TagRow';

export interface TagsTableProps {
  tags: Tag[];
}

const TagsTable: React.FC<TagsTableProps> = ({ tags }) => {
  return (
    <Table variant="simple">
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Count</Th>
        </Tr>
      </Thead>
      <Tbody>
        {tags.map((tag) => (
          <TagRow key={tag.name} tag={tag} />
        ))}
      </Tbody>
    </Table>
  );
};

export default TagsTable;

export interface Tag {
  name: string;
  count: number;
}
