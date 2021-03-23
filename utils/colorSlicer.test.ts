import colorSlicer from "./colorSlicer";

describe("[Func] colorSlicer", () => {
  test("6자리씩 분해 후 #을 붙여 배열을 리턴", () => {
    const colors: string = "000000111111222222333333";
    const result: string[] = ["#000000", "#111111", "#222222", "#333333"];

    expect(colorSlicer(colors)).toEqual(result);
  });
});

export {};
