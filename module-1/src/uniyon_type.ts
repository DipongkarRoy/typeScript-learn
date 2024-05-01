{

    //uniyon type typeScript :

    type Course = 'react developer' | 'Mern stack developer';

    const newDeveloper: Course = 'react developer';




    //example :
    type User = {
        name: string;
        age: number;
        gender: 'male' | 'female',
        bloodGroup: "O+" | "AB" | "a+"
    }

    const person: User = {
        name: 'Dipongkar',
        age: 45,
        gender: 'female',
        bloodGroup: 'AB'
    }


    //for example union type :

    type fontendDeveloper = {
        skills: {},
        designation: 'marn Developer',
    }
    type backedDeveloper = {
        skills: {},
        designation1: 'backend Developer'
    }

    type Developer = fontendDeveloper & backedDeveloper;

    const Developer: fontendDeveloper = {
        skills: ['html', 'css'],
        designation: 'marn Developer'

    }

}