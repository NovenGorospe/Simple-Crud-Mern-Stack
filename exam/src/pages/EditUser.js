import { useState, useEffect} from 'react';
import React from 'react';
import { Fragment } from 'react'
import { Row, Col, Button, Form} from 'react-bootstrap';
import Swal from 'sweetalert2';
import { useHistory, useParams } from 'react-router-dom'
import { Container} from 'react-bootstrap';



export default function EditUser({userProp}){
	console.log(userProp)
	
		const [firstName,setFirstName] = useState('');
		const [lastName, setLastName] = useState('');
		const [address, setAddress] = useState('');

		const { userId } = useParams();
		let history = useHistory();



				useEffect(()=>{

						fetch(`http://localhost:4000/users/${userId}`)
						.then (res=> res.json())
						.then(data =>{
							console.log(`data${data}`);
							setFirstName(data.firstName)
							setLastName(data.lastName)
							setAddress(data.address)
							
						})
					}, [])


		async function Update(e){
					 
			        e.preventDefault();
			        
			        fetch(`http://localhost:4000/users/${userId}`, {
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
		                			title:"Edit User Successfully",
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
		    
			<Col>
		    	<Container>
		    			<Form  onSubmit = {(e)=> Update(e)} >
		    			  <Form.Group controlId="formBasicEmail">
		    			    <Form.Label>First Name</Form.Label>
		    			    <Form.Control
		    			    type="text" 
		    			    placeholder="First Name"
		    			    value={firstName}
		    			    onChange = { e => setFirstName(e.target.value)}
		    			    required
		    			     />
		    			  </Form.Group>

		    			  <Form.Group controlId="formBasicPassword">
		    			    <Form.Label>Last Name</Form.Label>
		    			    <Form.Control
		    			    	type="text" 
		    			    	placeholder="Last Name"
		    			    	value={lastName}
		    			    	onChange = { e => setLastName(e.target.value)}
		    			    	required

		    			     />
		    			  </Form.Group>
		    			   <Form.Group controlId="formBasicPassword">
		    			    <Form.Label>Address</Form.Label>
		    			    <Form.Control
		    			    	type="text" 
		    			    	placeholder="Address"
		    			    	value={address}
		    			    	onChange = { e => setAddress(e.target.value)}
		    			    	required
		    			     />
		    			  </Form.Group>
		    				<Button variant="primary" type="submit" id="submitBtn" className="m-3">
		    					Update user
		    				</Button>
		    			</Form>
		    		</Container>
		    	
		   	</Col>	 		
		  </Row>
		</Container>
		</Fragment>
	)
}