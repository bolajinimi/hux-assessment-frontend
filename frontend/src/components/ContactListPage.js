import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; // Importing icons for delete and edit

const ContactsListPage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, name: 'John Doe', email: 'john@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', phone: '987-654-3210' },
    { id: 3, name: 'Alice Johnson', email: 'alice@example.com', phone: '555-555-5555' },
  ]);

  const handleDeleteContact = (contactId) => {
    setContacts(prevContacts => prevContacts.filter(contact => contact.id !== contactId));
  };

  return (
    <div className="contacts-list-page bg-pink-100 min-h-screen">
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-3xl font-bold text-center text-gray-800">Contacts List</h2>
          <Link to="/create-contact" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Add New Contact
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-14 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email
                </th>
                <th scope="col" className="px-10 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {contacts.map(contact => (
                <tr key={contact.id}>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <Link to={`/contact-details/${contact.id}`} className="text-blue-600 hover:underline">
                      {contact.name}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                    <button onClick={() => handleDeleteContact(contact.id)} className="mr-8 text-red-500 hover:text-red-700">
                      <FaTrashAlt size={16} color="red" />
                    </button>
                    <Link to={`/edit-contact/${contact.id}`} className="text-blue-500 hover:text-blue-700">
                      <FaEdit size={16} color="blue" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ContactsListPage;
