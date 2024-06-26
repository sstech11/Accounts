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
import { ProfitAndLossWhereUniqueInput } from "./ProfitAndLossWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { ProfitAndLossUpdateInput } from "./ProfitAndLossUpdateInput";

@ArgsType()
class UpdateProfitAndLossArgs {
  @ApiProperty({
    required: true,
    type: () => ProfitAndLossWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProfitAndLossWhereUniqueInput)
  @Field(() => ProfitAndLossWhereUniqueInput, { nullable: false })
  where!: ProfitAndLossWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => ProfitAndLossUpdateInput,
  })
  @ValidateNested()
  @Type(() => ProfitAndLossUpdateInput)
  @Field(() => ProfitAndLossUpdateInput, { nullable: false })
  data!: ProfitAndLossUpdateInput;
}

export { UpdateProfitAndLossArgs as UpdateProfitAndLossArgs };
