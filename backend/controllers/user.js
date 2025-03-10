const { CatchAsyncError } = require("../middlewares/catchAsyncError");
const { Todo } = require("../models/todo");
const { User } = require("../models/user");
const { setCookie, deleteCookie } = require("../utils/cookie");
const { ErrorHandler } = require("../utils/errorHandler");
const { fetchAuthFromCookie } = require("../utils/token");

const userController = {
  signUp: CatchAsyncError(async (req, res, next) => {
    const userPayload = req.body;

    const user = await User.create(userPayload);
    const todoUser = await Todo.create({ email: userPayload.email });

    const token = user.getAuthToken();

    setCookie(res, "token", token);

    res.status(200).json({
      success: true,
      token: token,
    });
  }),

  signIn: CatchAsyncError(async (req, res, next) => {
    const userPayload = req.body;
    const user = await User.findOne({
      $or: [{ email: userPayload.user }, { mobile: userPayload.user }],
    });

    if (!user) {
      return next(new ErrorHandler("Invalid credentials", 404));
    }

    const isMatch = user.verifyPassword(userPayload.password);
    if (!isMatch) {
      return next(new ErrorHandler("Invalid credentials", 400));
    }

    const token = user.getAuthToken();

    setCookie(res, "token", token);

    res.status(200).json({
      success: true,
      token: token,
    });
  }),

  logout: CatchAsyncError(async (req, res, next) => {
    deleteCookie(res, "token");
    req.user = "";
    res.status(200).json({
      success: true,
      message: "Logged out successfully",
    });
  }),

  fetchProfile: CatchAsyncError(async (req, res, next) => {
    const userPayload = req.user;
    res.status(200).json({
      success: true,
      user: userPayload,
    });
  }),

  updateProfile: CatchAsyncError(async (req, res, next) => {
    const updatePayload = req.body;
    const userPayload = req.user;

    const user = await User.updateOne(
      { _id: userPayload._id },
      { $set: updatePayload }
    );

    res.status(200).json({
      success: true,
      message: user,
    });
  }),

  deleteProfile: CatchAsyncError(async (req, res, next) => {
    const token = fetchAuthFromCookie(req);
    await User.deleteOne({ _id: token.id });
    await Todo.deleteOne({ email: token.email });
    deleteCookie(res, "token");
    res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  }),
};

module.exports = {
  userController,
};
