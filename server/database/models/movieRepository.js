const AbstractRepository = require("./AbstractRepository");

class MovieRepository extends AbstractRepository {
  constructor() {
    super({ table: "MOVIE" });
  }

  async create(movie) {
    const [result] = await this.database.query(
      `INSERT INTO ${this.table} (Nom, Nom_alternatif, Genres, Synopsis, Picture, Background) VALUES (?, ?, ?, ?, ?, ?)`,
      [movie.Nom, movie.Nom_alternatif, movie.Genres, movie.Synopsis, movie.Picture, movie.Background]
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

module.exports = MovieRepository;
