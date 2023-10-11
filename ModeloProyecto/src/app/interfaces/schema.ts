export class Product{
constructor (_id:string, name:string, price:number){


this._id = _id;
this.name = name;
this.price = price;


}

_id?:string;
name:string;
price:number | null ;

}


// creando una clase que lleva propiedad y el tipo de dato
// cuando tengo las propiedades definidas constructor , funcion donde recibo los valores
// adentro  con el this le estoy asingando los valores 