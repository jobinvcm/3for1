import { Sequelize } from 'sequelize-typescript';
import { Purchase } from './purchase/Purchase.entity';


export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: 'localhost',
        port: 8181,
        username: 'root',
        password: 'password',
        database: 'test',
      });
      sequelize.addModels([Purchase]);
      await sequelize.sync();
      return sequelize;
    },
  },
];

