import React from "react";
import "./education.css";
const divmar = {
  paddingTop: "2%",
  paddingBottom: "2%",
};
const bc = {
  color: "#004c90",
};

class Education extends React.Component {
  render() {
    return (
      <div className="container mt-5 mb-5  c1" style={divmar}>
        <h3 className="text-center">RESUME</h3>

        <div className="row">
          <div className="resume-grid">
            <div className="s1">
              <h3 style={bc}> Work Experience</h3>

              <br />
              <h5>
                {" "}
                <span style={bc}>
                  {" "}
                  Center for Advanced Research in Engineering(CARE){" "}
                </span>{" "}
                Frontend Engineer
              </h5>
              <p>Aug 2019 – Current, Islamabad</p>
              <ul>
                <li>
                  Worked with Design Engineers on Wireframing of ERP Solution
                  for PAC Kamra.{" "}
                </li>
                <li>Parse JSON to HTML Dynamically</li>
                <li>Frontend Bug Fixing</li>
              </ul>

              <h5>
                {" "}
                <span style={bc}> EYCON Pvt Limited </span> Web Developer |
                Intern
              </h5>
              <p>March 2019 – May 2019, Islamabad</p>

              <ul>
                <li>
                  Worked with Design Engineers on Wireframing of ERP Solution
                  for PAC Kamra.{" "}
                </li>
                <li>Parse JSON to HTML Dynamically</li>
                <li>Frontend Bug Fixing</li>
              </ul>

              <h5>
                {" "}
                <span style={bc}> Bright Spyre </span> UI Developer | Intern
              </h5>
              <p>Sept 2014 – Nov 2015, Mumbai</p>
              <ul>
                <li>
                  Worked with Design Engineers on Wireframing of ERP Solution
                  for PAC Kamra.{" "}
                </li>
                <li>Parse JSON to HTML Dynamically</li>
                <li>Frontend Bug Fixing</li>
              </ul>

              <h3> Certificates & BootCamps</h3>

              <h5 style={bc}> IBM | Cognitiveclass.ai </h5>
              <h5> Python for Data Science </h5>

              <h5 style={bc}> IBM | Cognitiveclass.ai </h5>
              <h5> Python for Data Analysis </h5>

              <h5 style={bc}> IBM | Cognitiveclass.ai </h5>
              <h5> Machine Learning in Python </h5>
            </div>
            <div className="s2">
              <h3> Education </h3>
              <hr />

              <h5 style={bc}> COMSATS University Islamabad </h5>
              <h5> BS in Computer Sciences</h5>
              <h6>Feb 2015 – Jan 2019, WAH</h6>

              <h3> Skills </h3>
              <p>
                <span> Information Architecture</span>
              </p>
              <p>
                <span>Contextual Inquiry</span>
              </p>

              <p>
                <span>Wireframing</span>
              </p>

              <p>
                <span> Interaction Design</span>
              </p>

              <p>
                <span> Visual Design</span>
              </p>

              <p>
                <span> Prototyping</span>
              </p>
              <p>
                <span> Mobile App Design</span>
              </p>
              <p>
                <span>Low/High Fidelity mockups</span>
              </p>

              <p>
                <span>Accessibility Evaluation</span>
              </p>

              <p>
                <span> Design Research</span>
              </p>
              <br />
              <h3> Tools </h3>
              <hr />
              <br />
              <h5>
                <span> Wireframing</span>
              </h5>
              <p>Balsamiq, Axure RP</p>
              <h5>
                <span> Design</span>
              </h5>
              <p>Sketch, Adobe Photoshop, Illustrator & XD, Figma</p>
              <h5>
                <span> Prototyping</span>
              </h5>
              <p>Principle, Marvel, Invision</p>
              <h5>
                <span> Development</span>
              </h5>
              <p>HTML, CSS, Javascript</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Education;
