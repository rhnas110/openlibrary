const router = require("express").Router();
const { user } = require("../Controllers");

const { verifyToken, checkRole } = require("../middleware/auth");

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/users", verifyToken, checkRole, user.findAllUser);
router.get("/verification", user.verification)
router.post("/loginadmin", user.loginAdmin);
router.get("/keeplogin/:username", user.keepLogin)


module.exports = router;
