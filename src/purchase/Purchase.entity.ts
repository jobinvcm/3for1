import { Table, Column, Model } from 'sequelize-typescript';

@Table
export class Purchase extends Model {
  @Column
  name: string;

  @Column
  price: number;

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
