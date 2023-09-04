import { useEffect } from "react";
import {useDispatch,useSelector} from "react-redux";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";
import { fetchContacts } from "../redux/operations";
import { getError, getIsLoading } from "../redux/selectors";

export default function App (){
    const dispatch = useDispatch();
    const isLoading = useSelector(getIsLoading);
    const error = useSelector(getError);
    useEffect(() => {
      dispatch(fetchContacts());
    }, [dispatch]);
    return(
      <div>
        <h1>Phonebook</h1>
        <ContactForm></ContactForm>
        <h2>Contacts</h2>
        <Filter></Filter>
        {isLoading && !error && <b>Request in progress...</b>}
        <ContactList></ContactList>
      </div>
    )
}
