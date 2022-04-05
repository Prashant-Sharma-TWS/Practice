import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export const Home = () => {
  const [products, setProducts] = useState([]);
  const accesstoken = useSelector((state) => state.auth.userToken);

  const fetch = () => {
    try {
      // fetch("http://localhost:8000/products", {
      //   headers: {
      //     accesstoken: `Bearer ${accesstoken}`,
      //   },
      // })
      //   .then((response) => response.json())
      //   .then((result) => console.log(result));

      axios
        .get("http://localhost:8000/products", {
          headers: {
            accesstoken: `Bearer ${accesstoken}`,
          },
        })
        .then((response) => setProducts(response.data.products))
        .catch((e) => console.log("axios: ", e.message));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => fetch(), []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <CardForProduct
          className="product-card"
          key={product._id}
          product={product}
        />
      ))}
    </div>
  );
};

const CardForProduct = ({ product }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {product.price}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            seller
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
