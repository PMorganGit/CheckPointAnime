const AbstractRepository = require("./AbstractRepository");

class IsekaiRepository extends AbstractRepository {
  constructor() {
    super({ table: "ISEKAI" });
  }

  async create(isekai) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [
        isekai.Nom,
        isekai.Nom_alternatif,
        isekai.Nombre_episodes,
        isekai.Genres,
        isekai.Synopsis,
        isekai.Picture,
        isekai.Background,
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

module.exports = IsekaiRepository;
