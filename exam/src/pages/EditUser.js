import { useState, useEffect, useContext } from 'react';
import React from 'react';
import { Fragment } from 'react'
import {Link, NavLink} from 'react-router-dom';
import { Row, Col, Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useHistory } from 'react-router-dom'
import { Container} from 'react-bootstrap';
import UserContext from '../UserContext';



export default function EditUser({userProp}){
	console.log(userProp)
		
	const userId = userProp.match.params.userId;
		const {_id, firstName, lastName, address} = userProp;

			// document.querySelector(`#formId`).innerHTML = "John";	
		let history = useHistory();

			//  function to simulate user registration
				async function Update(e){
					 // Prevents page redirection via form submission
			        e.preventDefault();
			        
			        fetch(`http://localhost:4000/users/${_id}`, {
		                		method: 'PUT',
		                		headers:{
		                		    'Content-Type':'application/json'
		                		},
		                		body:JSON.stringify({
		                				firstName:firstName,
		                				lastName:lastName,
		                				address:address
		                			  

		                		})

		                	})
		                	.then(res => res.json())
		                	.then(data => {
		                		console.log(`${data} dataDATA`);
		                		Swal.fire({
		                			title:"Add User Successfully",
		                			icon:"success",
		                			text:""
		                		});
		                		{/*<Redirect to ="/login"/>*/}
		                		history.push('/')
		                	})

		                }




	return(

	<Fragment>
		<Container className="mt-5">
				<Row>
					    <tr id="${_id}">
					      <td  className="thcart" id="firstName-${_id}">Firstname</td>
					      <td className="thprice" id="lastName-${_id}">{lastName}</td>
					       <td className="thprice" id="address-${_id}">{address}</td>
				   		 </tr>
				</Row>


		  <Row>
		    
			<Col>
		    	<Container>
		    			<Form  onSubmit = {(e)=> Update(e)} >
		    			  <Form.Group  id="formId" controlId="formFirstName">
		    			    <Form.Label>First Name</Form.Label>
		    			    <Form.Control 
		    			   placeholder = "{firstName}"
		    			    type="text" 
		    			    value={firstName}
		    			 /*   onChange = { e => setFirstName(e.target.value)}*/
		    			    required
		    			     />
		    			  </Form.Group>

		    			  <Form.Group controlId="formBasicPassword">
		    			    <Form.Label>Last Name</Form.Label>
		    			    <Form.Control
		    			    	type="text" 
		    			    	value={lastName}
		    			    /*	onChange = { e => setLastName(e.target.value)}*/
		    			    	required

		    			     />
		    			  </Form.Group>
		    			   <Form.Group controlId="formBasicPassword">
		    			    <Form.Label>Address</Form.Label>
		    			    <Form.Control
		    			    	type="text" 
		    			    	value={address}
		    			    /*	onChange = { e => setAddress(e.target.value)}*/
		    			    	required
		    			     />
		    			  </Form.Group>
		    				<Button variant="primary" type="submit" id="submitBtn" className="m-3">
		    					Edit user
		    				</Button>
		    			</Form>
		    		</Container>
		    	
		   	</Col>	 		
		  </Row>
		</Container>
		</Fragment>
	)
}