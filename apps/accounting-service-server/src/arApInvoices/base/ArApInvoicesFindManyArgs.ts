/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ArApInvoicesWhereInput } from "./ArApInvoicesWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { ArApInvoicesOrderByInput } from "./ArApInvoicesOrderByInput";

@ArgsType()
class ArApInvoicesFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => ArApInvoicesWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => ArApInvoicesWhereInput, { nullable: true })
  @Type(() => ArApInvoicesWhereInput)
  where?: ArApInvoicesWhereInput;

  @ApiProperty({
    required: false,
    type: [ArApInvoicesOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [ArApInvoicesOrderByInput], { nullable: true })
  @Type(() => ArApInvoicesOrderByInput)
  orderBy?: Array<ArApInvoicesOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { ArApInvoicesFindManyArgs as ArApInvoicesFindManyArgs };
