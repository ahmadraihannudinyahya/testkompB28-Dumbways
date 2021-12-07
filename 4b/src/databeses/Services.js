const mysql2 = require('mysql2');

class Services {
  constructor() {
    this.pool = mysql2.createPool({
      connectionLimit: 10,
      host: '192.168.56.101',
      user: 'developer',
      password: 'developer',
      database: 'wiki_games',
    }).promise();
  }

  async addType({ name }) {
    const id = Date.now();
    const query = `INSERT INTO type_tb (id, name ) VALUES (${id}, '${name}')`;
    await this.pool.query(query);
  }

  async getType() {
    const query = 'SELECT * FROM type_tb';
    const [rows] = await this.pool.query(query);
    return rows;
  }

  async addHero({ name, photo, typeId }) {
    const id = Date.now();
    const query = `INSERT INTO heroes_tb (id, name , type_id, photo) VALUES (${id}, '${name}', '${typeId}', '${photo}')`;
    await this.pool.query(query);
  }

  async gethero() {
    const query = 'SELECT heroes_tb.id, heroes_tb.name, heroes_tb.photo,type_tb.name AS type FROM heroes_tb JOIN type_tb ON heroes_tb.type_id = type_tb.id';
    const [rows] = await this.pool.query(query);
    return rows;
  }
}

module.exports = Services;
