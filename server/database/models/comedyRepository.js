const AbstractRepository = require("./AbstractRepository");

class ComedyRepository extends AbstractRepository {
  constructor() {
    super({ table: "COMEDY" });
  }

  async create(comedy) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [comedy.Nom, comedy.Nom_alternatif, comedy.Nombre_episodes, comedy.Genres, comedy.Synopsis, comedy.Picture, comedy.Background]
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

module.exports = ComedyRepository;
