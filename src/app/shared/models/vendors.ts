import { Assettype } from "./assettype";
export class Vendors {

    id: number=0;
    vendorName: string="";
    type: string="";
    assettypeid: number=0;
    validFrom: Date = new Date;
    validTo: Date = new Date;
    address:string='';

    //Object oriented model
    asset: Assettype = new Assettype();
}
