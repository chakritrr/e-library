import { Body, Controller, Get, Post } from '@nestjs/common';

import { PostcatRequestDto } from 'src/core/dtos';
import { CatCreateUseCase } from 'src/use-case/cat-create/cat-create-use-case';
import { CatGetUseCase } from 'src/use-case/cat-get/cat-get-use-case';

@Controller()
export class CatController {
  constructor(
    private readonly catGetUseCase: CatGetUseCase,
    private readonly catCreateUseCase: CatCreateUseCase,
  ) {}

  @Get('/v1/cat')
  getCat() {
    return this.catGetUseCase.getCat();
  }

  @Post('/v1/cat')
  postCat(@Body() postcatRequestDto: PostcatRequestDto) {
    return this.catCreateUseCase.createCat(postcatRequestDto);
  }
}
