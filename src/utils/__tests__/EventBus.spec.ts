import { EventBus } from "../EventBus";

describe("EventBus.ts", () => {
  let test = false;
  it("test if EventBus emit an event", () => {
    EventBus.$on("change", () => (test = !test));
    EventBus.$emit("change");
    expect(test).toBe(true);
  });
});
