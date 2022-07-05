import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addContact } from "../JS/Actions/contact";

function Add() {
  const [newContact, setNewContact] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addContact(newContact));
  };
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newContact.name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            value={newContact.age}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Favorite Foods</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Favorite Foods "
            name="favoriteFoods"
            value={newContact.favoriteFoods}
            onChange={handleChange}
          />
        </Form.Group>
        <Link to='/users'>
          <Button variant="primary" type="submit" onClick={() => add()}>
            Add Contact
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Add;
