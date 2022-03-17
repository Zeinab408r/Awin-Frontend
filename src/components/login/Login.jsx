import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  
  faFacebook,
  faTwitter,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";
import "./Login.css";


const Login = () => {
  return (
    <div id="loginform">
      <FormHeader title="Welcome Back" />
      <Form />
      <OtherMethods />
      
    </div>
  );
};
const FormHeader = (props) => <h2 id="headerTitle">{props.title}</h2>;
const Form = (props) => (
  <div>
    <FormInput
      description="Username"
      placeholder="Enter your username"
      type="text"
    />
    <FormInput
      description="Password"
      placeholder="Enter your password"
      type="password"
    />
    <FormButton title="Log in" />
  </div>
);
const FormButton = (props) => (
  <div id="button" class="row">
    <button>{props.title}</button>
  </div>
);
const FormInput = (props) => (
  <div class="row">
    <label>{props.description}</label>
    <input type={props.type} placeholder={props.placeholder} />
  </div>
);
const OtherMethods = props => (
       <div id="alternativeLogin">
         <label>Or sign in with:</label>
         <div id="iconGroup">
           <Facebook />
           <Twitter />
           <Google />
         </div>
       </div>
     );
     
     const Facebook = props => (
       <a href="https://www.facebook.com" id="facebookIcon">
       <FontAwesomeIcon icon={faFacebook} size="2x" />
     </a>);
     
     const Twitter = props => (
       <a href="https://www.facebook.com" id="twitterIcon">
       <FontAwesomeIcon icon={faTwitter} size="2x" /></a>
     );
     
     const Google = props => (
       <a href="https://www.facebook.com" id="googleIcon">
       <FontAwesomeIcon icon={faGoogle} size="2x" /></a>
     );
     

export default Login;
