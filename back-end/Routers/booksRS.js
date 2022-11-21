const router = require("express").Router();
const { booksCRTL } = require("../controllers");

// delete all data books
// router.delete("/dontdothis", booksCRTL.books_reset);
// end of delete all data books

// add books for admin
router.post("/", booksCRTL.add_books);
// end of add books for admin

router.get("/all", booksCRTL.all_books);
router.get("/ready", booksCRTL.books_ready);
router.get(`/search`, booksCRTL.by_filter);
router.get(`/:type`, booksCRTL.alpha_sort);
// router.get(`/date/:date`, booksCRTL.date_sort);

module.exports = router;
