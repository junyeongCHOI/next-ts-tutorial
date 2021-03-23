import colorSlicer from "./colorSlicer";

describe("6자리씩 분해 후 #을 붙여 배열을 리턴", () => {
  test("24자리", () => {
    const colors: string = "000000111111222222333333";
    const result: string[] = ["#000000", "#111111", "#222222", "#333333"];

    expect(colorSlicer(colors)).toEqual(result);
  });

  test("14자리", () => {
    const colors: string = "00000011111122";
    const result: string[] = ["#000000", "#111111", "#22"];

    expect(colorSlicer(colors)).toEqual(result);
  });

  test("0자리", () => {
    const colors: string = "";
    const result: string[] = [];

    expect(colorSlicer(colors)).toEqual(result);
  });

  test("문자열이 아닌 경우", () => {
    const colors: undefined = undefined;
    const result: string[] = [];

    expect(colorSlicer(colors)).toEqual(result);
  });
});

export {};
