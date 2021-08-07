import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdForTopic } from "../topics/topicsSlice";

const initialState = {
  quizzes: {}
};

/* slice */
export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      // action.payload: { id: '123', name: 'quiz name', topicId: '456', cardIds: ['1', '2', '3', ...]}
      const { id } = action.payload;
      state.quizzes[id] = action.payload;
    }
  }
});

/* action creators */
export const { addQuiz } = quizzesSlice.actions;

// thunk
export const addQuizForTopicId = (quiz) => {
  // action.payload = { name: 'name of quiz', topicId: '123', cardIds: ['4', '5', '6'], id: '789' }
  const { topicId, id } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizIdForTopic({ topicId: topicId, quizId: id }));
  };
};

/* selectors */
export const selectQuizzes = state => state.quizzes.quizzes;

/* reducer */
export default quizzesSlice.reducer;