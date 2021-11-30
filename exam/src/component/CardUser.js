import { Fragment, useEffect, useState } from 'react';
import HomeCard from '../pages/Home';
import EditUser from '../pages/EditUser';
import { Container} from 'react-bootstrap';


export default function UserList(){

const [user, setUser] = useState([]);

// const [product, setProduct] = useState([]);
	useEffect(()=>{
		 fetch("http://localhost:4000/users/")
		.then(res => res.json())
		.then(data =>{
			console.log(data);

			// set the courses state to map the data retrieved from the fetch request in several "Courescard"
			setUser(data.map(user => {
				console.log(user)
					return (
						// key is to get the id of coursesData
						<HomeCard key={user.id} userProp={user}/>
					)
				})
			);
			
		})
	}, [user])


	return (
			<Fragment>
				
			</Fragment>
		
	)
}