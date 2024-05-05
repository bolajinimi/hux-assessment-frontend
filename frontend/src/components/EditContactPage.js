import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate, useParams  } from 'react-router-dom'; 

const EditContactPage = () => {
    const { id } = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: ''
  });

  const handleUpdateContact = async () => {
    try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjM4MDIxMzQ2MWYxYzMwZGU5YTE4OWEiLCJpYXQiOjE3MTQ5NDY2NDUsImV4cCI6MTcxNDk1MDI0NX0.6Ooj6Bd1omocDUcxc0INpy1eoXc1-mz6g84Bc36mKbE'; 
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        await axios.put(`http://localhost:3008/contact/${id}`, contact, config);
        navigate('/contacts-list');
      } catch (error) {
        console.error('Error updating contact:', error);
        
      }
  };

  return (
    <div className="edit-contact-page bg-purple-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Edit Contact Information</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="firstName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="John Doe" />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="lastName" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="john@example.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="text" id="phoneNumber" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="123-456-7890" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleUpdateContact}>
            Update Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditContactPage;
