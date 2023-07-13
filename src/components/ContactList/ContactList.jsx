import { ContList } from "./ContactList.styled";
import ContactItem from 'components/ContactItem';
import { useSelector } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  return <ContList>{contacts.map(({ id, name, phone }) =>
    <li key={id}>
      <ContactItem
        name={name}
        phone={phone}
        id={id}
      />
    </li>)}
  </ContList>
};

export default ContactList;