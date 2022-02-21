import { Pipe, PipeTransform } from "@angular/core";

// Decorador Pipe para modificar el comportamiento de la clase
@Pipe({
    name: 'filter', 
})

export class FilterPipe implements PipeTransform {

    // Recibiremos un array de String y devolveremos un array de String
    transform(values: any[], arg: any): any[] {
        console.log(values);
        console.log(arg);

        // Devolveremos inmediatamente lo valores que recibimos si...
        if(!arg || arg?.length < 3) return values;

        let result: any[] = [];

        // For para recorrer el array de values
        for(const value of values) {

            let valueIndex = value.name.toLowerCase();

            // Si indexOf ah encontrado algo...
            if(valueIndex.indexOf(arg.toLowerCase()) > -1){
                result = [...result, value];
            }
        }

        return result;
    }

}