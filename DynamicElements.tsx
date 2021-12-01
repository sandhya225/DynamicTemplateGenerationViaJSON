import React from "react";
import InputType from "./InputType";
import RadioField from "./RadioField";
import RangeField from "./RangeField";
import Select from "./Select"

type optionData =[ ];
type fieldData= {
  data: {
    field_type ?: string;
    field_id : string;
    field_label : string;
    field_placeholder ?: string;
    field_value ?: string ;
    field_options ?:{option_label:string,
      option_value:string}[]; 
    };
}
const DynamicElements = (field: fieldData ) => {
  switch (field.data.field_type) {
    case "text":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      
    case "number":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "range":
      return (
        <RangeField
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "date":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label} 
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value}
        />
      );
    case "datetime-local":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "email":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "month":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "password":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      case "checkbox":
        return (
          <RadioField
            field_type={field.data.field_type}
            field_id={field.data.field_id}
            field_label={field.data.field_label}
            field_placeholder={field.data.field_placeholder}
            field_value={field.data.field_value} 
          />
        );
      case "radio":
      return (
        <RadioField
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
    case "search":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      
    case "time":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      
    case "url":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      
    case "week":
      return (
        <InputType
          field_type={field.data.field_type}
          field_id={field.data.field_id}
          field_label={field.data.field_label}
          field_placeholder={field.data.field_placeholder}
          field_value={field.data.field_value} 
        />
      );
      case "select":
        return (
          <Select
            field_id={field.data.field_id} 
            field_label={field.data.field_label} 
            field_options={field.data.field_options}
          />
        );
      
    default:
      return null;
  }

};
export default DynamicElements;
