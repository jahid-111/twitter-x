import React from "react";

const ModalLayout = ({ children, modal }) => {
  return (
    <div className=" mx-auto my-auto">
      {modal}
      {children}
    </div>
  );
};

export default ModalLayout;
