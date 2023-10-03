import { Assetdefinition } from "./assetdefinition";
import { Vendors } from "./vendors";

export class Assetcreation {
    id : number;
    make:string='';
    modelId:number;
    serialNo:string='';
    assetTypeId:number;
    yearOfManufacture:string='';
    purchaseDate :Date;
    warrranty:string='';
    fromDate:Date;
    toDate:Date;
    vendorAssetTypeID:number;

    vendors: Vendors = new Vendors();
    assetdef: Assetdefinition = new Assetdefinition();




}
