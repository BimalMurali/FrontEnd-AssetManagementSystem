import { Assetdefinition } from "./assetdefinition";
import {Vendors} from "./vendors";
import{Status} from "./status"
export class Purchaseorder {

    
    id: number=0;
    purchaseOrderNo: number=0;
    orderDate: Date
    deliveryDate: Date;
    assetTypeId:number;
    statusnames:string;
    vendorid:number;
    
    assetdef: Assetdefinition = new Assetdefinition();
    vendors: Vendors = new Vendors();
    status: Status=new Status();


}
