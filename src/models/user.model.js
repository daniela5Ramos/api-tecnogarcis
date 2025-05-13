import { DataTypes } from 'sequelize';
import { sequelize } from '../libs/db.js';

export const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  timestamps: false
});
