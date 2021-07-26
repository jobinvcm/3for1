import { Injectable, Inject} from '@nestjs/common';
import { sale } from './sale.entity';
@Injectable()
export class SaleService {
  constructor(
    @Inject('SALE_REPOSITORY')
    private saleRepository: typeof sale,
  ) {}
  add(
    name: string,
    rate: number,
    quantity: number,
    total: number,
    tax: number,
    person: string,
    customerName?: string,
  ) {
    this.saleRepository.create<sale>({
      itemName: name,
      customerName: customerName,
      rate: rate,
      quantity: quantity,
      totalInput: total,
      tax: tax,
      person: person,
      totalCalculated: rate * quantity * (1 + tax / 100),
      addedTime: new Date().toString(),
    });
  }

  async getAll(): Promise<sale[]> {
    return await this.saleRepository.findAll<sale>();
  }
}
