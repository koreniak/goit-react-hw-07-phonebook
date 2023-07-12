import { ContList } from "./ContactList.styled";
import ContactItem from '../ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return <ContList>{contacts.map(({ id, name, number }) =>
    <li key={id}>
      <ContactItem
        name={name}
        number={number}
        id={id}
      />
    </li>)}
  </ContList>
};

export default ContactList;