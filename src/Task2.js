import React from "react";
import "./Task1.css";
import { MdOutlineExpandMore } from "react-icons/md";

function Task2(props) {
  return (
    <>
      <div style={{ backgroundColor: "green" }}>
        <div
          style={{
            backgroundColor: "#ced4da",
            border: "2px solid ced4da",
            borderRadius: "5px",
          }}
        >
          <div
            style={{
              width: "30%",
              height: "459px",
              padding: "40px",
            }}
          >
            <div className="item1" style={{ backgroundColor: "white" }}>
              <div className="container" style={{ fontWeight: "bold" }}>
                <div style={{ color: "gray" }}>01</div>
                <div style={{ color: "black" }}>Where are these chairs ?</div>
                <div style={{ color: "gray" }}>
                  <MdOutlineExpandMore />
                </div>
              </div>
            </div>

            <div className="item2" style={{ backgroundColor: "white" }}>
              <div>
                <hr
                  style={{
                    border: "2px solid green",
                    borderRadius: "5px",
                  }}
                ></hr>
              </div>
              <div
                className="container1"
                style={{ fontWeight: "bold", color: "green", padding: "10px" }}
              >
                <div>02</div>
                <div>How long do i have to return my chairs</div>
                <div>
                  <MdOutlineExpandMore />
                </div>
              </div>
              <div style={{ paddingLeft: "50px" }}>
                <p style={{ maxWidth: "370px" }}>
                  In publishing and graphic design, Lorem ipsum is a placeholder
                  text commonly used to demonstrate the visual form of a
                  document or a typeface without relying on meaningful content.
                  Lorem ipsum may be used as a placeholder before final copy is
                  available.
                </p>
                <div>
                  <li>In publishing and graphic design,</li>
                  <li> a typeface without relying on meaningful</li>
                  <li>a placeholder before final copy is</li>
                  <li>y used to demonstrate the visual</li>
                </div>
              </div>
            </div>

            <div className="item3" style={{ backgroundColor: "white" }}>
              <div className="container" style={{ fontWeight: "bold" }}>
                <div style={{ color: "gray" }}>03</div>
                <div>Do you Ship to countries outside the EU ?</div>
                <div style={{ color: "gray" }}>
                  <MdOutlineExpandMore />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Task2;
