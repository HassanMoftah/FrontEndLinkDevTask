export class VMOrder{
    constructor(
        public Id?:number,
        public UserId?:number,
        public TotalPrice?:number,
        public ProductId?:number,
        public Quantity?:number
    ){}
}