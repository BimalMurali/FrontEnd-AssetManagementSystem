import { Assettype } from "./assettype";
export class Assetdefinition {
    id:number=0;
    assetName:string='';
    category:string='';
    // assettype:number=0;
    assettype: Assettype = new Assettype();


}
