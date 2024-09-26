import { FaUser } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import css from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsSlice";

export default function Contact({ contact: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.container}>
      <ul>
        <li className={css.text}>
          <FaUser />
          {name}
        </li>
        <li className={css.text}>
          <BsFillTelephoneFill />
          {number}
        </li>
      </ul>
      <button className={css.btn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
}
