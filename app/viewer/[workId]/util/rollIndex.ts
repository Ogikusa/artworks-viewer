interface RollOptions {
  currentPage: number;
  maxPage: number;
}

export function rollIndex(index: number, options: RollOptions) {
  const offsetIndex = index + options.currentPage;
  if (offsetIndex >= options.maxPage) {
    return offsetIndex - options.maxPage;
  }
  return offsetIndex;
}
