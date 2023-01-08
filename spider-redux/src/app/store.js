import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";
import usersReducer from '../features/users/usersSlice';
import magesReducer from '../features/mages/mageSlice'

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer,
        mages: magesReducer
    }
})