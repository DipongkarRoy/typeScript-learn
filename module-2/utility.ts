{
    //utility types : 
    //Pick

    type User = {
        name: string;
        age: number;
        email?: string;
        contactNo: number;
    }

    type NameAgeEmail = Pick<User, 'name' | 'age' | 'email'>



    //omit <value declear kora gula bad jabe : other extra value pauya jabe>

    type contactInfo = Omit<User, 'name' | 'age'>

    //Partial type hosce ...all value add kore kaj kora :

    type PartialUser = Partial<User>

    //require type : orginal type show korve

    type requireData = Required<User>

    //readOnly type ts :
    type dataUser = Readonly<User>
    //upore data type declearation korle error asve.

    const user1: dataUser = {
        name: 'dipo',
        age: 3456,
        contactNo: 67687890,
    }
    //user1.name='love you anu'


    //record type typescript :

    type MyObj = {
        name: string;
        address: string
    }
    //better options :

    type MyObjData = Record<string, number>;
    const emotyObj: Record<string, unknown> = {}
    const objectValue: MyObj = {
        name: 'snu',
        address: 'rangpur'
    }






    //
}