const AbstractRepository = require("./AbstractRepository");

class AllCategoriesRepository extends AbstractRepository {
  constructor() {
    super({ table: "AllCategorie" });
  }

  async create(category) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (GlobalID, SportID, RomanceID, SliceOfLifeID, FantasyID, IsekaiID, SciFiID, ComedyID, DramaID, MovieID) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [
        category.GlobalID,
        category.SportID,
        category.RomanceID,
        category.SliceOfLifeID,
        category.FantasyID,
        category.IsekaiID,
        category.SciFiID,
        category.ComedyID,
        category.DramaID,
        category.MovieID,
      ]
    );
    return result.insertId;
  }

  async read(id) {
    const [rows] = await this.database.query(
      `SELECT * FROM ${this.table} WHERE ID = ?`,
      [id]
    );
    return rows[0];
  }

  async readAll() {
    const [rows] = await this.database.query(`SELECT * FROM ${this.table}`);
    return rows;
  }
}

module.exports = AllCategoriesRepository;
