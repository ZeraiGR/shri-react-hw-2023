import { RootState } from "@/store/store";
import { createSelector } from "reselect";
import type { CartState } from "@/store/features/cartSlice";
import { FilterState } from './features/filterSlice';

export const selectCart = (state: RootState): CartState => {
    return state.cart;
};

export const selectFilters = (state: RootState): FilterState => {
    return state.filters; 
};

export const selectMovieQuantity = (state: RootState, id: string) => createSelector(
    [
        selectCart,
        (state: RootState, id: string) => id
    ],
    (cart: CartState, id: string) => cart[id] ?? 0
)(state, id);

export const selectTotalQuantity = createSelector(
  selectCart,
  (cart: CartState) => {
    const values = Object.values(cart);
    if (values.length === 0) return 0;
    return values.reduce((acc, cur) => acc + cur, 0);
  }
);
