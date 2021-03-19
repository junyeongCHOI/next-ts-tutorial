import MainLayout from "../components/Layout/MainLayout";
import ColorCard from "../components/ColorCard/ColorCard";
import axios from "axios";
import type { GetServerSideProps } from "next";
import type { Color } from "./api/colors";

interface IndexProps {
  colors: Color[];
}

const index = ({ colors }: IndexProps) => {
  return (
    <MainLayout>
      {colors?.map((data, index) => (
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
