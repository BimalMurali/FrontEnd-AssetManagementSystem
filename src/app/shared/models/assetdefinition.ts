import { Assettype } from "./assettype";
export class Assetdefinition {
    id:number=0;
    assetName:string='';
    category:string='';
    assetTypeId:number=0;

    assetType: Assettype = new Assettype();


}
