import { SkeletonGroup } from "../SkeletonGroup";

describe("SkeletonGroup.ts", () => {
  it("SkeletonGroup has correct length", () => {
    expect(SkeletonGroup.length).toBe(7);
  });

  it("SkeletonGroup has correct type", () => {
    expect(SkeletonGroup).toBeInstanceOf(Object);
  });
});
