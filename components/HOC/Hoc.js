import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Hoc = (Component) => {
  const OriginnalComponent = (props) => {
    const router = useRouter();
    const [token, setToken] = useState(null);
    const [isTokenLoading, setIsTokenLoading] = useState(false);

    useEffect(() => {
      setIsTokenLoading(true);
      const fetchData = async () => {
        try {
          const result = await axios.get("/api/getToken/");

          if (!result?.data?.token) {
            localStorage.setItem("referer", router.pathname);
            router.replace("/login");
          }
          setToken(result?.data?.token);
        } catch (err) {
          setToken(null);
          router.push("/login");
        } finally {
          setIsTokenLoading(false);
        }
      };

      fetchData();
    }, []);

    if (!isTokenLoading && !token) {
      return (
        <div
          style={{ height: "80vh" }}
          className="d-flex justify-content-center align-items-center"
        >
          <img src="/images/loader.gif" alt="redirecting" />
        </div>
      );
    }

    if (!isTokenLoading && token) {
      return <Component />;
    }
  };

  return OriginnalComponent;
};

export default Hoc;
