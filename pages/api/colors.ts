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
        id: "264815",
        code: "151515301b3f3c415cb4a5a5",
        date: "03/19/21",
        likes: "74",
      },
      {
        id: "264754",
        code: "f8f5f1e9896a387c6d343f56",
        date: "03/18/21",
        likes: "224",
      },
      {
        id: "264750",
        code: "f8f4e18978534e3620c8eed9",
        date: "03/17/21",
        likes: "226",
      },
      {
        id: "264739",
        code: "ccffbd7eca9c40394a1c1427",
        date: "03/16/21",
        likes: "447",
      },
      {
        id: "264715",
        code: "eeebdd8100006300001b1717",
        date: "03/15/21",
        likes: "543",
      },
      {
        id: "264684",
        code: "fed049007580282846d8ebe4",
        date: "03/14/21",
        likes: "515",
      },
      {
        id: "265132",
        code: "caf7e3edffecf6dfebe4bad4",
        date: "03/13/21",
        likes: "713",
      },
      {
        id: "265106",
        code: "f39189bb80826e7582046582",
        date: "03/12/21",
        likes: "703",
      },
      {
        id: "265091",
        code: "8658588e7f7fbbbbbbe2d5d5",
        date: "03/11/21",
        likes: "588",
      },
      {
        id: "265073",
        code: "3a6351f2edd7e48257393232",
        date: "03/10/21",
        likes: "679",
      },
      {
        id: "265018",
        code: "cdc733966c3bd0af84ffe6ca",
        date: "03/09/21",
        likes: "443",
      },
      {
        id: "264989",
        code: "fbe6c2f0c929f48b29ac0d0d",
        date: "03/08/21",
        likes: "609",
      },
      {
        id: "264984",
        code: "f0e4d7f5c0c0ff71719fd8df",
        date: "03/07/21",
        likes: "868",
      },
      {
        id: "264917",
        code: "1f441ecee6b49ecca49b3675",
        date: "03/06/21",
        likes: "521",
      },
      {
        id: "265243",
        code: "693c72c15050d97642d49d42",
        date: "03/05/21",
        likes: "610",
      },
      {
        id: "265235",
        code: "440a6793329eb4aee8ffe3fe",
        date: "03/04/21",
        likes: "899",
      },
      {
        id: "265230",
        code: "c8c6a792967d6e7c7c435560",
        date: "03/03/21",
        likes: "791",
      },
      {
        id: "265183",
        code: "e4fbffb8b5ff7868e6edeef7",
        date: "03/02/21",
        likes: "986",
      },
      {
        id: "265182",
        code: "26001b810034ff005cfff600",
        date: "03/01/21",
        likes: "769",
      },
      {
        id: "257775",
        code: "78c4d48f4f4fb7657bf2b4b4",
        date: "02/28/21",
        likes: "731",
      },
      {
        id: "257756",
        code: "ddddddf9f3f3f7d9d9f25287",
        date: "02/27/21",
        likes: "928",
      },
      {
        id: "257686",
        code: "43352002595500917cfde8cd",
        date: "02/26/21",
        likes: "908",
      },
      {
        id: "257660",
        code: "8c0000bd2000fa1e0effbe0f",
        date: "02/25/21",
        likes: "771",
      },
      {
        id: "257912",
        code: "7638578f4068bfb051eff0b6",
        date: "02/24/21",
        likes: "620",
      },
      {
        id: "257903",
        code: "ffab73ffd384fff9b0ffaec0",
        date: "02/23/21",
        likes: "1059",
      },
      {
        id: "257822",
        code: "aa2b1dcc561eef8d32beca5c",
        date: "02/22/21",
        likes: "698",
      },
      {
        id: "257808",
        code: "28527a8ac4d0f4d160fbeeac",
        date: "02/21/21",
        likes: "1129",
      },
      {
        id: "257799",
        code: "4a3933f0a500e45826e6d5b8",
        date: "02/20/21",
        likes: "798",
      },
      {
        id: "258271",
        code: "413c694a47a3709fb0a7c5eb",
        date: "02/19/21",
        likes: "1131",
      },
      {
        id: "258180",
        code: "f14668ffd8806b011f290149",
        date: "02/18/21",
        likes: "738",
      },
      {
        id: "258211",
        code: "85603f9e7540bd9354e3d18a",
        date: "02/17/21",
        likes: "975",
      },
      {
        id: "258185",
        code: "e40017f4c9835b6d5b484018",
        date: "02/16/21",
        likes: "905",
      },
      {
        id: "258212",
        code: "ffcb91ffefa194ebcd6ddccf",
        date: "02/15/21",
        likes: "1327",
      },
      {
        id: "258170",
        code: "ff75a0fce38aeaffd095e1d3",
        date: "02/14/21",
        likes: "1404",
      },
      {
        id: "258165",
        code: "c5d7bd9fb8ad383e56fb743e",
        date: "02/13/21",
        likes: "1357",
      },
      {
        id: "258092",
        code: "a1cae2c2b092cfc5a5eae3c8",
        date: "02/12/21",
        likes: "1283",
      },
      {
        id: "258022",
        code: "faf3e0eabf9fb689731e212d",
        date: "02/11/21",
        likes: "1894",
      },
      {
        id: "257993",
        code: "99bbadebd8b7c6a9a39a8194",
        date: "02/10/21",
        likes: "1627",
      },
      {
        id: "257985",
        code: "91091eda723cc39e5cfdf1d6",
        date: "02/09/21",
        likes: "1036",
      },
      {
        id: "258417",
        code: "822659b34180e36baef8a1d1",
        date: "02/08/21",
        likes: "1518",
      },
    ],
  });
};
