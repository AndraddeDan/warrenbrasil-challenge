import { NormalizeUtils } from "../NormalizeUtils";

describe("NormalizeUtils.ts", () => {
  it("test if NormalizeUtils return correct text", () => {
    const str = "ráRãózç23é";
    const normalized = NormalizeUtils(str);

    expect(normalized).toBe("raraozc23e");
  });
});
