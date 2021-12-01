import React,{useContext} from 'react';
import { FormContext } from './FormContext';
interface fieldData {
    field_type ?:string,
    field_id:string,
    field_label:string, 
    field_placeholder ?:string, 
    field_value ?: string ,
    field_options ?: [
        field_label:string,
        field_value:string
      ] 
}
const RadioField = ({field_type, field_id, field_label, field_placeholder, field_value ,field_options}:fieldData) => {
    const { handleChange } = useContext(FormContext);

    return (
    <div className="form-check ">
    <input type={field_type} className="form-check-input" id="radioField"  placeholder={field_placeholder ? field_placeholder : ' '}  value={field_value} onChange={event => handleChange(field_id, event)}/>
    <label className="form-check-label" htmlFor="radioField">{field_label}</label>
    </div>
    )
    }
export default RadioField;