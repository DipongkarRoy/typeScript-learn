{
    //
    class poorManAccound  {
       readonly id :number ;
        name:string ;
     protected _balance :number;

        constructor(id:number ,name:string,balance:number){
            this.id = id ,
            this.name = name ,
            this._balance = balance 
        }

        addDeposit(amonud:number){
          const amonuds =  this._balance = this._balance + amonud ;
          console.log(amonuds);
        }

    }
    
    class studentAccound extends poorManAccound{
       test(){
        this._balance
       }
    }
    const poorAccound = new poorManAccound(22,'dipok',345)

   // poorAccound.balance=45
     poorAccound.addDeposit(345)
    
    
    
    
    //
}