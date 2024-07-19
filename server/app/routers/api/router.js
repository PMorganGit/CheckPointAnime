const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const globalRouter = require("./global/router");
const sportRouter = require("./sport/router");
const romanceRouter = require("./romance/router");
const fantasyRouter = require("./fantasy/router");
const isekaiRouter = require("./isekai/router");
const sciFiRouter = require("./scifi/router");
const comedyRouter = require("./comedy/router");
const dramaRouter = require("./drama/router");
const movieRouter = require("./movie/router");
const sliceoflifeRouter = require("./sliceoflife/router");
const allCategorieRouter = require("./allCategories/router");

router.use("/global", globalRouter);
router.use("/sport", sportRouter);
router.use("/romance", romanceRouter);
router.use("/fantasy", fantasyRouter);
router.use("/isekai", isekaiRouter);
router.use("/sci-fi", sciFiRouter);
router.use("/comedy", comedyRouter);
router.use("/drama", dramaRouter);
router.use("/movie", movieRouter);
router.use("/sliceoflife", sliceoflifeRouter);
router.use("/all-categorie", allCategorieRouter);

/* ************************************************************************* */

module.exports = router;
