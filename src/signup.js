import React, { useState } from "react";

const SignUp = ({ history }) => {
const [error, setError] = useState('');

const postForm = (event) => {
    event.preventDefault();
    let formData = new FormData(document.getElementById("formElem"));
    let isValid = handleValidation(formData);
    if(isValid) {
        let obj = {};
        for(var pair of formData.entries()) {
            if(pair[0] === 'email'){
                obj.email = pair[1]
            }
            if(pair[0] === 'name'){
                obj.name = pair[1]
            }
        }
       history.push("/confirmation", {
          first_name: obj.name,
          email: obj.email
        });
    }
};

  const handleValidation = (formData) => {
      let errMsg = '';
    for(var pair of formData.entries()) {
        if(pair[1] === '') {
            errMsg = "All entries are mandatory";
            setError(errMsg);
        }
        if(pair[0] === 'email'){
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          const isEmailValid =  re.test(String(pair[1]).toLowerCase());
          if(!isEmailValid) {
            errMsg = "In-valid email";
            setError(errMsg);
          }
        }
     }
     if(errMsg === '') return true;
  }

  return (
    <div className="signUp">
      <h1>
        Let's
        <br />
        <b>Sign Up</b>
      </h1>

      <p>
        Use the form below to sign up for this super awesome service. You're
        only a few steps away!
      </p>

      <form className="signUp__form" id="formElem" onSubmit={postForm} autoComplete="off">
        <label className="label" htmlFor="first-name">
          First Name
        </label>
        <input className="input" name="name" id="first-name" type="text" placeholder="Enter First Name" required/>

        <label className="label" htmlFor="email">
          Email Address
        </label>
        <input className="input" name="email" id="email" placeholder="Enter Email Address" autoComplete="userName" type="email" />

        <label className="label" htmlFor="password">
          Password
        </label>
        <input className="input" name="password" id="password" type="password" placeholder="Enter Password" autoComplete="current-password"/>
        <span id="error" >{error}</span>
        <button type="button" className="button signUp-btn" onClick={postForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
