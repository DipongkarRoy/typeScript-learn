{
    //


    class Animal{
        name: string;
        speacies: string;
        sound: string;
        construcotr(name: string,
            speacies: string,
            sound : string
        ){
            this.name= name;
            this.speacies = speacies;
            this.sound = sound
        }

        makeSound(){
            console.log(`the ${this.name} is collled by sound ${this.sound}`);
        }
    }

    // const dog = new Animal('sipon','male','rangpur') ;

    // dog.makeSound()


    //class propperty typescipt 2nd time practices:

    class userData {
        constructor(public name:string ,public age:number ,public address:string){}

        makeUserData(){
            console.log(`my name is ${this.name}i live is country ${this.address}`);
        }
    }

    const user = new userData('dipongkar',23,'rangpur')

    user.makeUserData()
     







    //
}