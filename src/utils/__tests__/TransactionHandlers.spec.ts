import { transaction } from "@/mocks";
import { TransactionStatus } from "@/models";
import {
  groupTransactionByDate,
  matchTransactionByStatus,
  matchTransactionByTitle,
  matchTransactionByTitleAndStatus,
} from "../TransactionHandlers";

describe("TransactionHandlres", () => {
  let day = 0;

  const list = new Array(10)
    .fill(transaction)
    .map((i, index) => ({ ...i, date: `2020-07-0${index % 3 ? day++ : day}` }));

  it("groupTransactionByDate()", () => {
    const group = groupTransactionByDate(list);
    expect(group.length).toBe(7);
  });

  it("matchTransactionByStatus()", () => {
    const match = matchTransactionByStatus(
      { ...transaction, status: TransactionStatus.created },
      [TransactionStatus.created]
    );
    expect(match).toBe(true);
  });

  it("matchTransactionByTitle()", () => {
    const match = matchTransactionByTitle(
      { ...transaction, title: "potato" },
      "potato"
    );
    expect(match).toBe(true);
  });

  it("matchTransactionByTitleAndStatus()", () => {
    const match = matchTransactionByTitleAndStatus(
      { ...transaction, title: "potato", status: TransactionStatus.processing },
      [TransactionStatus.processing],
      "potato"
    );
    expect(match).toBe(true);
  });
});
