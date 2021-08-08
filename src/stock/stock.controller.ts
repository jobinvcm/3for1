import { Controller, Get, Param } from '@nestjs/common';

@Controller('stock')
export class StockController {
  @Get(':id')
  getStock(@Param() params): any {
    return `the stock name is ${params.id}`
  }
}
