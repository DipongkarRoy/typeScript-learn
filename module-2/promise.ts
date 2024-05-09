{
    //

    const createPromise =():Promise<string>=>{
        return new Promise<string>((resolve ,reject)=>{
            const data:string = 'something data';

            if(data){
                resolve(data)
            }
            else{
                reject('fail to data')
            }
        })
    }

  //promise funtnion data :
  const showData = async()=>{
    const data = await createPromise()
    console.log(data);
  }
    
    
    
    
    
    //
}