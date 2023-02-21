import { useDispatch, useSelector } from "react-redux";
import { CharApiRepo } from "../services/char.api.repo";
import { AppDispatch, RootState } from "../../../core/store/store";
import { useEffect } from "react";
import * as ac from "../reducer/char.actions.creater";

export function UseChars(repo: CharApiRepo) {
  const chars = useSelector((state: RootState) => state.chars);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const loadChars = async () => {
      try {
        const data = await repo.loadChars();
        dispatch(ac.loadCreator(data));
      } catch (error) {
        console.log((error as Error).message);
      }
    };
    loadChars();
  }, [dispatch, repo]);

  return {
    chars,
  };
}
