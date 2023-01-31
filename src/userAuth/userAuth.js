import { RecaptchaVerifier } from "firebase/auth";
import { auth } from "../firebase.js";

const setRecaptcha = (number) => {
    const recaptchaVerifier = new RecaptchaVerifier('recaptcha-container',{}, auth)
    recaptchaVerifier.render()

}


export default setRecaptcha;