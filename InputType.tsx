import React,{useContext} from 'react';
import { FormContext } from './FormContext';
interface fieldData {
    field_type ?:string,
    field_id :string,
    field_label :string, 
    field_placeholder ?:string, 
    field_value ?: string,
    field_options ?: [
        field_label:string,
        field_value:string
      ] ,
      requiredFlag ?: string
}
const InputType = ({field_type, field_id, field_label, field_placeholder, field_value,field_options,requiredFlag }:fieldData) => {
    const { handleChange } = useContext(FormContext);

    return (
    <div className="form-group">
    <label className="form-label"  htmlFor="exampleInput">{field_label}</label>
    <input type={field_type} required={requiredFlag == "true"} className="form-control" id="exampleInput" placeholder={field_placeholder ? field_placeholder : ' '}  value={field_value} onChange={event => handleChange(field_id, event)}/>
    </div>
    
    )
    }
export default InputType;