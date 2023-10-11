export class Motos{
    constructor (_id: string, brand:string, model:string, year:Date,plate:string,
name:string,
contact_phone:string,
email:string,
issue_description:string ){
    
    this._id = _id;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.plate = plate;
    this.contact_phone = contact_phone;
    this.email = email;
    this.issue_description = issue_description;
    this.name = name;
    
    }
    _id?:string;
    brand:string;
    model:string;
    year:Date | null ;
    plate:string;
    contact_phone:string;
    email:string;
    issue_description:string;
    name:string;
    }




