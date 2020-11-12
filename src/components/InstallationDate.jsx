import React, { useState } from "react";
import PropertyType from "./PropertyType";
import { Link as Scrolllink } from "react-scroll";

const InstallationDate = () => {
  const [timeFrame, setTimeFrame] = useState("");
  const components = [<PropertyType />];
  const [index, setIndex] = useState("");

  return (
    <div id="installationDate">
      <h2>When are you looking for installation?</h2>
      <input type="hidden" name="installation_date" value={timeFrame} />
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="zeroToThreeMonthsIcon"
          type="button"
          onClick={() => setTimeFrame("0-3 Months")}
        >
          <img src="/images/dummylogo.png" alt="0-3 months" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="threeToSixMonthsIcon"
          type="button"
          onClick={() => setTimeFrame("3-6 Months")}
        >
          <img src="/images/dummylogo.png" alt="3-6 months" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="sixToTwelveMonthsIcon"
          type="button"
          onClick={() => setTimeFrame("6-12 Months")}
        >
          <img src="/images/dummylogo.png" alt="6-12 months" />
        </button>{" "}
      </Scrolllink>
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        <button
          id="notSure"
          type="button"
          onClick={() => setTimeFrame("Not sure")}
        >
          <img src="/images/dummylogo.png" alt="Not sure" />
        </button>
      </Scrolllink>{" "}
      <br />
      <Scrolllink
        to="addressQuestion"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-250}
        duration={1500}
      >
        Back
      </Scrolllink>
      <Scrolllink
        to="propertyType"
        activeClass="active"
        spy={true}
        smooth={true}
        offset={-30}
        duration={1500}
        onMouseDown={async (e) => {
          setIndex(0);
        }}
      >
        Skip
      </Scrolllink>
      {components[index]}
    </div>
  );
};

export default InstallationDate;