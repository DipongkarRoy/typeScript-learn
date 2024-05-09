{

    //
    class coundter {
        cound :number = 0;

        incrementCound(){
           return this.cound = this.cound+1
        }
        decrementCound(){
            return this.cound = this.cound-1
        }
    }
    const result = new coundter()
    console.log(result.incrementCound());
    console.log(result.incrementCound());
    console.log(result.incrementCound());
    console.log(result.incrementCound());

    const result2 = new coundter()
    console.log(result2.decrementCound());
    console.log(result2.decrementCound());
    console.log(result2.decrementCound());
    
    
    
    
    //
}