import { ApiService } from "../ApiService";

describe("ApiService.ts", () => {
  it("test if ApiService is defined", () => {
    expect(ApiService).toBeInstanceOf(Object);
    expect(ApiService).not.toBeUndefined();
  });
});
