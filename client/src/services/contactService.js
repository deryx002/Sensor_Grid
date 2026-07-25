import axios from "axios";

const API_URL = `${import.meta.env.VITE_API_URL}/contact`;

// Submit Contact Form (Public)
export const submitContactForm = async (formData) => {
  const response = await axios.post(API_URL, formData);
  return response.data;
};

// Get All Contacts (Admin)
export const getAllContacts = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Get Single Contact
export const getContactById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

// Update Contact Status
export const updateContactStatus = async (
  id,
  status
) => {
  const response = await axios.patch(
    `${API_URL}/${id}/status`,
    {
      status,
    }
  );

  return response.data;
};

// Delete Contact
export const deleteContact = async (id) => {
  const response = await axios.delete(
    `${API_URL}/${id}`
  );

  return response.data;
};