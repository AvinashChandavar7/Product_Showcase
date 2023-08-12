import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../redux/action';
import FilterDrawer from '../FilterDrawer/FilterDrawer';
import { Loading } from '../../utils';

import {
  Button,
  Grid,
  InputAdornment,
  TextField,
  Typography,
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortOption, setSortOption] = useState('priceLowToHigh');
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleCategoryChange = (event) => {
    setCategoryFilter(event.target.value);
  };

  const handlePriceRangeChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const filteredProducts = products.filter((product) => {
    const searchTerm = searchQuery.toLowerCase();
    const inPriceRange =
      product.price >= priceRange[0] && product.price <= priceRange[1];
    const inCategory =
      categoryFilter === 'all' || product.category === categoryFilter;
    return (
      inCategory &&
      inPriceRange &&
      (product.title.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm))
    );
  });

  const sortedProducts = filteredProducts.slice().sort((a, b) => {
    if (sortOption === 'priceLowToHigh') {
      return a.price - b.price;
    } else if (sortOption === 'priceHighToLow') {
      return b.price - a.price;
    } else if (sortOption === 'rating') {
      return b.rating - a.rating;
    }
    return 0;
  });

  const styles = {
    header: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1,
      backgroundColor: '#583BB6',
    },
    filter__icons: {
      width: '48px',
      height: '40px',
      color: '#fff',
    },
    searchbar: {
      width: '540px',
      margin: '1rem',
      color: 'white',
      backgroundColor: 'white',
      borderRadius: '10px',
      fontSize: '1rem',
      '& .MuiOutlinedInput-root': {
        '& fieldset': {
          color: 'white',
          borderColor: 'red',
          borderRadius: '10px',
        },
        '&:hover fieldset': {
          borderColor: 'green',
        },
      },
      '& .MuiInputLabel-root.Mui-focused': {
        color: 'black',
        fontSize: '25px',
      },
    },
    product__title: {
      marginBlock: '1rem',
      textAlign: 'center',
    },
    product__subtitle: {
      color: 'red',
      textTransform: 'capitalize',
    },
    loading: {
      height: '90vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    loading__title: {
      textAlign: 'center',
    },
  };

  const {
    header,
    filter__icons,
    searchbar,
    product__title,
    product__subtitle,
    loading,
    loading__title,
  } = styles;

  return (
    <div>
      <FilterDrawer
        open={drawerOpen}
        onClose={handleDrawerClose}
        searchQuery={searchQuery}
        handleSearchChange={handleSearchChange}
        categoryFilter={categoryFilter}
        handleCategoryChange={handleCategoryChange}
        priceRange={priceRange}
        handlePriceRangeChange={handlePriceRangeChange}
        sortOption={sortOption}
        handleSortChange={handleSortChange}
      />

      <main>
        <div style={header}>
          <div>
            <Button onClick={handleDrawerOpen}>
              <FilterAltIcon style={filter__icons} />
            </Button>
          </div>
          <TextField
            label="Search by title or desc"
            value={searchQuery}
            onChange={handleSearchChange}
            variant="outlined"
            sx={searchbar}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <SearchIcon fontSize="large" />
                </InputAdornment>
              ),
            }}
          />
        </div>

        <Typography variant="h3" sx={product__title}>
          Products : <span style={product__subtitle}>{categoryFilter}</span>
        </Typography>
        {products.length === 0 ? (
          <>
            <Typography style={loading__title}>
              No products available
            </Typography>
            <div style={loading}>
              <Loading />
            </div>
          </>
        ) : (
          <Grid container spacing={2}>
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Grid>
        )}
      </main>
    </div>
  );
};

export default ProductList;
