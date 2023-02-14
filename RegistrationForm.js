import { useState } from 'react';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    gender: '',
    country: "",
    marketingEmails: false,
    profilePicture: null,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      console.log(formData);
    } else {
      console.error('Please fill all required fields!');
    }
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return (
      formData.firstName &&
      formData.lastName &&
      formData.gender &&
      formData.country
    );
  };

  return (
   <div className='area'>
     <form onSubmit={handleSubmit}>
     <div>      <label htmlFor="firstName">First Name:</label>
      <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} 
required /> </div>

<div>
<label htmlFor="lastName">Last Name:</label>
      <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
</div>

<div>
<label htmlFor="gender">Gender:</label>
      <select id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
        <option value=""></option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
</div>

<div>
<label htmlFor="country">Country:</label>
      <input type="text" id="country" name="country" value={formData.country} onChange={handleChange} required />
</div>

<div>
<label htmlFor="marketingEmails">Receive Marketing Emails:</label>
      <input type="checkbox" id="marketingEmails" name="marketingEmails" checked={formData.marketingEmails} onChange={handleChange} />
</div>

<div>
<label htmlFor="profilePicture">Profile Picture:</label>
      <input type="file" id="profilePicture" name="profilePicture" onChange={handleChange} />
</div>

<div>
<input type="submit" value="Submit" />
</div>
    </form>
   </div>
  );
}

export default  RegistrationForm
