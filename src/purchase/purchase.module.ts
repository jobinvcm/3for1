import { Module } from '@nestjs/common';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';
import { PurchaseProviders } from './Purchase.providers';

@Module({
  controllers: [PurchaseController],
  providers: [PurchaseService, ...PurchaseProviders]
})
export class PurchaseModule {}
