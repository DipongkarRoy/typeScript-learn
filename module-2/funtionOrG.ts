{
    //
    const createArray = (param: string): string[] => {
        return [param]
    }
    console.log(createArray('bangladesh'));

    const createArrayGeneric = <T>(param: T): T[] => {
        return [param]
    }


    const res1 = createArray('delta rangpur')

    const resGenaric = createArrayGeneric<string>('srilongka');

    const resGenaricObj = createArrayGeneric<object>({
        id: 3455,
        name: 'miran'
    })


    const addCourceToStudent = <T>(student: T) => {
        const course = 'next nevel3 developer'

        return {
            ...student,
            course
        }
    }

    const student1 = addCourceToStudent({
        name: 'x', gmail: 'x@gmail.com', devtype: 'nL2'
    })

    const student2 = addCourceToStudent({
        name: 'x', gmail: 'y@gmail.com', hasWacth: 'apple',
    })




    //
}