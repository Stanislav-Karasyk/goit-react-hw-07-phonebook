import axios from 'axios';
import {
  createContactRequest,
  createContactSuccess,
  createContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contact-actions';

axios.defaults.baseURL = 'http://localhost:3004';

const createContact = ({ name, number }) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(createContactRequest());

  axios
    .post('/contacts', contact)
    .then(({ data }) => dispatch(createContactSuccess(data)))
    .catch(error => dispatch(createContactError(error)));
};

const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

export { createContact, deleteContact };
