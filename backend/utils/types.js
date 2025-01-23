const zod = require("zod");

const UserParser = zod.object({
  name: zod.string({
    required_error: "Name: This field is required",
  }),
  email: zod
    .string({
      required_error: "Email: This field is required",
    })
    .email("Email: Please enter a valid email address"),
  password: zod
    .string({
      required_error: "Password: This field is required",
    })
    .min(8, "Password: Password must contain minimum 8 characters"),
});

module.exports = {
  UserParser,
};
