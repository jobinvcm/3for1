import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class SaleService {
  private sales = [];

  add(
    name: string,
    rate: number,
    quantity: number,
    total: number,
    tax: number,
    person: string,
    customerName?: string,
  ) {
    this.sales.push({
      itemName: name,
      customerName: customerName,
      rate: rate,
      quantity: quantity,
      totalInput: total,
      tax: tax,
      person: person,
      totalCalculated: rate * quantity * (1 + tax / 100),
      addedTime: new Date().toString(),
      id: uuidv4(),
    });
  }

  getAll(): any {
    return [...this.sales];
  }
}
