
import { AutoComplete } from 'antd'
import React from 'react'
import {
    Search,
  } from "@mui/icons-material";
import { Box } from '@mui/material';
import { useData } from './DataContext';
import { useState } from 'react';
const mockVal = (str, repeat = 1) => ({
  value: str.repeat(repeat),
});
const SearchPost = () => {
  const {users,setUsers} =useData()
    const [value, setValue] = useState('');
    
    const options=users;
    const [anotherOptions, setAnotherOptions] = useState([]);
    const getPanelValue = (searchText) =>
      !searchText ? [] : [mockVal(searchText), mockVal(searchText, 2), mockVal(searchText, 3)];
    const onSelect = (data) => {
      console.log('onSelect', data);
    };
    const onChange = (data) => {
      setValue(data);
    };

  return (
    <div>
       <Box
          sx={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "whitesmoke",
            borderRadius: 5,
            p: "0px 10px",
            height: "40px",
          }}
        >
          <Search sx={{ cursor: "pointer" }} />
          <AutoComplete
              options={users}
            style={{
              width: 200,
              height: "20px",
              // color:""
            }}
            placeholder="Search Facebook"
            filterOption={(inputValue, option) =>
              option.value.toLowerCase().indexOf(inputValue.toLowerCase()) !== -1
            }
              // onSearch={(text) => setOptions(getPanelValue(text))}
              // onSelect={globalThis.console.log}
            bordered={false}
            size="small"
          />
        </Box>
    </div>
  )
}

export default SearchPost
