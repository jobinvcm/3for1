import { Injectable, Inject } from '@nestjs/common';
import { Purchase } from './Purchase.entity';

@Injectable()
export class PurchaseService {
  private purchases = [];

  constructor(
    @Inject('PURCHASE_REPOSITORY')
    private purchaseRepository: typeof Purchase,
  ) {}

  add(
    name: string,
    price: number,
    quantity: number,
    total: number,
    tax: number,
    person: string,
  ) {
    
    this.purchaseRepository.create<Purchase>({
      name: name,
      price: price,
      quantity: quantity,
      totalInput: total,
      tax: tax,
      person: person,
      totalCalculated: price * quantity * (1 + tax / 100),
      addedTime: new Date().toString(),
    });
  }

  async getAll(): Promise<Purchase[]> {
    return await this.purchaseRepository.findAll<Purchase>();
  }
}
