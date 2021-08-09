import { transaction } from "@/mocks";
import { RequestSimulator } from "../RequestSimulator";

describe("RequestSimulator.ts", () => {
  it("test if RequestSimulator return correct value", async () => {
    const request = await RequestSimulator(false, 200, transaction);
    expect(request).toBe(transaction);
  });

  it("test if RequestSimulator return an error", async () => {
    try {
      await await RequestSimulator(true, 200, transaction);
    } catch (e) {
      const expectedData = "Error: Sem resposta";
      expect(e.toString()).toEqual(expectedData);
    }
  });
});
