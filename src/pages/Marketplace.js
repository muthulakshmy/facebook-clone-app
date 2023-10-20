import React, { useEffect, useState } from "react";
import axios from "axios";
import { Box, Card, CardContent, CardMedia, Grid, Typography,Button } from "@mui/material";
import { TwentyTwoMpOutlined } from "@mui/icons-material";

const Marketplace = () => {
  const [data, setdata] = useState([]);
  const [cart, setcart] = useState([]);

  function addCart(value) {
    if (!cart.some(item => item.cartvalue.id === value.id)) {
      setcart([...cart, { cartvalue: value }]);
    } else {
      alert("Product already in cart");
    }
  }

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((response) => {
      setdata(response.data);
    });
  }, []);

  return (
    <>
      
      <Box sx={{p:10}}>
      <Grid container spacing={2} gap="50px">
      {data.map((user) => (
        <Card key={user.id} sx={{ marginBottom: 2,width:200,height:300}}>
        
          <CardMedia 
          component="img"
          image={user.image}
          sx={{height:170,width:200, }}
          
          />
          <CardContent sx={{p:2,}} >
            <Typography sx={{fontWeight:"bold"}}>$ {user.price}</Typography>
            <Typography>{user.title.substring(0, 30)}</Typography>
            <Button variant="contained" sx={{backgroundColor:"#4267B2" ,color:"white" ,width:170,fontSize:12,mb:1}}>
            Buy
            </Button>
          
          </CardContent>
        </Card>
      ))}
      </Grid>
    </Box>
    </>
  );
};

export default Marketplace;