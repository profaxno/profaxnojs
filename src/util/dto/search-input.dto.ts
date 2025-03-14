import { IsArray, IsOptional, IsString } from "class-validator";

export class SearchInputDto{
    @IsOptional()
    @IsString()
    search?: string;

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    searchList?: string[];

    @IsOptional()
    @IsArray()
    @IsString({ each: true })
    idList?: string[];

    constructor(search?: string, searchList?: string[], idList?: string[]){
        this.search = search;
        this.searchList = searchList;
        this.idList = idList;
    }
}