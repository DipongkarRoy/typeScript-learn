{
    //generic consraint with keyOf oparator :

    type Vehicle = {
        bike: string;
        car: string;
        ship: string

    }

    type Owner = 'bike' | 'car' | 'ship';

    type Owner2 = keyof Vehicle;


    const getPropartyValue = <x, y extends keyof x>(obj: x, key: y) => {
        return obj[key]
    }
    const user = {
        name:'dipongkar' ,
        age:34 ,
        address:'rng'
    }
    const res2 = getPropartyValue(user,'address')





    //
}