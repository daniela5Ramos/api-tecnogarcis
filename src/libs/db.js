import { Sequelize } from 'sequelize';
import { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } from '../config/config.js';

export const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql'
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('✅ Conexión exitosa con la base de datos');
  } catch (error) {
    console.error('❌ Error al conectar con la base de datos:', error.message);
  }
})();
