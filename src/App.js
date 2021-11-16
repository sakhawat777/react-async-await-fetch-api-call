import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetchUsers();
	}, []);

	const fetchUsers = async () => {
		const res = await fetch('https://randomuser.me/api/?results=10');
		const data = await res.json();
		try {
			setUsers(data.results);
			// console.log(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='user-list'>
			{users.map((user) => (
				<li key={user.login.uuid}>
					{user.name.first} {user.name.last}
				</li>
			))}
		</div>
	);
}

export default App;
