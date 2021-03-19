import { useEffect, useState, useRef } from "react";
import MainLayout from "../components/Layout/MainLayout";
import ColorCard from "../components/ColorCard/ColorCard";
import axios from "axios";
import type { GetServerSideProps } from "next";
import type { Color } from "./api/colors";

interface IndexProps {
  colors: Color[];
}

const index = ({ colors }: IndexProps) => {
  const [colorCards, setColorCards] = useState([]);
  const cardsCount = useRef(0);

  const setColorCardsDeco = (prevColorsArray: Color[]) => {
    setTimeout(() => {
      setColorCards((prev) => [...prev, prevColorsArray[cardsCount.current]]);

      cardsCount.current++;

      if (cardsCount.current < prevColorsArray.length) {
        setTimeout(() => setColorCardsDeco(prevColorsArray), 50);
      } else {
        cardsCount.current = 0;
      }
    });
  };

  useEffect(() => {
    setColorCardsDeco(colors);
  }, []);

  return (
    <MainLayout>
      {colorCards?.map((data, index) => (
        <ColorCard key={`ColorCard_${data.id}_${index}`} data={data} />
      ))}
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  try {
    const res = await axios.get("http://localhost:3000/api/colors");

    return {
      props: {
        colors: res.data.colors,
      },
    };
  } catch (error) {
    console.error(error);

    return {
      props: {
        colors: [],
      },
    };
  }
};

export default index;
