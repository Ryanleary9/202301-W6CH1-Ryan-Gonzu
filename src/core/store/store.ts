import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { charReducer } from "../../features/characters/reducer/char.reducer";

export const store = configureStore({
  reducer: {
    chars: charReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
