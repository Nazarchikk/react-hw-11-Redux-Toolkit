import React from "react";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useDispatch,useSelector } from 'react-redux';
import { addContact } from "../../redux/operations";
import {getContacts} from "../../redux/selectors"

export default function ContactForm() { 
    const dispatch = useDispatch();
    const contacts = useSelector(getContacts)
    const handleSubmit = (e) => {
      e.preventDefault();
      const existingName = contacts.some(
        contact => contact.name === e.target.elements.name.value
      );
    //   const existingPhone = contacts.some(
    //     contact => contact.name.phone === e.target.elements.phone.value
    //   );
      if (existingName ) {
        Notify.failure('Contact already exists');
      } else{
      dispatch(addContact({
        name:e.target.name.value,
        number:e.target.number.value
    }))}
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            placeholder='Enter your name'
            />
            <label>Number</label>
            <input
            type="text"
            name="number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder='Enter your number'
            />
            <button type="submit">add contact</button>
            </form>
        </>
    )
}