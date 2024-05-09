{
    //
    const addCourceToStudent = <T extends {name:string ; gmail:string}>(student: T) => {
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
    const student3 = addCourceToStudent({name:'amni' ,gmail:'s@email.com'})
    
    
    
    
    
    
    
    //
}