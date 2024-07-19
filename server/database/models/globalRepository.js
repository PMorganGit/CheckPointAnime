const AbstractRepository = require("./AbstractRepository");

class GlobalRepository extends AbstractRepository {
  constructor() {
    super({ table: "GLOBAL" });
  }

  async create(global) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [global.Nom, global.Nom_alternatif, global.Nombre_episodes, global.Genres, global.Synopsis, global.Picture, global.Background]
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

module.exports = GlobalRepository;
