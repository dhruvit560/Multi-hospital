import React, { useState } from "react";
import {useSelector, useDispatch} from "react-redux";
import { increment,decrement } from "../Redux/Action";


const IncDec = () => {
    const myState = useSelector((state) => state.ChangeNumber);
    const dispatch = useDispatch();
  return (
    <>
      <div className="d-flex align-items-center justify-content-center p-5">
        <button onClick={() => dispatch(increment())}>+</button>
        <input name="quanity" type="text" value={myState} className="mx-4" />
        <button>-</button>
      </div>
    </>
  );
};

export default IncDec;
