import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CatAbstractRepository } from 'src/core';

import { PostcatRequestDto } from 'src/core/dtos';
import { CatCreateUseCaseService } from 'src/use-case/cat-create/cat-create-use-case.service';
import { CatGetUseCaseService } from 'src/use-case/cat-get/cat-get-use-case.service';
@Controller()
export class CatController {
  constructor(
    private readonly catGetUseCaseService: CatGetUseCaseService,
    private readonly catCreateUseCaseService: CatCreateUseCaseService,
    private readonly catAbstractRepository: CatAbstractRepository
  ) {}

  @Get('/v1/cat')
  getCat() {
    return this.catGetUseCaseService.getCat();
  }

  @Post('/v1/cat')
  postCat(@Body() postcatRequestDto: PostcatRequestDto) {
    return this.catCreateUseCaseService.createCat(postcatRequestDto);
  }

  @Delete('/v1/cat/:id')
  deleteCat(@Param('id')id: string) {
    return  this.catAbstractRepository.deleteCat(id)
  }
}
