import axios from "axios";
import getUsers from "../users";

jest.mock("axios");

describe("users", () => {
  test("should get users data with mock axios get", async () => {
    // TODO 13: add async test with manual mock
    const expectedResult = { name: "jiexu" };
    const mockResult = { data: expectedResult };
    axios.get.mockResolvedValue(mockResult);
    await expect(getUsers()).resolves.toEqual(expectedResult);
  });
});
