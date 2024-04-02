import React from 'react';
import { Tr, Td } from '@chakra-ui/react';

interface TagRowProps {
  tag: Tag;
}

const TagRow: React.FC<TagRowProps> = ({ tag }) => {
  return (
    <Tr>
      <Td>{tag.name}</Td>
      <Td>{tag.count}</Td>
    </Tr>
  );
};

export default TagRow;

interface Tag {
  name: string;
  count: number;
}
