import { sale } from './sale.entity'

export const saleProviders = [
  {
    provide: 'SALE_REPOSITORY',
    useValue: sale,
  },
];
