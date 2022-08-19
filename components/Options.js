import React from "react";
import { ImLoop2 } from "react-icons/im";
import {
  MdArrowDropDown,
  MdGridView,
  MdList,
} from "react-icons/md";
import {BsCardList} from "react-icons/bs"

const Options = () => {
  return (
    <div>
      <div className="container text-center border-bottom">
        <div className="row">
          <div className="col border-start border-end  py-4">
            <div className="hstack gap-3">
              <div className="">Filter</div>
              <div className="ms-auto">
                <ImLoop2 />
              </div>
            </div>
          </div>
          <div className="col border-end  py-4">
            <div className="hstack gap-3">
              <div className="">Sort By Price</div>
              <div className="ms-auto">
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className="col border-end g py-4">
            <div className="hstack gap-3">
              <div className="">Show Max</div>
              <div className="ms-auto">
                <MdArrowDropDown />
              </div>
            </div>
          </div>
          <div className="col border-end py-4">
            <div className="hstack gap-3">
              <div className="">
                <MdGridView className="h5"/>
              </div>
              <div className="">
                <BsCardList className="h5"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
