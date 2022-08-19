import cookie from "cookie";

const getToken = (req, res) => {
  const motionViewToken = cookie.parse((req && req.headers.cookie) || "");

  // after parsing this cookie we should verify this cookie. but there is no verify cookie api so now i skip this process
  if (motionViewToken.MotionView) {
    return res.json({ token: motionViewToken });
  } else {
    return res.json({ token: null });
  }
};

export default getToken;
