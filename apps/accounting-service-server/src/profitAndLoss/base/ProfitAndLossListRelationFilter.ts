/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ProfitAndLossWhereInput } from "./ProfitAndLossWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class ProfitAndLossListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => ProfitAndLossWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfitAndLossWhereInput)
  @IsOptional()
  @Field(() => ProfitAndLossWhereInput, {
    nullable: true,
  })
  every?: ProfitAndLossWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfitAndLossWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfitAndLossWhereInput)
  @IsOptional()
  @Field(() => ProfitAndLossWhereInput, {
    nullable: true,
  })
  some?: ProfitAndLossWhereInput;

  @ApiProperty({
    required: false,
    type: () => ProfitAndLossWhereInput,
  })
  @ValidateNested()
  @Type(() => ProfitAndLossWhereInput)
  @IsOptional()
  @Field(() => ProfitAndLossWhereInput, {
    nullable: true,
  })
  none?: ProfitAndLossWhereInput;
}
export { ProfitAndLossListRelationFilter as ProfitAndLossListRelationFilter };
