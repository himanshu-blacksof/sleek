import React, { useState } from 'react';
const Info = ({ info, detail }) => {
  const [show, setShow] = useState(false);
  return (
    <>
      <section className="info_container ">
        <div className="main_heading ">
          <h3 className="heading_container ">{info} </h3>
          <p className="plus_wrapper " onClick={() => setShow(!show)}>
            {show ? '➖' : ' ➕'}
          </p>
        </div>
        {show && <p className="detail_wrapper">{detail}</p>}
        <hr />
      </section>
    </>
  );
};
export default Info;
