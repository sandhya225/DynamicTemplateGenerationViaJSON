import React,{useContext} from 'react';
import { FormContext } from './FormContext';
interface fieldData {
    field_type ?:string,
    field_id:string,
    field_label:string, 
    field_placeholder?:string, 
    field_value ?: string ,
    field_options ?: [
        field_label:string,
        field_value:string
      ] 
}
const RangeField = ({field_type, field_id, field_label, field_placeholder, field_value,field_options }:fieldData) => {
    const { handleChange } = useContext(FormContext);

    return (
        <div className="form-group ">
        <label htmlFor="radioField">{field_label}</label>
        <input type="range" className="form-range" id="radioField" placeholder={field_placeholder ? field_placeholder : ' '}  value={field_value} onChange={event => handleChange(field_id, event)}/>
        </div>
    )
    }
export default RangeField;