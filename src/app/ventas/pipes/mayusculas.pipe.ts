import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'mayusculas'
})
export class MayusculasPipe implements PipeTransform{
  
    transform( value: string, enMayus?: boolean ): string {

    //    if(enMayus){
    //        return value.toUpperCase();
    //    }
        
    //     return value.toLowerCase();

    return ( enMayus ) ? value.toUpperCase() : value.toLowerCase();

    }
}