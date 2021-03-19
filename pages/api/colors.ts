import type { NextApiRequest, NextApiResponse } from "next";

export interface Color {
  id: string;
  code: string;
  date: string;
  likes: string;
}

export interface Colors {
  readonly [index: number]: string;
  colors: Color[];
}

export default (req: NextApiRequest, res: NextApiResponse<Colors>) => {
  res.status(200).json({
    colors: [
      {
        id: "225739",
        code: "e7e7de00889100587a0f3057",
        date: "12/29/20",
        likes: "2699",
      },
      {
        id: "225709",
        code: "ef4f4fee9595ffcda374c7b8",
        date: "12/28/20",
        likes: "2339",
      },
      {
        id: "226192",
        code: "e7d9ea11698e19456b16c79a",
        date: "12/27/20",
        likes: "1788",
      },
      {
        id: "226158",
        code: "f5f4f4cae4dbcdac8100303f",
        date: "12/26/20",
        likes: "2045",
      },
      {
        id: "226138",
        code: "6f9eafa9294fc7753df6d887",
        date: "12/25/20",
        likes: "1146",
      },
      {
        id: "226115",
        code: "111d5ec70039f37121c0e218",
        date: "12/24/20",
        likes: "1963",
      },
      {
        id: "226038",
        code: "a3ddcbe8e9a1e6b566e5707e",
        date: "12/23/20",
        likes: "1738",
      },
      {
        id: "226374",
        code: "fcf8e8d4e2d4ecb390df7861",
        date: "12/22/20",
        likes: "2948",
      },
      {
        id: "226372",
        code: "cc7351e08f62ded7b19dab86",
        date: "12/21/20",
        likes: "2131",
      },
      {
        id: "226355",
        code: "f8f1f1a3d2ca5eaaa8db6400",
        date: "12/20/20",
        likes: "1590",
      },
      {
        id: "226544",
        code: "583d729f5f80ffba93ff8e71",
        date: "12/19/20",
        likes: "1835",
      },
      {
        id: "226542",
        code: "c6ebc970af85f0e2d0aa8976",
        date: "12/18/20",
        likes: "1778",
      },
      {
        id: "226510",
        code: "433d3c944e6ce9c49683a95c",
        date: "12/17/20",
        likes: "937",
      },
      {
        id: "226410",
        code: "cd5d7df6ecf0a7c5eb949cdf",
        date: "12/16/20",
        likes: "2198",
      },
      {
        id: "226405",
        code: "654062ffd66bff9d72f4f4f4",
        date: "12/15/20",
        likes: "1289",
      },
      {
        id: "226401",
        code: "fa957965406265d6ceffe9d6",
        date: "12/14/20",
        likes: "1630",
      },
      {
        id: "226660",
        code: "ffe5b9eff8ffc9cbffa6a9b6",
        date: "12/13/20",
        likes: "2073",
      },
      {
        id: "226652",
        code: "ffe6e6ffabe1a685e26155a6",
        date: "12/12/20",
        likes: "2694",
      },
      {
        id: "226650",
        code: "ff4646ff8585ffb396fff5c0",
        date: "12/11/20",
        likes: "2206",
      },
      {
        id: "226641",
        code: "d68060f1ae89dff3e386aba1",
        date: "12/10/20",
        likes: "2092",
      },
      {
        id: "226633",
        code: "f1f1f1fdb82721209c23120b",
        date: "12/09/20",
        likes: "1814",
      },
      {
        id: "226607",
        code: "e6e6e6c5a880532e1c0f0f0f",
        date: "12/08/20",
        likes: "1842",
      },
      {
        id: "226593",
        code: "fff3b2ffe0d8ff9b9341584b",
        date: "12/07/20",
        likes: "1518",
      },
      {
        id: "226579",
        code: "f3f2da4e8d7c045762ea97ad",
        date: "12/06/20",
        likes: "1738",
      },
      {
        id: "226727",
        code: "999b84d8ac9cefd9d1f4eeed",
        date: "12/05/20",
        likes: "2662",
      },
      {
        id: "226693",
        code: "583d729f5f80ffba93ff8e71",
        date: "12/04/20",
        likes: "1601",
      },
      {
        id: "226680",
        code: "fcf8ecd0e8f279a3b1456268",
        date: "12/03/20",
        likes: "2944",
      },
      {
        id: "226670",
        code: "bedcfa98acf8b088f9da9ff9",
        date: "12/02/20",
        likes: "3084",
      },
      {
        id: "226668",
        code: "f9e0aefc8621c24914682c0e",
        date: "12/01/20",
        likes: "2078",
      },
      {
        id: "219888",
        code: "153e900e49b554e346fffaa4",
        date: "11/30/20",
        likes: "1523",
      },
      {
        id: "219764",
        code: "a076768259598ad7c1c6fced",
        date: "11/29/20",
        likes: "1461",
      },
      {
        id: "219763",
        code: "0a043c03506fbbbbbbffe3d8",
        date: "11/28/20",
        likes: "2621",
      },
      {
        id: "219741",
        code: "f8f7ded1c145d08752c75643",
        date: "11/27/20",
        likes: "882",
      },
      {
        id: "219738",
        code: "61b15aadce74fff76affce89",
        date: "11/26/20",
        likes: "1611",
      },
      {
        id: "219735",
        code: "d35d6eefb08cf8d49d5aa469",
        date: "11/25/20",
        likes: "1401",
      },
      {
        id: "219733",
        code: "583d729f5f80ffba93ff8e71",
        date: "11/24/20",
        likes: "1660",
      },
      {
        id: "219727",
        code: "f2d974c7956d965d62534e52",
        date: "11/23/20",
        likes: "1282",
      },
      {
        id: "219713",
        code: "222831393e46ffd369eeeeee",
        date: "11/22/20",
        likes: "2519",
      },
      {
        id: "219688",
        code: "16697adb6400ffa62bf8f1f1",
        date: "11/21/20",
        likes: "2146",
      },
      {
        id: "220072",
        code: "bedbbb8db59692817a707070",
        date: "11/20/20",
        likes: "2283",
      },
    ],
  });
};
