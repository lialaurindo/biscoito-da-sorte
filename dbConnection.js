const { Pool } = require('pg')

const client = new Pool({
  connectionString: process.env.DATABASE_URL || 'postgres://mircslydshneaq:41cf24485d7b4a6bb8678fc783a8f6a553d8a393b64d6ab5bcba360b20fb300a@ec2-52-5-110-35.compute-1.amazonaws.com:5432/d6tn35vv8iqojt',
  ssl: {
    rejectUnauthorized: false
  }
})

client.connect ()

// function connectTeste () {
//   client.query ('SELECT $1:: text as message', ['Olá mundo'], (error, result) => {
//     console.log result.rows[0].message
//   }
//   )}

//   connectTeste ()

module.exports = client