import React from 'react';
import '../Styles/about.css';

const About = () => {
  return (
    <>
      <section className="about_container ">
        <div className="about_heading_wrapper ">
          <h1 className="sleek_wrapper ">Sleek </h1>
          <h1 className="studio_wrapper "> Studio</h1>
        </div>
        <div className="about_para_wrapper ">
          <p className="para_wrapper">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
        </div>
        <div className="about_heading_wrapper ">
          <h1 className="sleek_wrapper ">Our </h1>
          <h1 className="studio_wrapper purpose "> purpose</h1>
        </div>
      </section>
    </>
  );
};
export default About;
