
import { AutoComplete } from 'antd'
import React from 'react'
import {
    Search,
  } from "@mui/icons-material";
import { Box } from '@mui/material';
const SearchPost = () => {
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
            //   options={options}
            style={{
              width: 200,
              height: "20px",
            }}
            placeholder="Search Facebook"
            //   onSearch={(text) => setOptions(getPanelValue(text))}
            //   onSelect={globalThis.console.log}
            bordered={false}
            size="small"
          />
        </Box>
    </div>
  )
}

export default SearchPost
