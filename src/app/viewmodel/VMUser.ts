export class VMUser{
    constructor(
        public Id?:number,
        public Name?:string,
        public Address?:string,
        public Birthdate?:Date,
        public Phone?:string,
        public Email?:string,
        public IsAdmin?:boolean,
        public Password?:string,
        public Token?:string
    ){}
}