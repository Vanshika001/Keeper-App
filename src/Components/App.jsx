import React,{useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
    const [savedText,setSavedText]=useState([]);
    
    function AddItem(newNote){
        setSavedText(prevValue=>{
        return [...prevValue,newNote]
        }
    );}

    function deleteItem(id){
    setSavedText(prevValue=>{
    return prevValue.filter((item,index)=>{
    return index!==id;
})
    }) 
    }
  return (
    <div>
      <Header />
      <CreateArea onAdd={AddItem}/>
      {savedText.map((items,index)=>{ 
        return (<Note key={index} 
        id={index} 
        title={items.title} 
        content={items.content}
        onDelete={deleteItem}
        />);})}
      <Footer />
    </div>
  );
}

export default App;
