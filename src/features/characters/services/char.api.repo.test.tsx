/* eslint-disable jest/no-conditional-expect */
import { CharApiRepo } from "./char.api.repo";
import { CharStructure } from "../models/char";

describe("Given the CharsApiRepo class", () => {
  describe("When we instance the parameters", () => {
    let repo: CharApiRepo;

    beforeEach(() => {
      repo = new CharApiRepo();
    });

    test("Then, it should it fetch the data from our api", async () => {
      global.fetch = jest.fn().mockResolvedValue({
        ok: true,
        json: jest.fn().mockResolvedValue([]) as unknown as CharStructure,
      });

      const result = await repo.loadChars();
      expect(result).toEqual([]);
    });
    describe("When we try to make a fetch", () => {
      test("Then, if we got an error it should clg the error", async () => {
        global.fetch = jest.fn().mockResolvedValue({
          ok: false,
          json: jest.fn(),
        });
        try {
          await repo.deleteChar("paco");
        } catch (error) {
          expect((error as Error).message).toBe("Delete was not possible!");
        }
      });
    });
  });
});
