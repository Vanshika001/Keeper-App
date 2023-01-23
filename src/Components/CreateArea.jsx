import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
const [isExpanded,setIsExpanded] = useState(false);

    const [notes,setNotes] = useState({
        title:"",
        content:""
    })

    function clickHandler(){
      setIsExpanded(true);
    }
    function changeHandler(event){
        const {name,value} = event.target;
        setNotes(prevValue=>{
            return{
                ...prevValue,
            [name] : value, 
        }
        });
        }
        function submitNote(event){
            props.onAdd(notes);
            setNotes({
                title:"",
                content:""
            });
            event.preventDefault();
        }
  return (
    <div>
      <form className="create-note">
      
        {isExpanded ? <div><input 
        onChange={changeHandler} 
        value={notes.title} 
        name="title" 
        placeholder="Title"
        /><textarea onChange={changeHandler} value={notes.content}
          name="content"
          placeholder="Take a note..." rows="3" /><Zoom in={true}><Fab onClick={submitNote}><AddIcon /></Fab></Zoom></div> : <textarea onChange={changeHandler} value={notes.content}
          name="content"
          placeholder="Take a note..." rows="1"
          onClick={clickHandler} /> }
        
      </form>
    </div>
  );
}

export default CreateArea;
