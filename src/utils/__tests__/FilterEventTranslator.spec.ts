import { FilterEvents } from "@/models";
import { FilterEventTranslator } from "../FilterEventTranslator";

describe("FilterEventTranslator.ts", () => {
  const disable = "disable";
  const enable = "enable";

  it("test if FilterEventTranslator return correct text", () => {
    const expectedDisable = FilterEventTranslator[FilterEvents.DISABLE];
    const expectedEnable = FilterEventTranslator[FilterEvents.ENABLE];

    expect(expectedDisable).toBe(disable);
    expect(expectedEnable).toBe(enable);
  });
});
