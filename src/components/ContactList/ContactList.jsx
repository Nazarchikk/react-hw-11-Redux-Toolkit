import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getContacts,getFilteredContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations"

export default function ContactList(){
  const contacts = useSelector(getContacts);
  const contactsFilter = useSelector(getFilteredContacts);
  const dispatch = useDispatch();
    return(
        <>
        <ul>
        {contactsFilter === undefined
          ? contacts.map(contact => (
            <li id={nanoid(5)} key={contact.id}><span>{contact.name}</span>:<span>{contact.number}</span> <button id={"id-"+nanoid(1)} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></li>
            )) 
          : contactsFilter.map(contact => (
            <li id={nanoid(5)} key={contact.id}><span>{contact.name}</span>:<span>{contact.number}</span> <button id={"id-"+nanoid(1)} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></li>
          ))} 

        </ul>
        </>
    )
}