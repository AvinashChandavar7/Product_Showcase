import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { image, title, price } = product;

  const cardStyles = {
    cards: {
      width: 'auto',
      height: 400,
      backgroundImage: '#cccccc',

      transition: 'box-shadow 0.3s',
      '&:hover': {
        color: 'white',
        boxShadow: 'inset 0px 0px 15px 5px #583bb6',
      },
    },
    cardMedia: {
      objectFit: 'contain',
      padding: '15px',
    },
    cardContent: {},
  };

  const { cards, cardMedia, cardContent } = cardStyles;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={cards}>
        <Link to={`/product/${product.id}`}>
          <CardMedia
            component="img"
            height="250"
            sx={cardMedia}
            image={image}
            alt={title}
            loading="lazy"
            style={{ filter: 'dropShadow(5px 5px yellow)' }}
          />
          <CardContent sx={cardContent}>
            <Typography variant="h6">{title}</Typography>
            <Typography>${price}</Typography>
          </CardContent>
        </Link>
      </Card>
    </Grid>
  );
};

export default ProductCard;
