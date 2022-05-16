import React from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";
const SignUp = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let signInError;
  // if true|| loading it will loading all the time
  if (loading || gLoading) {
    return <Loading></Loading>;
  }
  if (error || gError) {
    signInError = <p>{error?.message || gError?.message}</p>;
  }
  if (gUser || user) {
    console.log(gUser || user);
  }

  const onSubmit = (data) => {
    createUserWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center align-center h-screen ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-bold text-primary tex-xl">Log In</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Name</span>
            </label>
            <input
              type="name"
              placeholder="Enter Your Name Here"
              class="input input-bordered w-full max-w-xs"
              {...register("name", {
                required: {
                  value: true,
                  message: "please Input a Valid Email",
                },
              })}
            />
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="Enter Your Email Here"
              class="input input-bordered w-full max-w-xs"
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
            <label class="label">
              {errors.email?.type === "required" && (
                <span class="label-text-alt text-red">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span class="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div class="form-control w-full max-w-xs">
            <label class="label">
              <span class="label-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Your Password Here"
              class="input input-bordered w-full max-w-xs"
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
            <label class="label">
              {errors.password?.type === "required" && (
                <span class="label-text-alt text-red">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span class="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
          </div>
          {signInError}
          <input
            className="btn w-full max-w-xs"
            type="submit"
            value="Sign up"
          />
        </form>
        <small>
          If new Here? Please{" "}
          <Link to="/login" className="text-primary">
            {" "}
            Log In{" "}
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

export default SignUp;
