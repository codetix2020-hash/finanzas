// Wrapper para hacer handlers más robustos
export function safeHandler<T extends (...args: any[]) => Promise<any>>(
  handler: T,
  getMockResponse: (error: any, ...args: Parameters<T>) => any
): T {
  return (async (...args: Parameters<T>) => {
    try {
      return await handler(...args);
    } catch (error: any) {
      console.error('Error in handler:', error);
      return getMockResponse(error, ...args);
    }
  }) as T;
}

