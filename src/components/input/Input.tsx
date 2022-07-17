import React from "react";
import { InputPropsTypes } from "../../types";

const Input = ({
    type,
    label,
    placeholder,
    defaultValue,
    helperText,
    disabled,
    name,
    showError,
    required,
    changeHandler
}: InputPropsTypes) => {
return(
<div className="input-grp"> 
<label className={required? "form-label form-label-mandatory": "form-label"}>{label}</label>
    <input className="form-field" type={type || "text" } placeholder={placeholder} defaultValue={defaultValue}
        required={required} disabled={disabled} onChange={changeHandler} name={name} />
    <div className="text-danger">{showError && helperText}</div>
</div>
);
};

export {
Input
};