import { createReducer } from "@reduxjs/toolkit";
import { CharStructure } from "../models/char";
import * as ac from "./char.actions.creater";
const initalState: CharStructure[] = [];

export const charReducer = createReducer(initalState, (builder) => {
  builder.addCase(ac.loadCreator, (_state, { payload }) => payload);
  builder.addCase(ac.deleteCreator, (state, { payload }) =>
    state.filter((item) => item.name !== payload)
  );
  builder.addDefaultCase((state) => state);
});
