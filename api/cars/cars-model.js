const db = require('../../data/db-config.js');

module.exports = {
  getAll,
  getById,
  create,
}
async function getAll() {
  // DO YOUR MAGIC
  const result = await db('cars')
  return result
}

async function getById(id) {
  // DO YOUR MAGIC
  const result = await db('cars').where('id', id).first()
  return result
}

async function create(newcar) {
  // DO YOUR MAGIC
  const [id] = await db('cars').insert(newcar)
  const car = await getById(id)
  return car
}
