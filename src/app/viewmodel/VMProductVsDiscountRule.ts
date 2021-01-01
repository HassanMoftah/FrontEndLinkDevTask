import { VMDiscountRule } from "./VMDiscountRule";

export class VMProductVsDiscountRule{
    constructor(
        public Id?:number,
        public ProductId?:number,
        public DiscountRuleId?:number,
        public Percentage?:number,
        public DiscountRule?:VMDiscountRule,
        public FinalPrice?:number
    ){}
}