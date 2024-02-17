import React, { useState } from 'react';

const Form = () => {
  const formData = {
    first: "",
    last: "",
  };
  const [inputValue, setInputValue] = useState(formData);

  const handleChange=(e)=>{
    const{name,value}=e.target;
    setInputValue((prev)=>({
        ...prev,
        [name]:value
    }));
  }
const validate=()=>{
  if(!input){}
}
  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(formData);
    console.log(inputValue);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} name='first' type='text' value={inputValue.first} placeholder='Enter First Name' />
        <input type="text" name='last' onChange={handleChange} placeholder='Enter Last name' value={inputValue.last}/>
        <button type='submit' disabled={!(inputValue.first.trim() && inputValue.last.trim())}>submit</button>
      </form>
    </div>
  );
};

export default Form;
