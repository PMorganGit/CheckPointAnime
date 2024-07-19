const AbstractRepository = require("./AbstractRepository");

class SportRepository extends AbstractRepository {
  constructor() {
    super({ table: "SPORT" });
  }

  async create(sport) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [sport.Nom, sport.Nom_alternatif, sport.Nombre_episodes, sport.Genres, sport.Synopsis, sport.Picture, sport.Background]
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

module.exports = SportRepository;
