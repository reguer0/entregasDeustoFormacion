const router = require("express").Router();
const path = require("path");

router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});
router.get("/details", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "details.html"));
});

module.exports = router;