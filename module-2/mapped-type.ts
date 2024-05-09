{
    //mapped type typescript :

    const arrayOfNumber:number[] = [23,45,67,77,56,3,4,55]

    const arrayOfString:string[] = arrayOfNumber.map(ele=>ele.toString())
    console.log(arrayOfString);


    type areaNumber = {
        height :number ;
        width :number ;
    }

    type AreaString = {
        [key in 'height'|'width']:string ;
    }
//boolean type ts systeam :
    type areaNumberStr = {
      [key in keyof areaNumber]:boolean
    }


    
    
    
    
    
    
    
    //
}