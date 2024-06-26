import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { FaTrashAlt, FaEdit } from 'react-icons/fa'; 

const ContactsListPage = () => {
    const [contacts, setContacts] = useState([]);
    const [deleteContact, setDelete] = useState(false)
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem("token")
        const config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
        const response = await axios.get('http://localhost:3008/contact', config );
        setContacts(response.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
       
      }
    };
  useEffect(() => {
    fetchContacts();
  }, [deleteContact]);


  const handleDeleteContact = async (contactId) => {
    try {
        const token = localStorage.getItem("token")
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };
        await axios.delete(`http://localhost:3008/contact/${contactId}`, config);
        setDelete(true)
    } catch (error) {
        console.error('Error deleting contact:', error);
        
    }
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
                <tr key={contact._id}>
                  <td className="px-3 py-3 whitespace-nowrap">
                    <Link to={`/contact-details/${contact._id}`} className="text-blue-600 hover:underline">
                      {contact.firstName}
                    </Link>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.lastName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{contact.phoneNumber}</td>
                  <td className="px-6 py-4 whitespace-nowrap flex">
                   
                    <Link to={`/edit-contact/${contact._id}`} className="mr-6 text-blue-500 hover:text-blue-700">
                      <FaEdit size={16} color="blue" />
                    </Link>
                    <button onClick={() => handleDeleteContact(contact._id)} className=" text-red-500 hover:text-red-700">
                      <FaTrashAlt size={16} color="red" />
                    </button>
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
