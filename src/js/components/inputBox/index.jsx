import React from 'react';
const InputBox = (props) => {
    const onChange = (e) => {
        if (typeof props.onChange === "function") {
            props.onChange(props.name, e.target.value);
        }
    }
    const { name = '', type = 'text', label = '', placeholder = '', value = '' } = props;
    return (
        <div className="inputBox">
            <label for={name}><b>{label}</b></label>
            <input type={type} placeholder={placeholder} onChange={(e) => { onChange(e) }} name={name} value={value} />
        </div>
    );
}

export default InputBox;