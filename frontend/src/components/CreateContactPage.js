// src/components/CreateContactPage.js

import React from 'react';

const CreateContactPage = () => {
  return (
    <div className="create-contact-page bg-yellow-100 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Add New Contact</h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> First Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-bold mb-2"> Last Name</label>
          <input type="text" id="name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="phone" className="block text-gray-700 font-bold mb-2">Phone</label>
          <input type="text" id="phone" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            Add Contact
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateContactPage;
