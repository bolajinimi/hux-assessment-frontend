import React from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using React Router v6

const EditContactPage = () => {
  const navigate = useNavigate();

  const handleUpdateContact = () => {
    // Here you would handle updating the contact
    // After updating the contact, navigate back to the contact list page
    navigate('/contacts-list'); // Replace '/contacts' with the path to your contact list page
  };

  return (
    <div className="edit-contact-page bg-purple-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Edit Contact Information</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="John Doe" />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="john@example.com" />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="text" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" defaultValue="123-456-7890" />
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
