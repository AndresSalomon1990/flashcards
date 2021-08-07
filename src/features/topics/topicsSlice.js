import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

/* slice */
export const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      // action.payload = {id: '123456', name: 'name of topic', icon: 'icon url'}
      const { id } = action.payload;
      state.topics[id] = { ...action.payload, quizIds: [] };
    },
    addQuizIdForTopic: (state, action) => {
      // action.payload = {quizId: '123', topicId: '456'}
      const { topicId, quizId } = action.payload;
      state.topics[topicId].quizIds.push(quizId);
    }
  }
});

/* action creators */
export const { addTopic, addQuizIdForTopic } = topicsSlice.actions;

/* selectors */
export const selectTopics = state => state.topics.topics;

/* reducer */
export default topicsSlice.reducer;