import { useMemo } from "react";
import { configureStore } from "@reduxjs/toolkit";

import loggerMiddleware from "../middleware/logger";
import authenticationSlice from "../features/authentication/authenticationSlice";
import counterSlice from "../features/counter/counterSlice";

let store;

function initStore(preloadedState) {
  const store = configureStore({
    reducer: {
      authentication: authenticationSlice,
      counter: counterSlice,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(loggerMiddleware),
    preloadedState,
  });

  return store;
}

export const initializeStore = (preloadedState) => {
  let _store = store ?? initStore(preloadedState);

  // After navigating to a page with an initial Redux state, merge that state
  // with the current state in the store, and create a new store
  if (preloadedState && store) {
    _store = initStore({
      ...store.getState(),
      ...preloadedState,
    });
    // Reset the current store
    store = undefined;
  }

  // For SSG and SSR always create a new store
  if (typeof window === "undefined") return _store;
  // Create the store once in the client
  if (!store) store = _store;

  return _store;
};

export function useStore(initialState) {
  const store = useMemo(() => initializeStore(initialState), [initialState]);
  return store;
}

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
