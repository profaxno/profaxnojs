import { Type } from "class-transformer";
import { IsOptional, IsPositive, Min } from "class-validator";

export class SearchPaginationDto{
    @IsOptional()
    @IsPositive()
    @Min(1)
    @Type(() => Number)
    page?: number;

    @IsOptional()
    @IsPositive()
    @Min(1)
    @Type(() => Number)
    limit?: number;
}