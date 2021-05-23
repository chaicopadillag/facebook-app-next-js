import Image from 'next/image';
import { BellIcon, ChatIcon, ChevronDownIcon, HomeIcon, UserGroupIcon, ViewGridIcon } from '@heroicons/react/solid';
import { SearchIcon, FlagIcon, PlayIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { HeaderIcon } from './HeaderIcon';

export const Header = () => {
	return (
		<div className='sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md'>
			<div className='flex items-center'>
				{/* <Image src='https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png' width={40} height={40} /> */}
				<Image src='/facebook.png' width={40} height={40} layout='fixed' />
				<div className='flex items-center rounded-full ml-2 bg-gray-100 p-2'>
					<SearchIcon className='h-6' />
					<input className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' type='text' placeholder='Buscar en Facebook' />
				</div>
			</div>
			<div className='flex justify-center flex-grow'>
				<div className='flex space-x-6 md:space-x-2'>
					<HeaderIcon Icon={HomeIcon} active={true} />
					<HeaderIcon Icon={FlagIcon} />
					<HeaderIcon Icon={PlayIcon} />
					<HeaderIcon Icon={ShoppingCartIcon} />
					<HeaderIcon Icon={UserGroupIcon} />
				</div>
			</div>
			<div className='flex items-center sm:space-x-2 justify-end'>
				{/* Perfil */}
				<Image src='/profile.png' width={40} height={40} className='rounded-full' />
				<p className='font-semibold whitespace-nowrap pr-3'>Code Codero</p>
				<ViewGridIcon className='icon' />
				<ChatIcon className='icon' />
				<BellIcon className='icon' />
				<ChevronDownIcon className='icon' />
			</div>
		</div>
	);
};
