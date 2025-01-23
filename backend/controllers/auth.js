const { CatchAsyncError } = require("../middlewares/catchAsyncError");
const { User } = require("../models/user");
const { ErrorHandler } = require("../utils/errorHandler");
const { getAuthPayload } = require("../utils/token");

const authController = {
  checkAuth: CatchAsyncError(async (req, res, next) => {
    const authToken = req.cookies.token;
    if (!authToken) {
      return res.json({
        success: false,
        authenticated: false,
      });
    }
    const authTokenPayload = getAuthPayload(authToken);

    const isUser = await User.findById(authTokenPayload.id);

    if (!isUser) {
      return res.json({
        success: false,
        authenticated: false,
      });
    }

    req.user = isUser;

    res.json({
      success: true,
      authenticated: true,
    });
  }),
};

module.exports = {
  authController,
};
