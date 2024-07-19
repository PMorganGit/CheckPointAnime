const AbstractRepository = require("./AbstractRepository");

class DramaRepository extends AbstractRepository {
  constructor() {
    super({ table: "DRAMA" });
  }

  async create(drama) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [drama.Nom, drama.Nom_alternatif, drama.Nombre_episodes, drama.Genres, drama.Synopsis, drama.Picture, drama.Background]
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

module.exports = DramaRepository;
