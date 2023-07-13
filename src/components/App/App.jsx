import { useDispatch, useSelector } from 'react-redux';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Title } from "./App.styled";
import ContactForm from "components/ContactForm";
import Filter from "components/Filter";
import ContactList from "components/ContactList";
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';


export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {isLoading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {contacts.length === 0 && <p>There are no contacts here yet ...</p>}
      <ContactList />
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