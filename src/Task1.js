import React from "react";
import "./Task1.css";
import { MdOutlineExpandMore } from "react-icons/md";
import { MdOutlineExpandLess } from "react-icons/md";

function Task1(props) {
  return (
    <div className="parent">
      <div>
        <div className="container">
          <div className="number">1</div>
          <div className="age">
            what is your age
            <div style={{ border: "1px solid #DEE2E6" }}>I am 25 years old</div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandMore />
          </div>
        </div>
      </div>
      <div>
        <div className="container">
          <div className="number">2</div>
          <div className="age">
            what is ur intro
            <div style={{ border: "1px solid #DEE2E6" }}>Abu bakar</div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandLess />
          </div>
        </div>
        <div className="container">
          <div className="number">3</div>
          <div className="age">
            Tell your Job Title
            <div style={{ border: "1px solid #DEE2E6" }}>Software Engineer</div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandMore />
          </div>
        </div>
      </div>
      <div className="container1">
        <div className="number1">2</div>
        <div className="age1">
          please give ur intro
          <div
            style={{
              border: "1px solid #DEE2E6",
              height: "160px",
              padding: "6px",
            }}
          >
            <strong>This is the second item's accordion body.</strong> It is
            hidden by default, until the collapse plugin adds the appropriate
            classes that we use to style each element. These classes control the
            overall appearance, as well as the showing and hiding via CSS
            transitions. You can modify any of this with custom CSS or
            overriding our default variables. It's also worth noting that just
            about any HTML can go within the <code>.accordion-body</code>,
            though the transition does limit overflow.
          </div>
        </div>
        <div className="dropdown1">
          <MdOutlineExpandLess />
        </div>
      </div>

      {/* <div className="item1">
          <div className="number">1</div>
          <div className="age">
            what is your age
            <div style={{ border: "1px solid gray" }}>
              helloo boss how are you{" "}
            </div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandMore />
          </div>
        </div> */}
      {/* <div className="item2">
          <div className="number">1</div>
          <div className="age">
            what is your age
            <div style={{ border: "1px solid gray" }}>
              helloo boss how are you{" "}
            </div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandMore />
          </div>
        </div> */}
      {/* <div className="item3">
          <div className="number">1</div>
          <div className="age">
            what is your age
            <div style={{ border: "1px solid gray" }}>
              helloo boss how are you{" "}
            </div>
          </div>
          <div className="dropdown">
            <MdOutlineExpandMore />
          </div>
        </div> */}
    </div>
  );
}

export default Task1;
