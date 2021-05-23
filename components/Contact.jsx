import React from 'react';
import Image from 'next/image';

export default function Contact({ name, photo }) {
	return (
		<div className='flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl'>
			<Image className='rounded-full' src={photo} width={40} height={40} />
			<p>{name}</p>
			<span className='absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full animate-spin' />
		</div>
	);
}
