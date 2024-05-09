{
    //
    interface Developer <T>{
        name:string ;
        computer:{
            brand:string ;
            model:string;
            releaseYear:number
        }
        smartWacth:T
    }
    const poorDeveloper :Developer<{
        brand:string ;
        model:string ;
        
    }>={
        name:'sujon',
        computer:{
            brand:'asus',
            model:'vivo',
            releaseYear :2023
        },
        smartWacth:{
            brand:'lenevvvvvo',
            model:'g46',
    
        },
    }  
    
    
    const riceDeveloper :Developer<{
       brand:string ;
       model:string ;
       display:string;
       heartTrack : boolean ,
       sleemtrack: boolean,
    }>={
        name:'santo',
        computer:{
            brand:'adfgus',
            model:'vivo',
            releaseYear :2023
        },
        smartWacth:{
            brand:'symphoni',
            model:'g46',
            display :'LED',
            heartTrack : true ,
            sleemtrack: true

        },
    }    
    
    
    
    //
}