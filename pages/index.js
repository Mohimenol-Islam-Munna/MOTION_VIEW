// import components
import Slider from "../components/Slider";
import Options from "../components/Options";
import LeftSideBar from "../components/LeftSideBar";
import Products from "../components/Products";

import styles from "../styles/Home.module.css";

const MotionView = () => {
  return (
    <div className="bg-light">
      <Slider />
      <Options />
      <div className="container border border-primary">
        <div className="row">
          <div className="col-md-3 border border-warning  text-center ">
            <LeftSideBar />
          </div>
          <div className="col-md-9 border border-warning">
            <Products />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionView;
