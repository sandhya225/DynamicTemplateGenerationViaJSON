import React from "react";
import FormJSON from "./FormElements.json"
import  { useState } from 'react';
import DynamicElements from './DynamicElements';
import { FormContext } from './FormContext';
import './App.css';

  
function SignUp(){
    const [data]=useState(FormJSON[0]);
  const [elements, setElements] = useState(data.fields);
  console.log(elements);
  const handleChange = (id : string, event : React.ChangeEvent<HTMLInputElement>
    ) => {
      const newElements = [ ...elements ]
      newElements.forEach(field => {
      const { field_type, field_id, field_value } = field
      if (id === field_id) {
      switch (field_type) {
      case 'checkbox':
        case 'radio':
        field['field_value']=event.target.checked ? 'C' : '';
      break;
      default:
      field['field_value'] = event.target.value;
      break;
      }
      }
      setElements(newElements)
      });
      }
        return (
            <form>
     <h3>Sign Up</h3>
                <FormContext.Provider value={{handleChange}}>
                  <div className="row g-3"> 
                   
                      {elements.map(ele=> <div className="col-md-6"> <DynamicElements data={ele} /> </div>)}
                   
                  </div>
                    
                 </FormContext.Provider>
                            </form>

        );
    
}

export default SignUp;