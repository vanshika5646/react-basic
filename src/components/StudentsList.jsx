import { useState } from "react";

function StudentsList(){
    const data = [
        {id:1, name:"Akash", course: "Mern", fees: 14000},
        {id:2, name:"Vivek", course: "Python", fees: 15000},
        {id:3, name:"Vanshika", course: "Java", fees: 11000},
        {id:4, name:"Banita", course: "PHP", fees: 16000}
    ];
    const [students, setStudents]=useState(data);

    const car = ["Maruti", "Porsche","Mercedes"];
    console.log(car);
   const anotherArr = car.forEach(function(item, index){
        return car[index] = '$' + item ;
    })

    console.log(anotherArr);


   const newArr = car.map(function(item, index){
        return car[index] = '$' + item ;
    })

    console.log(newArr);

    const filtered = car.filter(function(item){
        debugger
        return 2 > 1
    })

    console.log(filtered);








    return(
        <div>
            <h3>Student List</h3>
            {
                students.map(function(item, index){
                    return (
                        <div key={item.id}>
                            <p>Id: {item.id}</p>
                            <p>Name: {item.name}</p>
                            <p>Course: {item.course}</p>
                            <p>Fees: {item.fees}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default StudentsList;