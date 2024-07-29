// src/store.ts
import { configureStore } from "@reduxjs/toolkit";
import clientsReducer from "@/features/clients/clientsSlice";
import projectsReducer from "@/features/projects/projectsSlice";
import { thunk } from "redux-thunk";

export const store = configureStore({
  reducer: {
    clients: clientsReducer,
    projects: projectsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
