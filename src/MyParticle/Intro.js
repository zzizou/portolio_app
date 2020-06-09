import React from "react";
import "./intro.css";
const divmar = {
  paddingTop: "2%",
  paddingBottom: "2%",
};
function Intro() {
  return (
    <div className=" container mt-5 mb-5  c1">
      <div style={divmar}>
        <div className="offset-md-5 offset-5 myimg">
          <img className="img-fluid imgcircle" src="/assets/zizou.png" />
        </div>
        <h1 className="text-center " id="title">
          ZEESHAN ZAFAR
        </h1>
        <p className=" text-center" id="subtitle">
          FULL STACK DEVELOPER
        </p>
        <p className=" text-center lead">
          A Full Stack Developer who understands that Practicality, Hard work
          and Determination is the way towards success. I am extremely motivated
          to constantly develop my skills and grow professionally to earn
          experience by working with experts for learning new skill.
        </p>
      </div>
      {/* // <img class="card-img" width="60" src="/assets/zeeshan.jpg" alt="Zeeshan Zafar"/> */}
    </div>
  );
}
export default Intro;
