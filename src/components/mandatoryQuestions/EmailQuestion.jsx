import React from "react";
import "./EmailQuestion.style.css";
import { Field } from "react-final-form";
import { Link as Scrolllink } from "react-scroll";
import Media from "react-media";
import { Popup, Icon } from "semantic-ui-react";

const EmailQuestion = () => {
  return (
    <>
      <div>
        <Media
          queries={{
            mobile: "(max-width: 599px)",
            desktop: "(min-width: 600px)",
          }}
        >
          {(matches) => (
            <>
              {matches.mobile && (
                <div id="emailQuestionMobile">
                  <div id="emailQuestionDiv">
                    <div id="questionForEmail">
                      <p id="questionAskingForEmail">
                        <img
                          id="emailQuestionImage"
                          src="/images/questionLogo.png"
                          alt="email question"
                        />{" "}
                        {""}
                        Great, what's your email address?
                      </p>{" "}
                      <Field
                        id="fieldEmailMobile"
                        name="email"
                        component="input"
                        type="text"
                        placeholder="Email"
                      />
                      <br />
                    </div>
                  </div>
                </div>
              )}
              {matches.desktop && (
                <div id="emailQuestion">
                  <div id="emailQuestionDiv">
                    <div id="questionForEmail">
                      <p id="questionAskingForEmail">
                        <img
                          id="emailQuestionImage"
                          src="/images/questionLogo.png"
                          alt="email question"
                        />{" "}
                        {""}
                        Great, what's your email address?
                      </p>{" "}
                      <Field
                        id="fieldEmail"
                        name="email"
                        component="input"
                        type="text"
                        placeholder="Email"
                      />
                      <br />
                    </div>
                  </div>
                  <Scrolllink
                    id="emailBack"
                    to="nameQuestion"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                  >
                    <Popup
                      trigger={
                        <Icon size="big" name="angle left" id="backToNameQ" />
                      }
                      content="Back to previous question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                  <Scrolllink
                    to="telephoneQuestion"
                    activeClass="active"
                    spy={true}
                    smooth={true}
                    offset={0}
                    duration={1500}
                  >
                    <Popup
                      trigger={
                        <Icon
                          size="big"
                          name="angle right"
                          id="nextToTelephoneQ"
                        />
                      }
                      content="Next question"
                      inverted
                      position="bottom center"
                    />
                  </Scrolllink>
                </div>
              )}
            </>
          )}
        </Media>
      </div>
    </>
  );
};

export default EmailQuestion;