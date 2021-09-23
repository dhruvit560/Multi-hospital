import React from "react";

const SingleMedicine = ({name,quality,expiryDate,details,id}) => {
  return (
    <div className="mt-4 col-lg-6">
      <div className="p-4 border member d-flex align-items-start">
        <div className="member-info d-flex">
          <div className="pl-3">
            <p>{id}</p>
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
