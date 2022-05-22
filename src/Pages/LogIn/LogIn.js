import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hook/useToken";
const LogIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [token] = useToken(gUser || user);
  let signInError;
  let from = location.state?.from?.pathname || "/";
  // if true|| loading it will loading all the time
  useEffect(() => {
    if (loading || gLoading) {
      return <Loading></Loading>;
    }
    if (error || gError) {
      signInError = <p>{error?.message || gError?.message}</p>;
    }
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, from, navigate]);

  const onSubmit = async (data) => {
    await signInWithEmailAndPassword(data.email, data.password);
  };

  return (
    <div className="flex justify-center align-center h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-bold text-primary tex-xl">Log In</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              className="input input-bordered w-full max-w-xs"
              {...register("email", {
                required: {
                  value: true,
                  message: "please Input a Valid Email",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+.[a-z]{2,3}/,
                  message: "Provide a valid Email",
                },
              })}
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password Here"
              className="input input-bordered w-full max-w-xs"
              {...register("password", {
                required: {
                  value: true,
                  message: "please Input a Valid passward",
                },
                minLength: {
                  value: 6,
                  message: "Provided  Character of Six length",
                },
              })}
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {signInError}
          <input className="btn w-full max-w-xs" type="submit" value="login" />
        </form>
        <small>
          If new Here? Please{" "}
          <Link to="/signup" className="text-primary">
            {" "}
            Signup{" "}
          </Link>
        </small>

        <div className="divider">OR</div>
        <button className="btn btn-outline" onClick={() => signInWithGoogle()}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};

export default LogIn;
