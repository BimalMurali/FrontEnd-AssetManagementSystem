import { Assetdefinition } from "./assetdefinition";
import { Vendors } from "./vendors";

export class Assetcreation {
    id : number;
    make:string='';
    modelId:number=0;
    serialNo:string='';
    assetTypeId:number;
    yearOfManufacture:string='';
    purchaseDate :Date;
    warrranty:string='';
    fromDate:Date;
    toDate:Date;
    vendorAssetTypeID:number=0;

    vendors: Vendors = new Vendors();
    assetdef: Assetdefinition = new Assetdefinition();




}
