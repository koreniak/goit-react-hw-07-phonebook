import { Formik } from 'formik';
import { object, string, number } from 'yup';
import { ContForm, Input, SubmitButton, Error } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contactSlice';
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { selectContacts } from 'redux/selectors';

const validationSchema = object({
  name: string().min(4).required(),
  number: number().min(4).required(),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = ({name, number, id = nanoid()}, { resetForm }) => {

    contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase()) ?
      toast.error(`${name} is already in contacts`) :
      dispatch(addContact({name, number, id}));

    resetForm();
  };

  return (
    <Formik
      initialValues={{
        name: "",
        number: ""
      }}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
    >
      <ContForm>
        <label htmlFor="name">
          Name
          <Input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <Error component="p" name="name" />
        </label>
        <label htmlFor="number">
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Error component="p" name="number" />
        </label>
        <SubmitButton type="submit">Add contact</SubmitButton>
      </ContForm>
    </Formik>
  );
};

export default ContactForm;