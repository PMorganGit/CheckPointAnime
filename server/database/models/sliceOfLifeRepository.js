const AbstractRepository = require("./AbstractRepository");

class SliceOfLifeRepository extends AbstractRepository {
  constructor() {
    super({ table: "SLICE_OF_LIFE" });
  }

  async create(sliceOfLife) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Nombre_episodes, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [sliceOfLife.Nom, sliceOfLife.Nom_alternatif, sliceOfLife.Nombre_episodes, sliceOfLife.Genres, sliceOfLife.Synopsis, sliceOfLife.Picture, sliceOfLife.Background]
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

module.exports = SliceOfLifeRepository;
