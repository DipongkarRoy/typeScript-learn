{
    //
    
    type alphaNewmeric = string|number
    const add = (param1:alphaNewmeric ,param2:alphaNewmeric):alphaNewmeric=>{
        if(typeof param1==='number'&& typeof param2 ==='number'){
            return param1+ param2
        }
        else{
            return param1.toString()+ param2.toString()
        }
    }

    console.log(add(23,45));


    //in gurds ts :
    type normalUser={
        name:string
    }
    type adminUser={
        name:string ;
        roll :number;
    }
    const getUser = (user:normalUser|adminUser)=>{
        if('roll'in user){
            console.log(`i have user ${user.name} is roll number ${user.roll}`);
        }
        else{
            console.log(`my name is ${user.name}`);
        }
    }

    const result=
        getUser({
            name:'dipongkar',
            roll:3456
        })
    
    
    
    
    
    
    
    
    
    
    //
}