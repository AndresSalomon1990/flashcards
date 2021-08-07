# React/Redux App - Flashcards

A React/Redux gaming app where you can create quizzes with flipping cards based on topics.

You can appreciate the use of React hooks, React Router and Redux state with RTK.

The structure is based on the "ducks" pattern: https://redux.js.org/style-guide/style-guide#structure-files-as-feature-folders-or-ducks

## To Run

Run `npm start` in the project root and the app will be available on port 3000.

## State

The app's state is totally normalized, with slices for topics, quizzes, and cards.

## Routes

- `/new-topic` – form to create a new topic
- `/topics` – index of all topics
- `/topics/:topicId` – page for an individual topic
- `/new-quiz` – form to create a new quiz
- `/quizzes` – index of all quizzes
- `/quizzes/:quizId` – page for an individual quiz

## To Test

1. Create topics
2. Create quizzes
3. Visit the page for an individual quiz and flip the cards over