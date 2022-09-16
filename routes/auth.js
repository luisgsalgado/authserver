const { Router } = require("express");
const { check } = require("express-validator");
const {
  crearUsuario,
  loginUsuario,
  renewTokens,
} = require("../controllers/auth");
const { validarCampos } = require("../middlewares/validar-campos");
const { validarJWT } = require("../middlewares/validar-jwt");

const router = Router();

//Crear un nuevo usuario
router.post(
  "/new",
  [
    check("name", "el nombre es obligatorio").not().isEmpty(),
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  crearUsuario
);

//Login de usuario
router.post(
  "/",
  [
    check("email", "El email es obligatorio").isEmail(),
    check("password", "La contraseña es obligatoria").isLength({ min: 6 }),
    validarCampos,
  ],
  loginUsuario
);

//Renovar tokens
router.get("/renew", validarJWT,renewTokens);

module.exports = router;
