import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const router = useRouter();

  const loginHandler = async (data) => {
    try {
      const res = await axios.post("/api/login", data);
      if (res?.data?.login && res?.data?.data) {
        toast.success("Login successfull", {
          position: "top-right",
          autoClose: 1000,
        });
        reset();

        router.push(
          localStorage.getItem("referer")
            ? `${localStorage.getItem("referer")}`
            : "/"
        );
      } else {
        toast.warning("Login failled", {
          position: "top-right",
          autoClose: 1000,
        });
      }
    } catch (err) {
      toast.warning("Login failled", {
        position: "top-right",
        autoClose: 1000,
      });
      console.log("login err :", err);
    }
  };

  return (
    <>
      <div
        style={{ height: "100vh" }}
        className="bg-light d-flex align-items-center"
      >
        <div
          className="mx-auto p-4 rounded"
          style={{ width: "40%", backgroundColor: "#18253A" }}
        >
          <h2 className="text-center h2 text-white">Login</h2>
          <form onSubmit={handleSubmit(loginHandler)}>
            <div className="row g-3">
              <div className="col-sm-6 mx-auto">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  {...register("email", { required: true })}
                  className="form-control"
                  placeholder="email"
                  aria-label="email"
                />
              </div>
            </div>
            <div className="row g-3 ">
              <div className="col-sm-6 mx-auto">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  {...register("password", { required: true })}
                  className="form-control"
                  placeholder="password"
                  aria-label="password"
                />
              </div>
            </div>
            <div className="row g-3 mt-3">
              <div className="col-sm-6  mx-auto">
                <button
                  type="submit"
                  className="btn btn-primary w-100 text-white fw-bold"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

// individual page layout
Login.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export default Login;
