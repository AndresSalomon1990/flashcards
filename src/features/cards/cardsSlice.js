import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
}; 

/* slice */
export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      // action.payload = { id: '123', front: 'front of card', back: 'back of card'}
      const { id } = action.payload;
      state.cards[id] = action.payload;
    }
  }
});

/* action creators */
export const { addCard } = cardsSlice.actions;

/* selectors */
export const selectCards = state => state.cards.cards;

/* reducer */
export default cardsSlice.reducer;