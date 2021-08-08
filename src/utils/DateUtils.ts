export const DateUtils = {
  toString(date: string | Date): string {
    return new Date(date).toLocaleDateString("pt-br", { timeZone: "GMT" });
  },
};
