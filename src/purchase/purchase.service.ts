import { Injectable } from '@nestjs/common';

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
      totalCalculated: (price * quantity * tax) / 100,
      addedTime: new Date().toString(),
    });
  }

  getAll(): any {
    return this.purchases;
  }
}
