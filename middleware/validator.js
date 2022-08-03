const { check, validationResult } = require("express-validator");

exports.registerValidation = () => [
  check("name", "name is required !!").not().isEmpty(),
  check("last_name", "last name is required !!").not().isEmpty(),
  check("email", "enter a valid email!!").isEmail(),
  check("password", "enter a valid password!!").isLength({ min: 6 }),
];

exports.loginValidation = () => [
  check("email", "enter a valid email!!").isEmail(),
  check("password", "enter a valid password!!").isLength({ min: 6 }),
];

exports.orderValidation = () => [
  check("cardNumber", "Card Number is required !!").not().isEmpty(),
  check("cardOwner", "Card Owner name is required !!").not().isEmpty(),
  check("address", "Address is required !!").not().isEmpty(),
  check("city", "City name is required !!").not().isEmpty(),
  check("postalCode", "Postal Code is required !!").not().isEmpty(),
  check("cvv", "cvv is required !!").not().isEmpty(),
  check("dateExpr", "expiration date is required !!").not().isEmpty(),


  check("dateExpr", "enter a valid expiration date!!").isNumeric(),
  check("postalCode", "enter a valid postal code!!").isNumeric(),
  check("cvv", "enter a valid CVV!!").isNumeric(),
];
exports.profileValidation = () => [
  check("name", "name is required !!").not().isEmpty(),
  check("last_name", "last name name is required !!").not().isEmpty(),
  check("phone", "Phone number is not valid !!").isFloat({ min: 0}),

];
exports.AdminprofileValidation = () => [
  check("name", "name is required !!").not().isEmpty(),
  check("last_name", "last name name is required !!").not().isEmpty(),
  check("phone", "Phone number is not valid !!").isFloat({ min: 0}),
  check("email", "enter a valid email!!").isEmail(),

];
exports.passwordValidation = () => [
  check("password", "password is required !!").not().isEmpty(),


];
exports.validation = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  next();
};
