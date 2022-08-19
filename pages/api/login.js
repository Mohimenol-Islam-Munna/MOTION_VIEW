import cookie from "cookie";
import axios from "axios";

const loginHandler = async (req, res) => {
  if (req.method === "POST") {
    try {
      let result = await axios.post(
        "https://idbdev.com/motion2/public/api/login",
        req.body,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
          },
        }
      );

      if (result?.data?.success && result?.data?.data?.token) {
        res.setHeader("Set-Cookie", [
          cookie.serialize("MotionView", result?.data?.data?.token, {
            httpOnly: true,
            // secure: true,
            maxAge: 60 * 60 * 24 * 7,
            sameSite: "lax",
            path: "/",
          }),
        ]);

        return res.status(200).json({ login: true, data: result?.data });
      } else {
        return res.status(200).json({ login: false, data: null });
      }
    } catch (err) {
      console.log("loign resonse in api loign page :err:", err);
      return res.status(500).json({ login: false, data: null });
    }
  } else {
    return res.writeHead(302, { Location: "/login" }).end();
  }
};

export default loginHandler;
