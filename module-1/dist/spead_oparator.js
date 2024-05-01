"use strict";
{
    //spread oparator learning :
    const user = {
        name: "uttom",
        username: 'dipongkar',
        student: 'ami tomay vlobasi'
    };
    const poorMan = {
        class: 'sujon',
        best: 'miran vai',
        optionsn: 'delta college ,ranpur'
    };
    const newUser = Object.assign(Object.assign({}, user), poorMan);
    const greetFriends = (...friend) => {
        console.log(`hi developer is ${friend}`);
        friend.forEach((friend) => console.log(`hi ... ${friend}`));
    };
}
