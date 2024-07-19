const AbstractRepository = require("./AbstractRepository");

class FantasyRepository extends AbstractRepository {
  constructor() {
    super({ table: "FANTASY" });
  }

  async create(fantasy) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        fantasy.Nom,
        fantasy.Nom_alternatif,
        fantasy.Nombre_episodes,
        fantasy.Genres,
        fantasy.Synopsis,
        fantasy.Picture,
        fantasy.Background,
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

module.exports = FantasyRepository;
