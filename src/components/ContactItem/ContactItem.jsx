import PropTypes from 'prop-types';
import { DeleteButton } from "./ContacItem.styled";
import { ContItem } from './ContacItem.styled';
import { deleteContact } from 'redux/contactSlice';
import { useDispatch } from 'react-redux';


const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();
  return (
    <ContItem>
      <p>{name}: {number}</p>
      <DeleteButton type="button" onClick={() => dispatch(deleteContact(id))}>Delete</DeleteButton>
    </ContItem>
  );
};

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

export default ContactItem;