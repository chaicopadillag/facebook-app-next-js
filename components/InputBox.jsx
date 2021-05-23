import React from 'react';
import Image from 'next/image';
import { CameraIcon, EmojiHappyIcon, VideoCameraIcon } from '@heroicons/react/solid';

export const InputBox = () => {
	const sendPost = (e) => {
		e.preventDefault();
	};
	return (
		<div className='bg-white rounded-2xl shadow-md text-gray-500 font-medium mt-6'>
			<div className='flex rounded-md p-5'>
				<Image src='/profile.png' className='rounded-full' width={40} height={40} layout='fixed' />
				<form className='flex flex-1' onSubmit={sendPost}>
					<input className='rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none' type='text' placeholder='¿Qué estas haciendo ahora?' />
					<button type='submit' hidden className='bg-blue-500 p-5 rounded-md text-gray-100'>
						Publicar
					</button>
				</form>
			</div>
			<div className='flex justify-evenly p-3 border-t'>
				<div className='inputIcon'>
					<VideoCameraIcon className='h-7 text-red-500' />
					<p className='text-xs sm:text-sm xl:text-base'>Video en vivo</p>
				</div>
				<div className='inputIcon'>
					<CameraIcon className='h-7 text-green-500' />
					<p className='text-xs sm:text-sm xl:text-base'>Foto/Video</p>
				</div>
				<div className='inputIcon'>
					<EmojiHappyIcon className='h-7 text-yellow-500' />
					<p className='text-xs sm:text-sm xl:text-base'>Me siento</p>
				</div>
			</div>
		</div>
	);
};
