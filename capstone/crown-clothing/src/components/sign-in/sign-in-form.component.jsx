import { useState } from "react";
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";

import Button, { BUTTON_TYPE_CLASSES } from "../button/button.component";
import FormInput from "../form-input/form-input.component";

import { SignInContainer, H2, ButtonsContainer } from "./sign-in-form.styles";

const defaultInputValues = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formInputValues, setFormInputValues] = useState(defaultInputValues);

  const { email, password } = formInputValues;

  const resetFormFields = () => {
    setFormInputValues(defaultInputValues);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormInputValues({ ...formInputValues, [name]: value });
  };

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signInAuthUserWithEmailAndPassword(email, password);

      resetFormFields();
    } catch (err) {
      switch (err.code) {
        case "auth/wrong-password":
          alert("Incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          alert(`${err.code}`);
      }
    }
  };

  return (
    <SignInContainer>
      <H2>I already have an account</H2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label={"Email"}
          type="text"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />
        <FormInput
          label={"Password"}
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />

        <ButtonsContainer>
          <Button children={"Sign In"} type="submit" />
          <Button
            children={"Sign In With Google"}
            buttonType={BUTTON_TYPE_CLASSES.google}
            onClick={signInWithGoogle}
            type="button"
          />
        </ButtonsContainer>
      </form>
    </SignInContainer>
  );
};

export default SignInForm;
