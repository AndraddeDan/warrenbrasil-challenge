export const RequestSimulator = <T>(
  withError = true,
  timeOut = 3000,
  expectedData: T
): Promise<T> =>
  new Promise((resolve, reject) =>
    setTimeout(
      () =>
        withError ? reject(new Error("Sem resposta")) : resolve(expectedData),
      timeOut
    )
  );
