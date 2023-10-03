import { Assetdefinition } from "./assetdefinition";
import { Vendors } from "./vendors";

export class Assetcreation {
    id : number=0;
    make:string='';
    serialNo:string='';
    yearOfManufacture:string='';
    purchaseDate :Date;
    warrranty:string='';
    fromDate:Date;
    toDate:Date;

    vendors: Vendors = new Vendors();
    assetdef: Assetdefinition = new Assetdefinition();




}
