import React from "react";
import {
  useSignInWithGoogle,
  useSignInWithXXX,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const LogIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  return (
    <div className="flex justify-center align-center">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-bold text-primary tex-xl">Log In</h2>
        </div>
        <div className="divider">OR</div>
        <button className="btn btn-outline" onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
