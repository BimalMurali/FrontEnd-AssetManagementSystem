import { Assettype } from "./assettype";
export class Vendors {

    id: number=0;
    vendorName: string="";
    type: string="";
    validFrom: Date;
    validTo: Date;
    address:string='';

    //Object oriented model
    asset: Assettype = new Assettype();
}
