import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/Actions/contact";
import ContactCards from "./ContactCards";
function ContactList() {
  const dispatch = useDispatch();
  const ListContacts = useSelector(state=>state.contactReducer.ListContacts);
  const load = useSelector(state=>state.contactReducer.load);
  useEffect(() => {
   dispatch(getContacts())
  }, [dispatch])
  
  return (
    <div>
      <h1>This is the list of all contacts</h1>
      <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-around"}}>
        {load ? (<Spinner animation="border" variant="primary" /> ) : ListContacts.map((el)=><ContactCards contact={el} key={el._id}/>)}
      </div>
    </div>
  );
}

export default ContactList;
