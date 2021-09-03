import React from "react";
import Card from "./Card";
import Sdate from "./Sdate";

const Service = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mt-3">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdate.map((val, ind) => {
                return (
                  <Card key={ind} imgsrc={val.imgsrc} ctitle={val.ctitle} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
