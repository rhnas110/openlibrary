const router = require("express").Router();
const { user } = require("../Controllers");

const { verifyToken, checkRole } = require("../middleware/auth");
const {multerUpload} = require("../middleware/multer")

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/users", verifyToken, checkRole, user.findAllUser);
router.get("/verification", user.verification)
router.post("/loginadmin", user.loginAdmin);
router.get("/keeplogin/:username", user.keepLogin)
router.post("/single-uploaded/:id",multerUpload.single("file"), user.uploadFile)


module.exports = router;
