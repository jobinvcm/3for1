import { Body, Controller, Get, Post, Res, HttpStatus } from '@nestjs/common';
import { Response } from 'express';
import { PurchaseService } from './purchase.service';

@Controller('purchase')
export class PurchaseController {
  constructor(private purchaseService: PurchaseService) {}

  @Post('add')
  addPurchases(
    @Body()
    itemDetails: {
      name: string;
      price: number;
      quantity: number;
      total: number;
      tax: number;
      person: string;
    },
    @Res() res: Response,
  ) {
    const { name, price, quantity, total, tax, person } = itemDetails;
    console.log('itemDetails', itemDetails)
    if (name.length && price && quantity && total && tax && person.length) {
      this.purchaseService.add(name, price, quantity, total, tax, person);
      res.status(HttpStatus.CREATED).send();
    } else {
      res.status(HttpStatus.NOT_ACCEPTABLE).send();
    }
  }

  @Get('all')
  getPurchases(): any {
    return this.purchaseService.getAll();
  }
}
