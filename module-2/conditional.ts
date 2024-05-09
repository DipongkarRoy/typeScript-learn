{
    // ts cofknditional oprator :
    type a1 = number ;
    type b1 = undefined ;

    type x = a1 extends null?true:false //conditonal  type
    type y= a1 extends null ?true:b1 extends undefined?undefined:any ;


   type Sheikh = {
    bike:string ;
    car:string ;
    ship:string ;
    plane:string
   }

   type cheekVehicle <T> = T extends keyof Sheikh?true:false ;
   type hasPlane = cheekVehicle<'plane'>



    
    
    
    
    
    //
}