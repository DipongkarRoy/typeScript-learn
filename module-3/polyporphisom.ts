{
    //
    class Person {
        getSleep(){
            console.log(`i am sleeping 8 hour now`);
        }
    }

    class student extends Person{
       getSleep(){
           console.log(` i am sleeping 7 hour now`);
       }
    }
    
    class developer extends Person{
        getSleep() {
            console.log(`i am sleeping 6 hour time`);
        }
    }

    const getSleepingHour =(param:Person)=>{
        param.getSleep()
    }

    const Person1 = new Person()
    const Person2 = new student()
    const Person3 = new developer()

    getSleepingHour(Person1)
    getSleepingHour(Person2)
    getSleepingHour(Person3)





    //example ts :

    class shape{
        getArea():number{
            return 0 ;
        }
    }
    class circle extends shape{
        redius :number ;
        constructor(redius:number){
            super()
            this.redius = redius
        }
        getArea(): number {
            return  Math.PI*this.redius*this.redius
        }
    }

    //area :

    class Reactangle extends shape{
        height:number ;
        width:number
        constructor(height:number ,width:number){
            super()
            this.height = height ,
            this.width = width 
        }
        getArea(): number {
            return this.height*this.width
        }
    }
    const getShapeArea = (param:number)=>{
        console.log(param);
    }

    const shape1 = new shape();
    const shape2 = new circle(23);
    const shape3 = new Reactangle(34,56)

    // getShapeArea(shape1())
    // getShapeArea(shape2)
    // getShapeArea(shape3)

    interface Person {
        name: string;
        age: number;
      }
      
      function birthYear(person: Person) {
        return 2018 - person.age;
      }
     
    
    //
}