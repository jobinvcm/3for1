import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PurchaseModule } from './purchase/purchase.module';
import { PurchaseProviders } from './purchase/Purchase.providers';
import { DatabaseModule } from './database.module';
@Module({
  imports: [PurchaseModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService, ...PurchaseProviders],
})
export class AppModule {}
