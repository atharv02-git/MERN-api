// @desc    Register new User
// @route   Post /api/users
// @access  Public
const registerUser = (req, res) => {
  res.json({ message: "User registered" });
};
// @desc    Authenticate a User
// @route   Post /api/users/login
// @access  Public
const loginUser = (req, res) => {
  res.json({ message: "User logged in" });
};
// @desc    GET Users data
// @route   Get /api/users/me
// @access  Public
const getMe = (req, res) => {
  res.json({ message: "User data display" });
};

module.exports = {
  registerUser,
  loginUser,
  getMe,
};
