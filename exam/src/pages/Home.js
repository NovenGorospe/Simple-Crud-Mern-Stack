import React from 'react';
import {useEffect, useState } from 'react';
import { Fragment } from 'react'
import { Container} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';
import { Row, Col, Button, Form, tr, td, th, thead,Table, tbody} from 'react-bootstrap';
import CardUser from '../component/CardUser';
import UserContext from '../UserContext';
// import {useContext } from 'react'


export default function User(userProp){
	const {_id, firstName, lastName, address} = userProp;
	const userId = userProp.match.params.userId;
			
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


							  		return(
							  			<Fragment>
							  				    <tr id="${_id}">
							  				      <td  className="thcart">{firstName}</td>
							  				      <td className="thprice">{lastName}</td>
							  				       <td className="thprice">{address}</td>
							  				       <td className="thprice">
							  				         <Link className="btn btn-primary ml-4"  style={{width:220}} >Edit user</Link>

							  				         {/* <Link className="btn btn-success ml-4"  style={{width:220}} onPress={getDetails} to={`/products/${_id}`}>Details</Link>
*/}
							  				       		
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