const router = require("express").Router();
const auth = require("../middlewares/auth.middleware");
const tokenCtrl = require("../controllers/token.controller");

router.post("/generate-token", tokenCtrl.generateToken);
router.post("/next-token", auth("COUNTER"), tokenCtrl.nextToken);
router.post("/serve", auth("COUNTER"), tokenCtrl.serveToken);
router.post("/skip", auth("COUNTER"), tokenCtrl.skipToken);

module.exports = router;
