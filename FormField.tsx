import React from "react";
interface tempProps{
    data:{
    title : string,
    value : number,
    name: string,
  }  
}

const FormField = (props :tempProps) => {
    const [val,setVal]=React.useState(props.data.value);
    return <div>
        <label>{props.data.title}</label>
        <input type="number" value={val} onChange={(event)=>{
            setVal(parseInt(event.target.value));
            localStorage.setItem(props.data.name,event.target.value)}}>

            </input>
    </div>
}
export default FormField;