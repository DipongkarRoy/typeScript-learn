{
    //

    const dataSecrch = (value : string)=>{
        if(value){
            console.log('correct input data')
        }
        else{
            console.log('wrong input');
        }
    }

    dataSecrch('dipongkar roy')


    const getSpeedMeterSceound =(value:unknown)=>{
        if(typeof value ==='number'){
            const speedData = ((value)*1000 /56)
            console.log(`the speed data is ${Math.round(speedData)}`);
        }
        else if(typeof value ==='string'){
            const [result ,data]= value.split('')
            console.log(result)
            const speedData = ((parseFloat(result))*1000 /56)
            console.log(`the speed data string ${Math.round(speedData)}`);
        }
        else{
            console.log('data is not found');
        }
    }
    getSpeedMeterSceound(0)


    const smsText = (sms:string)=>{
        throw new Error(sms)
        
    }
    smsText('love u ph-team')
    //
}