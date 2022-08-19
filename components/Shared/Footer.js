import React from "react";
import { MdLocationPin } from "react-icons/md";
import { BsTelephone, BsEnvelopeOpen } from "react-icons/bs";

const Footer = () => {
  return (
    <div style={{ backgroundColor: "#18253A" }} className="py-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-md text-center">
            <h2>Motion View</h2>
          </div>

          <div className="col-md p-0 text-center  mt-3 mt-md-0">
            <ul className="p-0 mb-0">
              <li className="list-group-item">An item lorem10</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div>
          <div className="col-md p-0 text-center mt-3 mt-md-0">
            <ul className=" p-0 mb-0">
              <li className="list-group-item">
                {" "}
                <MdLocationPin className="me-2" />
                An item lorem10
              </li>
              <li className="list-group-item">
                <BsTelephone className="me-2" />A second item
              </li>
              <li className="list-group-item">
                <BsEnvelopeOpen className="me-2" />A third item
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
