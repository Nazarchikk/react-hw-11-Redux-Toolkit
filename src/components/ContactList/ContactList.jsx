import { nanoid } from 'nanoid'
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { getContacts } from "../../redux/selectors";
import { deleteContact } from "../../redux/operations"

export default function ContactList(){
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();
    return(
        <>
        <ul>
          {contacts.map(contact => (
            <li id={nanoid(5)} key={contact.id}><span>{contact.name.name}</span>:<span>{contact.name.number}</span> <button id={"id-"+nanoid(1)} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></li>
          ))} 
        </ul>
        </>
    )
}
// export default function ContactList(){
//   const contacts = useSelector(getFilteredContacts);
//   const dispatch = useDispatch();
//     return(
//         <>
//         <ul>
//           {contacts.map(contact => (
//             <li id={nanoid(5)} key={contact.id}><span>{contact.name}</span>:<span>{contact.number}</span> <button id={"id-"+nanoid(1)} type="button" onClick={() => dispatch(deleteContact(contact.id))}>Delete</button></li>
//           ))} 
//         </ul>
//         </>
//     )
// }