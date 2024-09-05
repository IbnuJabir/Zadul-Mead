import { configureStore } from '@reduxjs/toolkit'
import registerSlice from './registerSlice'
import dialogSlice from './dialogSlice'
// ...

export const store = configureStore({
  reducer: {
    register: registerSlice,
    dialog: dialogSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch