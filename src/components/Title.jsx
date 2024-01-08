function Title(){
    var sectionTitle = "React Batch";
    let heading = 'bg-heading';
    let isHeading = false;
    //condition render - to render html on the basis condition.
    let isVisible = true;

    function para(){
        return <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque consectetur sequi ea commodi quos dolorem. Quisquam optio minima voluptates amet, est facere? Eum necessitatibus hic iste quos facilis. Totam, explicabo?
        </p>
    }

    return (
    <div>
        <h1 className={isHeading ? heading:"bg-alternate"} >{sectionTitle}</h1>
        {
            isVisible ?
        // <p style={{color: 'red', fontSize:24}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, praesentium voluptate labore alias ad nesciunt eveniet error ipsa incidunt explicabo temporibus. Aliquid deleniti, tenetur ut autem ab 
        // fugiat id dolorum?</p>
        para()
        :"no data"
        }
    </div>
    )
}

export default Title;