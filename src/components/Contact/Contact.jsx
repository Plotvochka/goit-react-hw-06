import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

import css from "./Contact.module.css";

export default function Contact({ user }) {
  const dispatch = useDispatch();

  return (
    <>
      <span>{user.name}</span>
      <span>{user.number}</span>
      <button
        onClick={() => dispatch(deleteContact(user.id))}
        className={css.btn}
      >
        Delete
      </button>
    </>
  );
}

Contact.propTypes = {
  user: PropTypes.object.isRequired,
};
