import { Sequelize } from "sequelize";

const sequelize = new Sequelize('doctruyen88', 'dienmd', '', {
  host: '192.168.6.12',
  dialect: 'mysql' ,
  logging: false,
})

export const connectDB=async()=>{

    try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}
