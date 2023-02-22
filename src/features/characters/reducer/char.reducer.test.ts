import { CharStructure } from "../models/char";
import { loadCreator } from "./char.actions.creater";
import { charReducer } from "./char.reducer";

describe("Given the charReducer function", () => {
  describe("When we try to load our characters", () => {
    test("Then it should load it", () => {
      const MOCK_CHARS = [
        {
          name: "Joffrey Baratheon",
          bloodline: "Baratheon",
          age: 45,
          isAlive: true,
          message: "Vais a morir todos",
          category: "king",
          timeReigned: 15,
        },
      ] as unknown as CharStructure[];
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue(MOCK_CHARS),
      });
      let result = charReducer([], loadCreator(MOCK_CHARS));
      expect(result).toEqual(MOCK_CHARS);
    });
  });
});
