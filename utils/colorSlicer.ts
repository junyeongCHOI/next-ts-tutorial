const colorSlicer = (string: string): string[] => {
  const result: string[] = [];
  const amount: number = string.length / 6;

  for (let i = 0; i < amount; i++) {
    result.push("#" + string.slice(i * 6, i * 6 + 6));
  }

  return result;
};

export default colorSlicer;
