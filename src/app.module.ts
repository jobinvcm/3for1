import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { SaleModule } from './sale/sale.module';

@Module({
  imports: [PurchaseModule, SaleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
