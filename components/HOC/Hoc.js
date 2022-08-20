import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Hoc = (Component) => {
  const OriginnalComponent = () => {
    const router = useRouter();
    const [token, setToken] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await axios.get("/api/getToken/");
          if (!result?.data?.token) {
            localStorage.setItem("referer", router.pathname);
            router.replace("/login");
          }
          setToken(result?.data?.token);
        } catch (err) {
          localStorage.setItem("referer", router.pathname);
          router.push("/login");
        }
      };

      fetchData();
    }, []);

    return token ? (
      <Component />
    ) : (
      <div
        style={{ height: "80vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <img src="/images/loader.gif" alt="redirecting" />
      </div>
    );
  };

  return OriginnalComponent;
};

export default Hoc;
