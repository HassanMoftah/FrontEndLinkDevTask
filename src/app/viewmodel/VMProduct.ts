import { VMProductVsDiscountRule } from "./VMProductVsDiscountRule";

export class VMProduct{
    constructor(
        public Id?:number,
        public Name?:string,
        public Price?:number,
        public Description?:string,
        public ProductVsDiscountRules?:Array<VMProductVsDiscountRule>
    ){
        ProductVsDiscountRules=new Array<VMProductVsDiscountRule>();
    }
}