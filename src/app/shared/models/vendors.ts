import { Assetdefinition } from "./assetdefinition";
import { Assettype } from "./assettype";
export class Vendors {

    id: number=0;
    vendorName: string="";
    type: string="Supplier";
    assettypeid: number=0;
    validFrom: Date;
    validTo: Date;
    address:string='';
    active:boolean=false;
    

    //Object oriented model
    assetdef: Assetdefinition = new Assetdefinition();
    //assettype: Assettype=new Assettype();
    
}
