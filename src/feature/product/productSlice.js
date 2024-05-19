import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '1', productName: 'Meat', description: 'Mutton 1.5kg', canExpire: true, expiryDate: '2024-10-12', category: 'meat', price: '£10.00', special: false},
    { id: '2', productName: 'Banana', description: 'Banana 2kg', canExpire: false, expiryDate: '', category: 'vegetables', price: '£3.50', special: false},
    { id: '3', productName: 'Apple', description: 'Mutton 3kg', canExpire: false, expiryDate: '', category: 'vegetables', price: '£4.00', special: false},
    { id: '4', productName: 'Spinach', description: 'Baby Spinach', canExpire: false, expiryDate: '', category: 'vegetables', price: '£10.00', special: false},
    { id: '5', productName: 'Broccoli', description: 'Tenderstem Broccoli 200G', canExpire: false, expiryDate: '', category: 'vegetables', price: '£1.85', special: true},
    { id: '6', productName: 'Onions', description: 'Red Onions 3Pack Minimum', canExpire: true, expiryDate: '2024-10-12', category: 'vegetables', price: '£10.00', special: false},
    { id: '7', productName: 'Carrots', description: 'Carrots Loose', canExpire: false, expiryDate: '', category: 'vegetables', price: '£10.00', special: false},
    { id: '8', productName: 'Fish', description: 'Salmon 2.5kg', canExpire: true, expiryDate: '2024-08-12', category: 'meat', price: '£8.00', special: false},
    { id: '9', productName: 'Storage', description: 'Storage with Mirror', canExpire: false, expiryDate: '', category: 'furniture', price: '£100.00', special: false},
    { id: '10', productName: 'Study Table', description: 'Study Table with Chair', canExpire: false, expiryDate: '', category: 'furniture', price: '£300.00', special: true},
    { id: '11', productName: 'Seattle', description: 'Extending Dark Grey Gloss 160-220cm Dining Table With Marco Chairs', canExpire: false, expiryDate: '', category: 'furniture', price: '£939', special: false},
    { id: '12', productName: 'Bridstow', description: 'Oak and Blue Painted 2 Over 3 Chest of drawers', canExpire: false, expiryDate: '', category: 'furniture', price: '£429', special: false},
    { id: '13', productName: 'Beef', description: 'Beef Mince 20% Fat 500g', canExpire: true, expiryDate: '2024-10-12', category: 'meat', price: '£7.00', special: false},
    { id: '14', productName: 'Chicken', description: 'Packington Free Range Skin On Chicken Breasts', canExpire: true, expiryDate: '2024-10-12', category: 'meat', price: '£11.00', special: false},
  ]

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      let newProduct = true;
      state.forEach((product, index) => {
        if (product.productName === action.payload.productName) {
            state[index] = action.payload;
            newProduct = false;
        }
      });   
      if (newProduct) {
        state.push(action.payload)
      }

    }, 
    removeProduct: (state, action) => {

        state.forEach((product, index) => {
            if (product.productName === action.payload) {
                state.splice(index, 1);
            }
        });    
    }  
  }
})

export const { addProduct, removeProduct } = productSlice.actions

export default productSlice.reducer