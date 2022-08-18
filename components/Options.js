import React from "react";
import { ImLoop2 } from "react-icons/im";
import {
  MdArrowDropDown,
  MdArrowDropUp,
  MdGridView,
  MdList,
} from "react-icons/md";

const Options = () => {
  return (
    <div>
      <div className="container text-center">
        <div className="row">
          <div className="col border border-warning py-4">
            <div className="hstack gap-3">
              <div className="">Filter</div>
              <div className="ms-auto">
                <ImLoop2 />
              </div>
            </div>
          </div>
          <div className="col border border-warning py-4">
            <div className="hstack gap-3">
              <div className="">Sort By Price</div>
              <div className="ms-auto">
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className="col border border-warning py-4">
            <div className="hstack gap-3">
              <div className="">Show Max</div>
              <div className="ms-auto">
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className="col border border-warning py-4">
            <div className="hstack gap-3">
              <div className="">
                <MdGridView />
              </div>
              <div className="">
                <MdList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
