const router = require("express").Router();
const { user } = require("../Controllers");

const { verifyToken, checkRole } = require("../middleware/auth");

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/users", verifyToken, checkRole, user.findAllUser);
router.get("/verification", user.verification)
// router.post("/verifycode", user.registerCode)
// router.get("/codeuser", user.getCodeUser)
module.exports = router;
