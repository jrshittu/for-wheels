import React from 'react';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import firebaseConfig from '@firebaseConfig';
import { getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);

  const enableBiometricAuth = async () => {
    try {
      await auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL); // set persistence
      const provider = new firebase.auth.PhoneAuthProvider();
      await auth.signInWithPopup(provider);
      console.log("Biometric Authetication Successful")
    } catch (error) {
        console.log("Biometric Verification Failed", error)
    }
  };

const BiometricAuthButton = () => {

  const handleEnableBiometricAuth = () => {
    enableBiometricAuth();
  };


  return (
    <div>
      <button className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleEnableBiometricAuth}>
        Enable Biometric Authentication
      </button>
    </div>
  )
}

export default BiometricAuthButton
