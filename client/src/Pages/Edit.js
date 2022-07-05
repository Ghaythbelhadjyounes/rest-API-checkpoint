import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editContact, getOneContact } from "../JS/Actions/contact";

function Edit() {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({});
  const OneContact = useSelector((state) => state.contactReducer.contactById);
  const match = useMatch('/edit/:id');
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    dispatch(getOneContact(match.params.id));
  });
  const handleEdit = () => {
    dispatch(editContact(match.params.id, newContact));
    navigate(-1);
  };
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <h1>Edit Contact</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OneContact.name}`}
            name="name"
            value={newContact.name || ''} 
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder={`${OneContact.age}`}
            name="age"
            value={newContact.age || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Favorite Foods</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OneContact.favoriteFoods}`}
            name="favoriteFoods"
            value={newContact.favoriteFoods || ''}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to="/users">
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Edit Contact
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
