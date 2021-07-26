import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PurchaseService {
  private purchases = [];

  add(
    name: string,
    price: number,
    quantity: number,
    total: number,
    tax: number,
    person: string,
  ) {
    this.purchases.push({
      name: name,
      price: price,
      quantity: quantity,
      totalInput: total,
      tax: tax,
      person: person,
      totalCalculated: price * quantity * (1 + tax / 100),
      addedTime: new Date().toString(),
      id: uuidv4(),
    });
  }

  getAll(): any {
    return [...this.purchases];
  }
}
