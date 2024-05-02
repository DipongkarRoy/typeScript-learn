{
    //

    const friend = ['dipok ','projanto' ,'tithi'] ;
    const friend1 = ['love','relationship','sex'] ;

    const allFriend =  friend.push(...friend1)
    console.log(allFriend);


    const student = ['dipok','sukjon','prohan']
    const system1 = ['mir vai' ,'reduxt' ,'typescript']

    const newData = {
        ...student ,
        ...system1
        
    }
    console.log(newData);



    const user= {
        name:'dipongkar',
        age:34 ,
        class :{
            collage:'rangpur ngc',
            department: 'cse' ,
            roll:435
        },
        address :'rangpur'
    }

    const {
        name,
        class:{roll}
    } = user  ;
    console.log(user)


    // arrray desturing poject :

    const newFriend = ['hoy' ,'trapsos' ,'uttom ','srowon','miran']

    const [,, best,...all] = newFriend ;
    console.log(newFriend);


    //turnari oparator typescript :


    const age: number = 19 ;

    if(age>=18){
        console.log('adult porn star');
    }
    else{
        console.log('chele onk valo ase vai ');
    }
    //nulish oparator :


    const malOrthentic  = undefined ;
    const result = malOrthentic?? 'love anupoma' ;
    console.log(result);


    type User ={
        name:string ;
        address :string ;
        city :string
    }
    const user1:User={
        name:'diomgkar',
        address:'rangpur',
        city:'bangladesh' ,
    }
    const newAddess = user1?.city ??'bangladesh';
    console.log(newAddess);
    



    //
}