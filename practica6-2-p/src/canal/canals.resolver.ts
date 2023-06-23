import { Resolver, Query, Mutation, Args, Int, ID } from '@nestjs/graphql';
import { CanalsService } from './canals.service';
import { Canal } from './entities/canal.entity';
import { UpdateCanalInput,  } from './dto/update-canal';
import { CreateCanalInput } from './dto/create-canal';
import { ParseUUIDPipe } from '@nestjs/common';

@Resolver(() => Canal)
export class CanalsResolver {
  constructor(private readonly canalsService: CanalsService) {}

  @Mutation(() => Canal)
  async createCanal(@Args('createCanalInput') createCanalInput: CreateCanalInput)
  :Promise<Canal> {
    return this.canalsService.create(createCanalInput);
  }

  @Query(() => [Canal], { name: 'canals' })
  async findAll():Promise<Canal[]> {
    return this.canalsService.findAll();
  }

  @Query(() => Canal, { name: 'canal' })
  findOne(@Args('id', { type: () => ID}, ParseUUIDPipe ) id: string): Promise<Canal> {
    return this.canalsService.findOne(id);
  }

  @Mutation(() => Canal)
  updateCanal(@Args('updateCanalInput') updateCanalInput: UpdateCanalInput): Promise<Canal> {
    return this.canalsService.update(updateCanalInput.id, updateCanalInput);
  }

  @Mutation(() => Canal)
  removeCanal(@Args('id', { type: () => ID }) id: string): Promise<Canal> {
    return this.canalsService.remove(id);
  }
}
