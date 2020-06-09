import React from "react";
import "./portfolio.css";
import "./images";
import portfolioImage from "./images";
const divmar = {
  paddingTop: "2%",
  paddingBottom: "2%",
};

class Portfolio extends React.Component {
  render() {
    return (
      <div className="mb-5 container c1" style={divmar}>
        <h3 className="text-center">PORTFOLIO</h3>
        <div className="mt-5 row">
          <div className=" col-md-4">
            <img className="fluid" src={portfolioImage.img1} />
          </div>
          <div className="col-md-4">
            <img className="fluid" src={portfolioImage.img2} />
          </div>
          <div className="col-md-4">
            <img className="fluid" src={portfolioImage.img3} />
          </div>
        </div>
        <div className="mt-5 row">
          <div className=" col-md-4">
            <img className="fluid" src={portfolioImage.img4} />
          </div>
          <div className="col-md-4">
            <img width="100%" height="350px" src={portfolioImage.img6} />
          </div>
          <div className="col-md-4">
            <img className="fluid" src={portfolioImage.img5} />
          </div>
        </div>
      </div>
    );
  }
}
export default Portfolio;
