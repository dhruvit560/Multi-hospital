import React from "react";

const SingleMedicine = ({name,quality,expiryDate,details,id, deleteData}) => {
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
            <button onClick={() => deleteData()}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path fill="red" d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z"/></svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMedicine;
