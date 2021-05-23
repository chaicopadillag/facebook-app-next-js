import React from 'react';
import Image from 'next/image';
import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline';

export const Post = ({ title, image, description }) => {
	return (
		<div className='flex flex-col'>
			<div className='p-5 bg-white mt-5 rounded-md shadow-xl'>
				<div className='flex items-center space-x-2'>
					<Image className='rounded-full' src='/profile.png' width={40} height={40} />
					<div>
						<p className='font-medium'>Code Codero</p>
						<p className='text-xs text-gray-400'>{new Date().toLocaleString()}</p>
					</div>
				</div>
				<p className='pt-4'>{title}</p>
				<p className='pt-1 text-sm text-gray-500'>{description}</p>
			</div>
			<div className='relative h-56 md:h-96 bg-white'>
				<Image src={image} objectFit='cover' layout='fill' />
			</div>
			<div className='flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t'>
				<div className='inputIcon rounded-none'>
					<ThumbUpIcon className='h-4' />
					<p className='text-xs sm:text-base'>Me gusta</p>
				</div>
				<div className='inputIcon rounded-none'>
					<ChatAltIcon className='h-4' />
					<p className='text-xs sm:text-base'>Comentar</p>
				</div>
				<div className='inputIcon rounded-none'>
					<ShareIcon className='h-4' />
					<p className='text-xs sm:text-base'>Compartir</p>
				</div>
			</div>
		</div>
	);
};
