import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "./App.styled";
import ContactForm from "../ContactForm";
import Filter from "../Filter";
import ContactList from "../ContactList";


export const App = () => {
  const contacts = useSelector(selectContacts);
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contacts.length === 0 && <p>There are no contacts here yet ...</p>}
      <ContactList/>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
};