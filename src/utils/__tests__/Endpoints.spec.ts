import { buildApiUrl } from "../endpoints";
import env from "@/configs/env";

describe("buildApiUrl()", () => {
  it("test if buildApiUrl build a correct url", () => {
    const url = buildApiUrl("test-url", [{ test: "url" }]);
    expect(url).toMatch(`${env.apiURL}/api/test-url?test=url`);
  });
});
