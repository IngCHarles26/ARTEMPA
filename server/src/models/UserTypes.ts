import { Model, DataTypes } from 'sequelize';
import dataBase from '../dataBase';

// Define el modelo de usuario
class UserTypes extends Model {
  public id!: number;
  public name!: string;
  // Añade cualquier otro campo que tengas en tu modelo
}

// Inicializa el modelo
UserTypes.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: dataBase,
    modelName: 'TiposUsuario',
  }
);

export default UserTypes;