import PropTypes from 'prop-types';
import { DeleteButton } from "./ContacItem.styled";
import { ContItem } from './ContacItem.styled';
import { deleteContact } from 'redux/operations';
import { useDispatch } from 'react-redux';


const ContactItem = ({ name, phone, id }) => {
  const dispatch = useDispatch();
  return (
    <ContItem>
      <p>{name}: {phone}</p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
    </ContItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ContactItem;