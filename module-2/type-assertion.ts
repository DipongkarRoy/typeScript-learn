{
    //

    let anything: any;

    anything = 'delta compuer science collage ,rangpur';
    (anything as string).indexOf('compuer')

    anything = 790;
    (anything as number).toFixed()



    const kgToGm = (value: string | number): string | number | undefined => {
        if (typeof value === 'string') {
            const converted = parseFloat(value) * 345;
            return `this value is: ${converted}`
        }
        else if (typeof value === 'number') {
            return value * 456
        }
        else {
            return 'value is not defind'
        }
    }

    console.log(kgToGm('546') as string);
    console.log(kgToGm(234)as number);


    type errorMassage = {
        massage: string
    }

    try{

    }catch(error){
        console.log((error as errorMassage).massage);
    }
    








    //
}