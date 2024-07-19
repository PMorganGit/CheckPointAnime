// Import the repository modules responsible for handling data operations on the tables
const GlobalRepository = require("./models/globalRepository");
const SportRepository = require("./models/sportRepository");
const RomanceRepository = require("./models/romanceRepository");
const FantasyRepository = require("./models/fantasyRepository");
const IsekaiRepository = require("./models/isekaiRepository");
const SciFiRepository = require("./models/sciFiRepository");
const ComedyRepository = require("./models/comedyRepository");
const DramaRepository = require("./models/dramaRepository");
const MovieRepository = require("./models/movieRepository");
const SliceOfLifeRepository = require("./models/sliceOfLifeRepository"); 
const AllCategorieRepository = require("./models/AllCategoriesRepository");

// Create an empty object to hold data repositories for different tables
const tables = {};

/* ************************************************************************* */
// Register data repositories for tables
/* ************************************************************************* */

// Register each repository as data access point for its table
tables.global = new GlobalRepository();
tables.sport = new SportRepository();
tables.romance = new RomanceRepository();
tables.fantasy = new FantasyRepository();
tables.isekai = new IsekaiRepository();
tables.sciFi = new SciFiRepository();
tables.comedy = new ComedyRepository();
tables.drama = new DramaRepository();
tables.movie = new MovieRepository();
tables.sliceOfLife = new SliceOfLifeRepository();
tables.allCategories = new AllCategorieRepository();

/* ************************************************************************* */

// Use a Proxy to customize error messages when trying to access a non-existing table
module.exports = new Proxy(tables, {
  get(obj, prop) {
    if (prop in obj) return obj[prop];
    throw new ReferenceError(
      `tables.${prop} is not defined. Did you register it in ${__filename}?`
    );
  },
});
