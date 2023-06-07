import { createSlice } from "@reduxjs/toolkit";
import productData from "../ProductData.json";

const initialState = {
  cart: [],
  items: productData,
  totalQuantity: 0,
  totalPrice: 0
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      //if cart already has that item, increase the item quantity
      let find = state.cart.findIndex((item) => item.id === action.payload.id);
      //we get find=-1 if not present
      console.log("find=", find);
      console.log("action=", action);

      if (find >= 0) {
        state.cart[find].quantity += 1;
      } else {
        //else push the item to cart
        state.cart.push(action.payload);
      }
    },

    getCartTotal: (state) => {
      //we need to update TotalPrice,TotalQuantity
      //CartTotal is the accumulator here. It has {totalPrice:0,totalQuantity:0}
      let { totalQuantity, totalPrice } = state.cart.reduce(
        (cartTotal, cartItem) => {
          const itemTotal = cartItem.price * cartItem.quantity;
          cartTotal.totalPrice += itemTotal;
          cartTotal.totalQuantity += cartItem.quantity;
          return cartTotal;
        },
        //Initialvalue of accumulator
        {
          totalPrice: 0,
          totalQuantity: 0
        }
      );
      // toFixed() will round the number to 2 decimal places and return it as a string.
      // parseInt() will convert the string back to a number with a base of 10 (decimal)
      state.totalPrice = parseInt(totalPrice.toFixed(2), 10);
      state.totalQuantity = totalQuantity;
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    increaseItemQuantity: (state, action) => {
      //find the item and increase it's quantity
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    },

    decreaseItemQuantity: (state, action) => {
      state.cart = state.cart.map((item) => {
        if (item.id === action.payload && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });
    }
  }
});

export const {
  addToCart,
  getCartTotal,
  removeItem,
  increaseItemQuantity,
  decreaseItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
