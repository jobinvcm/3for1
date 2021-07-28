import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';
import { PurchaseProviders } from './purchase/Purchase.providers';
import { DatabaseModule } from './database.module';
import { SaleService } from './sale/sale.service';
import { saleProviders } from './sale/sale.providers';
import { StockController } from './stock/stock.controller';
@Module({
  imports: [PurchaseModule, DatabaseModule, SaleModule],
  controllers: [AppController, StockController],
  providers: [AppService, ...PurchaseProviders, SaleService, ...saleProviders],
})
export class AppModule {}
