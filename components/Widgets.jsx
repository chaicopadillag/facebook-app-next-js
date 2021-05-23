import { DotsHorizontalIcon, SearchIcon, VideoCameraIcon } from '@heroicons/react/solid';
import React from 'react';
import Contact from './Contact';
const contacts = [
	{
		uid: 'S006',
		name: 'Ramon',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg',
	},
	{
		uid: 'S007',
		name: 'Gorillaz',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg',
	},
	{
		uid: 'S008',
		name: 'Lady Gaga',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
	},
	{
		uid: 'S009',
		name: 'The Weeknd',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
	},
	{
		uid: 'S0010',
		name: 'Rivers Cuomo',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg',
	},
];
export const Widgets = () => {
	return (
		<div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
			<div className='flex justify-between items-center text-gray-500 mb-5'>
				<h2 className='text-xl'>Contactos</h2>
				<div className='flex space-x-2'>
					<VideoCameraIcon className='h-6' />
					<SearchIcon className='h-6' />
					<DotsHorizontalIcon className='h-6' />
				</div>
			</div>
			{contacts.map((contact) => (
				<Contact key={contact.uid} {...contact} />
			))}
		</div>
	);
};
