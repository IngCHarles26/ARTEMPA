import { Model, DataTypes } from 'sequelize';
import dataBase from '../dataBase';

// Define el modelo de usuario
class Usuario extends Model {
  public id!: number;
  public nombre!: string;
  public email!: string;
  public password!: string;
  public token?: string | null;
  public confirmado?: boolean;

  // Añade cualquier otro campo que tengas en tu modelo
}

// Inicializa el modelo
Usuario.init(
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    token: {
      type: DataTypes.STRING,
    },
    confirmado: {
      type: DataTypes.BOOLEAN,
    },
  },
  {
    sequelize: dataBase,
    modelName: 'Usuario',
  }
);

export default Usuario;