import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Card, Image } from 'semantic-ui-react'
import { deleteContact } from '../JS/Actions/contact'

function ContactCards({contact}) {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  return (
    <div>
      <Card>
        
    <Image  src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    
    <Card.Content>
      <Card.Header>Name : {contact.name}</Card.Header>
      <Card.Meta>
        <span className='date'>Age :  {contact.age}</span>
      </Card.Meta>
      <Card.Description>
        Foods : {contact.favoriteFoods}
      </Card.Description>
    </Card.Content>
    <Button.Group>
    <Button onClick={()=>dispatch(deleteContact(contact._id))} >delete</Button>
    <Button.Or />
    <Button positive onClick={()=>navigate(`/edit/${contact._id}`)}>Edit</Button>
  </Button.Group>
  </Card>
    </div>
  )
}

export default ContactCards