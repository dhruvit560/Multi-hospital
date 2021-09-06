import React from "react";

const SingleMedicine = ({name,quality,expiryDate,details}) => {
  return (
    <div className="col-lg-6 mt-4">
      <div className="member d-flex align-items-start border p-4">
        <div className="member-info d-flex">
          <div className="pl-3">
            <h4>{name}</h4>
            <p>Quality: {quality}</p>
            <p>Expiry date: {expiryDate}</p>
            <p>
              {details}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMedicine;
