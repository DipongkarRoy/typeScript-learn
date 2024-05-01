import { error } from "console";

{//

    const searchName = (value: string) => {
        if (value) {
            console.log('value is string');
        }

        else {
            console.log('not found value');
        }
    }

    searchName('dipongkar')


    //unknown type :
    const getSpeedMeterSceound = (value: unknown) => {
        if (typeof value === 'number') {
            const convarted = (value * 1000) / 3600;
            console.log(`the speed is ${convarted}`)
        }

        else if (typeof value === 'string') {
            const [result, unit] = value.split('');
            console.log(result);
            const convarted = ((parseFloat(result)) * 1000) / 3600;
            console.log(`the speed is ${convarted}`)
        }
        else{
            console.log('wrong input data');
        }
    }
    getSpeedMeterSceound(`3400 kmh^-1`)



    const throwError = (msg:string):never=>{
        throw new Error(msg)
    }

    throwError('amr sonar bangla ,love u Ph_team')

    //
}