import React from "react";



const Note = (props) =>{
    const deleteNote = ()=>{
        props.deleteItem(props.id);
    };
    return (<>
        <div className="note">
            <h1>{props.title}</h1>
            <br />
            <p>{props.content}</p>
            <button onClick={deleteNote} className="btn_2">-</button>
        </div>
    </>);
};

export default Note;