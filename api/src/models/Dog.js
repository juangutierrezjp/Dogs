const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('dog', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue:DataTypes.UUIDV4,
      autoincrement: true
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    altura: {
      type: DataTypes.STRING,
      allowNull: false
    },
    peso: {
      type: DataTypes.STRING,
      allowNull: false
    },
    temperamentos: {
      type: DataTypes.STRING,
      allowNull: true 
    },
    esperanzaDeVida: {
      type: DataTypes.STRING,
      allowNull: false
    },
    creado:{
      type:DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{timestamps:false});
};
