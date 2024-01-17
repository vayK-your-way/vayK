const { Pool } = require('pg');

const PG_URI =
  'postgres://huyessby:wn8uTg-e5OJ6yPXNoPuWLS9Q9MpANM7q@heffalump.db.elephantsql.com/huyessby';

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
