const AbstractRepository = require("./AbstractRepository");

class RomanceRepository extends AbstractRepository {
  constructor() {
    super({ table: "ROMANCE" });
  }

  async create(romance) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [romance.Nom, romance.Nom_alternatif, romance.Nombre_episodes, romance.Genres, romance.Synopsis, romance.Picture, romance.Background]
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

module.exports = RomanceRepository;
