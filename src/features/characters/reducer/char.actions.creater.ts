import { createAction } from "@reduxjs/toolkit";
import { CharStructure } from "../models/char";
import { charActions } from "./char.actions.types";

export const loadCreator = createAction<CharStructure[]>(charActions.load);

export const deleteCreator = createAction<CharStructure["name"]>(
  charActions.delete
);
