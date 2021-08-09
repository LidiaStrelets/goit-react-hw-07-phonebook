import axios from 'axios';
const BASE_URL = 'http://localhost:3030/contacts';

export async function getContacts() {
  const { data } = await axios.get(BASE_URL);

  return data;
}
export async function addContact(contact) {
  const { data } = await axios.post(BASE_URL, contact);
  return data;
}
export async function removeContact(id) {
  const { data } = await axios.delete(`${BASE_URL}/${id}`);
  return data;
}
