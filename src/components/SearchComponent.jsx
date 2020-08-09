import React from 'react';
import { Input } from 'antd';

const SearchComponent = () => {
  const { Search } = Input;

  return (
    <React.Fragment>
      <Search
        placeholder='input search text'
        enterButton='Search'
        onSearch={(value) => console.log(value)}
        style={{
          width: 300,
          float: 'right',
          margin: '16px',
        }}
      />
    </React.Fragment>
  );
};

export default SearchComponent;
