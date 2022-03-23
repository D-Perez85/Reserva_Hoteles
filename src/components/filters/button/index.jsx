import React from "react";
/**
 * @description Function that return all the components of filters type.
 * @param stateReset is the reference for the  stateReset fn, who contains the list complete of value restarted.
 */
function Button({ stateReset }) {
  const cleanBtn = () => {
    stateReset();
  };
  return (
    <button onClick={cleanBtn} type="reset" className="btn-filter">
      RESET
    </button>
  );
}
export default Button;
