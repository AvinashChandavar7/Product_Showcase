import React from 'react';
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
  Select,
  MenuItem,
  Slider,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const FilterDrawer = ({
  open,
  onClose,
  categoryFilter,
  handleCategoryChange,
  priceRange,
  handlePriceRangeChange,
  sortOption,
  handleSortChange,
}) => {
  return (
    <Drawer anchor="left" open={open} onClose={onClose} style={{ width: 100 }}>
      <List>
        <ListItem>
          <ListItemText
            primary={<Typography variant="h6">Filters:</Typography>}
          />

          <Button onClick={onClose}>
            <CloseIcon style={{ color: 'black' }} />
          </Button>
        </ListItem>

        <ListItem>
          <Select
            value={categoryFilter}
            onChange={handleCategoryChange}
            fullWidth
            variant="outlined"
          >
            <MenuItem value="all">All Categories</MenuItem>
            <MenuItem value="men's clothing">Men's Clothing</MenuItem>
            <MenuItem value="women's clothing">Women's Clothing</MenuItem>
            <MenuItem value="electronics">Electronics</MenuItem>
            <MenuItem value="jewelery">Jewelery</MenuItem>
          </Select>
        </ListItem>

        {/*  */}
        <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItemText
            primary={<Typography variant="h6">Price Range:</Typography>}
          />

          <ListItemText
            primary={
              <Typography variant="h6">
                ${priceRange[0]} - ${priceRange[1]}
              </Typography>
            }
          />

          <Slider
            value={priceRange}
            onChange={handlePriceRangeChange}
            valueLabelDisplay="auto"
            min={0}
            max={1000}
          />
        </ListItem>

        {/*  */}
        <ListItem sx={{ display: 'flex', flexDirection: 'column' }}>
          <ListItemText primary={<Typography variant="h6">Sort:</Typography>} />
          <RadioGroup value={sortOption} onChange={handleSortChange}>
            <FormControlLabel
              value="priceLowToHigh"
              control={<Radio />}
              label="Price Low to High"
            />
            <FormControlLabel
              value="priceHighToLow"
              control={<Radio />}
              label="Price High to Low"
            />
            <FormControlLabel
              value="rating"
              control={<Radio />}
              label="Rating"
            />
          </RadioGroup>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default FilterDrawer;
