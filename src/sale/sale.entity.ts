import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class sale extends Model {
  @Column
  itemName: string;

  @Column
  customerName: string;

  @Column
  rate: number;

  @Column
  quantity: number;

  @Column
  tax: number;

  @Column
  person: string;

  @Column
  totalCalculated: number;

  @Column
  addedTime: string;
}
