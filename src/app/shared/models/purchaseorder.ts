import { Assetdefinition } from "./assetdefinition";
import {Vendors} from "./vendors";
import{Status} from "./status"
export class Purchaseorder {

    
    id: number;
    orderDate: Date
    deliveryDate: Date;
    assetId:number;
    statusId:number;
    vendorId:number;
    active:boolean=true;
    
    assetdef: Assetdefinition = new Assetdefinition();
    vendors: Vendors = new Vendors();
    status: Status=new Status();


}
