import { configureStore } from "@reduxjs/toolkit";
import authReducer from "@/redux/slices/authSlice";
import profileReducer from "@/redux/slices/profileSlice";
import reuseableReducer from "@/redux/slices/reuseableSlice";
import resumeSectionReducer from "@/redux/slices/resumeSectionSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    profile: profileReducer,
    reuseable: reuseableReducer,
    resumeSection: resumeSectionReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
