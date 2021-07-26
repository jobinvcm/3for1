import { Module } from '@nestjs/common';
import { SaleController } from './sale.controller';
import { SaleService } from './sale.service';
import { saleProviders } from './sale.providers';

@Module({
  controllers: [SaleController],
  providers: [SaleService, ...saleProviders]
})
export class SaleModule {}
