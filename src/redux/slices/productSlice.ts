import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../../model/Product';

const savedProducts = localStorage.getItem('products');
const initialState: Product[] = savedProducts ? JSON.parse(savedProducts) : [];

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      const newState = [...state, action.payload];
      localStorage.setItem('products', JSON.stringify(newState));
      return newState; 
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
        const newState = state.filter(product => product.id !== action.payload);
        localStorage.setItem('products', JSON.stringify(newState));
        return newState;
      },   

  },
});

export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;