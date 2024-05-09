{
    //
    
    type user1 ={
        name:string ;
        age:number
    }

    interface user2{
        name:string ;
        age:number

    }

    type userWithRoll = user1 &{roll:string} ;

    interface userWithRoll2 extends user2{
        roll:string ;
    }
    const user1:userWithRoll2={
        name:'sumon' ,
        age:66 ,
        roll:'beta'
    }
    
    
    
    //
}