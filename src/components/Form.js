import React, { useState } from "react";

 function Form() {

  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");
  const [formData, setFormData]= useState({
    firstName: "John",
    lastName: "Henry",
  });
  
  // console.log(formData,setFormData);
  // function handleFirstNameChange(event) {
  //   setFormData({
  //     ...formData,
  //     firstName:event.target.value,
  //   })
  //   console.log(setFormData);
  // }

  // function handleLastNameChange(event) {
  //   setFormData({
  //     ...setFormData, // otherwise you'd lose the data of the lastName or lastName one is updated
  //     lastName:event.target.value,
  //   })
  // }
  function handleChange(event){
    // name is the KEY in of the formData object we're trying to update
    const name = event.target.name;
    let value= event.target.value;
    // const {name , value } = event.target;
    if(event.target.type==="checkbos"){ 
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]:value,
    });
  }
  function handleSubmit(event){
    event.preventDefault();
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
      type="text"
      name="firstName" 
      onChange={handleChange}
      value={formData.firstName}  
      />
      <input 
      type="text"
      name="lastName"
      onChange={handleChange} 
      value={formData.lastName}
      />
      <input 
      type="checkbox"
      name="admin" 
      onChange={handleChange}
      value={formData.admin}  
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
