import { Model, DataTypes } from 'sequelize';
import dataBase from '../dataBase';

// Define el modelo de usuario
class Usuario extends Model {
  public id!: number;
  public userName!: string;
  public name!: string;
  public password!: string;
  public email!: string;
  public enabled!: boolean;
  public type!: number ;
  public token?: string | null;
  public limitToken?: number | null;
  public phone!: string ;
  public address!: string ;
  public contact!: string ;
  public phoneContact!: string ;

  // Añade cualquier otro campo que tengas en tu modelo
}

// Inicializa el modelo
Usuario.init(
  {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    type: {
      type: DataTypes.INTEGER,
      defaultValue: 2,
    },
    token: {
      type: DataTypes.STRING,
    },
    limitToken:{
      type: DataTypes.STRING
    },
    phone: {
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
    },
    contact: {
      type: DataTypes.STRING,
    },
    phoneContact: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: dataBase,
    modelName: 'Usuario',
  }
);

export default Usuario;