import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import { Buttons, Loading } from '../../utils';
import {
  // Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  useMediaQuery,
} from '@mui/material';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const isMobile = useMediaQuery('(max-width:900px)');

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  const cardStyles = {
    product__details: {
      // background: 'black',
      height: '100%',
      padding: isMobile ? '0px' : '15px',
    },
    card: {
      width: isMobile ? '100%' : '50%',
      height: isMobile ? '100%' : '100vh',
      margin: isMobile ? '0' : 'auto',

      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',

      textAlign: 'center',
    },
    cardMedia: {
      padding: isMobile ? '25px' : '5px',
      objectFit: 'contain',
      maxWidth: '100%',
    },
    loadings: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  };

  const { product__details, card, cardMedia, loadings } = cardStyles;

  if (!product) {
    return (
      <div style={loadings}>
        <Loading />
      </div>
    );
  }

  return (
    <div style={product__details}>
      <Typography variant="h3" sx={{ color: 'black', textAlign: 'center' }}>
        Product Details
      </Typography>
      <Card sx={card}>
        <CardMedia
          component="img"
          sx={cardMedia}
          width="300"
          height="300"
          image={product.image}
          alt={product.title}
          loading="lazy"
        />
        <CardContent>
          <Typography variant={isMobile ? 'h6' : 'h4'}>
            {product.title}
          </Typography>

          <Typography style={{ color: 'gray' }}>
            {product.description}
          </Typography>

          <Typography variant="h5" style={{}}>
            ${product.price}
          </Typography>

          <Typography variant="h6" style={{ color: 'gray' }}>
            Category :{' '}
            <span style={{ color: 'black' }}>{product.category}</span>
          </Typography>
          <Typography style={{ textAlign: 'center', color: 'gray' }}>
            Rating :{' '}
            <span style={{ color: 'black' }}>
              {product.rating.rate} (Count: {product.rating.count})
            </span>
          </Typography>
        </CardContent>

        <CardActions>
          <Link to={`/`}>
            <Buttons title={'Back'} />
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default ProductDetails;
