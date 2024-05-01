{
    //spread oparator learning :

    const user = {
        name: "uttom",
        username: 'dipongkar',
        student: 'ami tomay vlobasi'
    }
    const poorMan = {
        class: 'sujon',
        best: 'miran vai',
        optionsn: 'delta college ,ranpur'
    }

    const newUser = {
        ...user,
        ...poorMan,
    } 



    const greetFriends = (...friend:string[])=>{
       console.log(`hi developer is ${friend}`);

       friend.forEach((friend:string) => console.log(`hi ... ${friend}`))
    }

}