import axios from "axios";
// import components
import Slider from "../components/Slider";
import Options from "../components/Options";
import LeftSideBar from "../components/LeftSideBar";
import Products from "../components/Products";

import styles from "../styles/Home.module.css";

export const getStaticProps = async () => {
  try {
    const result = await axios.get(
      "https://idbdev.com/motion2/public/api/product-is-here-caught-me",
      {
        heders: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return {
      props: {
        data: result ? result?.data : null,
      },
    };
  } catch (err) {
    return {
      props: {
        data: null,
      },
    };
  }
};

const Home = ({ data }) => {
  return (
    <div className="bg-light pb-5">
      <Slider />
      <Options />
      <div className="container border border-primary">
        <div className="row">
          <div className="col-md-3 border border-warning  text-center ">
            <LeftSideBar />
          </div>
          <div className="col-md-9 border border-warning">
            <Products data={data.data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
