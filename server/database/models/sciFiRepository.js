const AbstractRepository = require("./AbstractRepository");

class SciFiRepository extends AbstractRepository {
  constructor() {
    super({ table: "SCI_FI" });
  }

  async create(sciFi) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [sciFi.Nom, sciFi.Nom_alternatif, sciFi.Nombre_episodes, sciFi.Genres, sciFi.Synopsis, sciFi.Picture, sciFi.Background]
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

module.exports = SciFiRepository;
