import React from 'react';
import { Table, Td, Th, Thead, Tbody, Tr } from '@chakra-ui/react';

const DynamicTable = ({ data }) => {
  const headerKeys = [...new Set(data.map((item) => Object.keys(item)))]
    .flat();

  return (
    <Table variant="simple" stripeSpacing={0}>
      <Thead>
        <Tr>
          {headerKeys.map((key) => (
            <Th key={key} fontSize="sm" fontWeight="bold">
              {key}
            </Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => (
          <Tr key={row[headerKeys[0]]}>
            {headerKeys.map((key) => (
              <Td key={key}>{row[key]}</Td>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default DynamicTable;
