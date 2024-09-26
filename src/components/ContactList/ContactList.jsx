import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { selectContacts } from "../../redux/contactsSlice";
import { useSelector } from "react-redux";
import { selectFilters } from "../../redux/filtersSlice";

const getContacts = (contacts, selectName) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(selectName.toLowerCase())
  );
};

export default function ContactList() {
  const contacts = useSelector(selectContacts);
  const selectNameFilter = useSelector(selectFilters);
  const visibleContacts = getContacts(contacts, selectNameFilter);

  return (
    <ul className={css.list}>
      {visibleContacts.map((contact) => (
        <li className={css.item} key={contact.id}>
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
}
