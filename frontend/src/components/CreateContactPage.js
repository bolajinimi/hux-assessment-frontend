import React  from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom'; 

const CreateContactPage = () => {
  
    

  const navigate = useNavigate();

  const handleAddContact = async () => {
    try {
        const token = localStorage.getItem("token")
        const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
      const firstName = document.getElementById('firstName').value;
      const lastName = document.getElementById('lastName').value;
      const phoneNumber = document.getElementById('phoneNumber').value;



      if (!firstName || !lastName || !phoneNumber) {
        console.error('Missing required fields');
        return;
      }
  
      await axios.post('http://localhost:3008/contact', {
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
        
      }, config);

      navigate('/contacts-list');
    } catch (error) {
      console.error('Error while creating contact:', error);
    }
  };

  return (
    <div className="create-contact-page bg-yellow-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Contact</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2"> First Name</label>
          <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2"> Last Name</label>
          <input type="text" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="text" id="phoneNumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button onClick={handleAddContact} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" >
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateContactPage;
