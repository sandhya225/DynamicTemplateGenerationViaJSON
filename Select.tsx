import React , {useState} from 'react';
import { FormContext } from './FormContext';

type OptionType = {
  field_label: string;
  field_value: string;
};


interface fieldData {
    field_id ?:string,
    field_label:string, 
    field_value ?: string,
    field_options ?: {
        option_label:string,
        option_value:string
    }[]
}
const Select = ({ field_id, field_label, field_options,field_value }:fieldData) => {
  const [selectedOption, setSelectedOption] = React.useState(null);
  const { handleChange } = React.useContext(FormContext);

return (
<div className="form-group">
<label id={field_id} htmlFor="example">{field_label}</label>
<select className="form-control" onChange={event => handleChange(field_id, event)}>
<option>Default select</option>
{field_options? field_options.length > 0 &&
field_options.map((option, i) => <option key={i} value={option.option_label}>{option.option_label} </option>):''}
</select>
</div>
)
}
export default Select
