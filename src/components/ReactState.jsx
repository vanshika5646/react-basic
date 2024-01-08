import { useState } from "react";

function ReactState(){

    //creating state in a component. - useState Hook- it is used to create and update the state of a component.

    // const [state, setState]=useState();

    const [title, setTitle] = useState("React Batch");
    const [isVisible, setIsVisible]= useState(false);
    
    // let title = "React State";
    function changeTitle(){
        // title = "React State Topic";
        // console.log(title);
        setTitle("React Batch October");
    }


    function showData(){
        setIsVisible(true);
    }

    return (
        <div>
            <h2>{title}</h2>
            <button onClick={changeTitle}>Change Title</button>
            {
            isVisible ?
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minus maiores quas culpa aut, praesentium dolorem expedita, eius non itaque laudantium reiciendis tempora animi molestias voluptate placeat assumenda. Laborum, recusandae.</p> : <p>No Data</p>
            }

            <button onClick={showData}>Show Data</button>

        </div>
    )
}

export default ReactState;