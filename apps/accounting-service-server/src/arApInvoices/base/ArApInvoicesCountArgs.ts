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
import { Type } from "class-transformer";

@ArgsType()
class ArApInvoicesCountArgs {
  @ApiProperty({
    required: false,
    type: () => ArApInvoicesWhereInput,
  })
  @Field(() => ArApInvoicesWhereInput, { nullable: true })
  @Type(() => ArApInvoicesWhereInput)
  where?: ArApInvoicesWhereInput;
}

export { ArApInvoicesCountArgs as ArApInvoicesCountArgs };
