import { Sequelize } from 'sequelize-typescript';
import { Purchase } from './purchase/Purchase.entity';
import { sale } from './sale/sale.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      });
      sequelize.addModels([Purchase, sale]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
