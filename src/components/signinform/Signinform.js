import React, { useState } from "react";

const Signinform = ({ setsignedin, setcurrstatus }) => {
  const [emaildata, setemaildata] = useState("");
  const [passdata, setpassdata] = useState("");
  const [errorshow, seterrorshow] = useState("none");
  //we gotta post the data from the front end when the onClick event occurs on the sign in button
  function onsigninclick() {
    /*
    fetch("http://localhost:3000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: emaildata, password: passdata }),
    }).then((response) => {
      if (response.ok) {
        setsignedin(true);
      } else {
        seterrorshow("inline-block");
      }
    });
    
    */
    setsignedin(true);
  }
  return (
    <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 fw6 ph0 mh0">Sign In</legend>
            <div className="mt3">
              <label className="db fw6 lh-copy f6" htmlFor="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="email"
                name="email-address"
                id="email-address"
                onChange={(e) => {
                  setemaildata(e.target.value);
                }}
              />
            </div>
            <div className="mv3">
              <label className="db fw6 lh-copy f6" htmlFor="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
                type="password"
                name="password"
                id="password"
                onChange={(e) => {
                  setpassdata(e.target.value);
                }}
              />
            </div>
          </fieldset>
          <div
            className="error"
            style={{ display: `${errorshow}`, marginTop: "-40px" }}
          >
            <h6>Invalid Username OR Password</h6>
          </div>
          <div className="">
            <input
              className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
              type="submit"
              value="Sign in"
              onClick={onsigninclick}
            />
          </div>
          <div className="lh-copy mt3">
            <div
              className="f6 link dim black db pointer"
              onClick={() => {
                setcurrstatus("register");
              }}
            >
              Register
            </div>
          </div>
        </div>
      </main>
    </article>
  );
};

export default Signinform;
