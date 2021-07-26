import { Purchase } from './Purchase.entity';

export const PurchaseProviders = [
  {
    provide: 'PURCHASE_REPOSITORY',
    useValue: Purchase,
  },
];
