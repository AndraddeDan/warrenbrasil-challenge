export const DateUtils = {
  toString(date: string): string {
    return new Date(date).toLocaleDateString("pt-br", { timeZone: "GMT" });
  },
};
