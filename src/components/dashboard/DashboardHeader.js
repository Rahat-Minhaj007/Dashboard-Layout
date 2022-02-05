import React from "react";
import DashboardHeaderData from "../../fakeData/DashboardHeaderData";

const DashboardHeader = () => (
  <div className="bg-light mx-3 my-3">
    <div className="row  p-3 g-2">
      {DashboardHeaderData.map((item) => (
        <div className="col-md-4 " key={item.id}>
          <div className="card bg-success bg-opacity-75 text-light p-3">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center">
                <div>{item?.icon}</div>
                <div>
                  <h4 className="text-center">{item?.number}</h4>
                  <h5>{item?.name}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default DashboardHeader;
