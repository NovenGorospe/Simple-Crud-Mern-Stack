import React from 'react';
import {useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Container} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import { Button, Table} from 'react-bootstrap';
import Swal from 'sweetalert2';
import {useParams } from 'react-router-dom'
// import {useContext } from 'react'


export default function User(){
	// const {_id, firstName, lastName, address} = userProp;

			const { userId } = useParams();
			const [user, setUser] = useState([]);
				// let history = useHistory();

			useEffect(() => {
				 fetch("http://localhost:4000/users/")
				.then(res => res.json())
				.then(data => {	
						setUser(data.map(function(props){
									let _id = props._id;
							  		let firstName = props.firstName;
							  		let lastName = props.lastName;
							  		let address = props.address;

							  		const deleteItem = async(userId) =>{
							  			        fetch(`http://localhost:4000/users/${props._id}`, {
							  		                		method: 'DELETE',
							  		                		headers:{
							  		                			'Content-Type' : 'application/json'
							  		                		}

							  		                	})
							  		                	.then(res => res.json())
							  		                	.then(data => {
							  		                		console.log(`${data} dataDATA`);
							  		                		if(data !== false){
							  		                			Swal.fire({
							  		                			title:"Deleted User Successfully",
							  		                			icon:"success",
							  		                			text:""
							  		                		});
							  		                		}
							  		                	})
							  		                	window.location.reload(false)

							  		                }

							  	
							  		return(
							  			<Fragment>
							  				    <tr id={`${props._id}`} >
							  				      <td  className="thcart">{firstName}</td>
							  				      <td className="thprice">{lastName}</td>
							  				       <td className="thprice">{address}</td>
							  				       <td className="thprice">
							  				         <Link className="btn btn-primary ml-4"  style={{width:220}} /*onClick={getDetails} value={userId}*/ to={`/edituser/${props._id}`}>Edit user</Link>

							  				          <Link className="btn btn-success ml-4"  value= {userId} style={{width:220}} onClick={deleteItem}>Delete</Link>
							  				       </td>

							  			   		 </tr>

							  			   </Fragment>) 
							  			}))	
									})

							}, [])

/**/
	return (
		<Container className="mt-5">
		{/*<Link variant="primary" to="/adduser">Add a User</link>*/}
		<Button variant="primary"as={Link} to="/adduser">Add a User</Button>
			<hr></hr>
					<Table striped bordered hover size="sm">
						<thead>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Address</th>
							<th></th>
							<th></th>
						</thead>

					  <tbody>
					  {user}
				  	</tbody>
				</Table>
		</Container>
	)
}