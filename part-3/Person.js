const Person = (props) => {
    let reply;
    if (props.age < 18) {
        reply = <h3>You must be 18</h3>;
    } else {
        reply = <h3>Please go vote!</h3>;
    }


    let name = props.name.length > 8 ? props.name.substring(0, 6) : props.name;
    
    return (
        <div>
            <p>Learn some information about this person</p>
            <p>Name: {name}</p>
            <p>Age: {props.age}</p>
            {reply}
            <ul>
                {props.hobbies.map((hobby, index) => (
                    <li key={index}>{hobby}</li>
                ))}
            </ul>
        </div>
    );    

}   
