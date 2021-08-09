import { DateUtils } from "../DateUtils";

describe("DateUtils.ts", () => {
  const date = "2020-07-01";

  it("test if DateUtils format date to string", () => {
    const formatedDate = DateUtils.toString(date);
    expect(formatedDate).toBe("01/07/2020");
  });
});
