import React, { useState } from "react";



const CreateNote = (props) =>{
    const [expand,setexpand]=useState(false);
    const [note,setnote]=useState({
        title:"",
        content:"",
    });
    
    const InputEvent =(event) =>{

        const {name,value}=event.target;

        setnote((prevdata)=>{
            return{
                ...prevdata,
                [name]: value
            };
        });
        
    };

    const addEvent = (event)=>{
        event.preventDefault();
        props.passNote(note);
        setnote({
            title:"",
            content:"",
        });
    
    };
    const expandIt = ()=>{
        setexpand(true)
    };
    const btnormal = ()=>{
        setexpand(false)
    };

    return (<>
    <div className="main_note" onDoubleClick={btnormal}>
        <form>
            {expand ?(
            <input 
            type="text" 
            name="title" 
            value={note.title} 
            onChange={InputEvent} 
            placeholder="Title" 
            autoComplete="off"/>
            ): null}

            <textarea 
            rows="" 
            column="" 
            name="content" 
            value={note.content} 
            onChange={InputEvent} 
            placeholder="Write a note"
            onClick={expandIt}>
            

            </textarea>
            {expand ?
            <button 
            onClick={addEvent} className="btn_1">
            +
            </button>: null
            }
        </form>
    </div>
        
    </>);
};

export default CreateNote;