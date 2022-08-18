import React from "react";

const Login = () => {
  return <div>Login page</div>;
};

// individual page layout
Login.getLayout = function pageLayout(page) {
  return <>{page}</>;
};

export default Login;
