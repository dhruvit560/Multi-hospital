import React from "react";

const SingleMedicine = ({
  name,
  quality,
  expiryDate,
  details,
  id,
  editData,
  deleteData,
}) => {
  return (
    <div className="mt-4 col-lg-6">
      <div className="p-4 border member d-flex align-items-start">
        <div className="member-info d-flex">
          <div className="pl-3">
            <p>{id}</p>
            <h4>{name}</h4>
            <p>Quality: {quality}</p>
            <p>Expiry date: {expiryDate}</p>
            <p>{details}</p>
            <a href="#" onClick={editData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path fill="#00cb2c" d="M12.9 6.858l4.242 4.243L7.242 21H3v-4.243l9.9-9.9zm1.414-1.414l2.121-2.122a1 1 0 0 1 1.414 0l2.829 2.829a1 1 0 0 1 0 1.414l-2.122 2.121-4.242-4.242z" />
              </svg>
            </a>
            <a href="#" onClick={deleteData}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path
                  fill="red"
                  d="M17 4h5v2h-2v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6H2V4h5V2h10v2zM9 9v8h2V9H9zm4 0v8h2V9h-2z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleMedicine;
