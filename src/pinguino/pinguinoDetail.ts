
import { Pinguino } from "./pinguino";

export class PinguinoDetail extends Pinguino{

    global_distribution:string;
    description:string;
    image:string;

    constructor(
    id:number,
    nombre:string,
    scientific_name: string,
    feeding:string,
    global_distribution:string,
    description:string,
    image:string
    ){
        super(id,nombre,scientific_name,feeding)
        this.global_distribution=global_distribution;
        this.description=description;
        this.image=image;
    }
}

