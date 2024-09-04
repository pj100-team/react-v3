import React from 'react';
import { ListItem } from './type';

type ListProps = {
  items: ListItem[];
};

const List: React.FC<ListProps> = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id} className="bg-gray-200 w-20 h-20 m-2 flex items-center justify-center">
          {item.text}
        </div>
      ))}
    </>
  );
};

export default List;
