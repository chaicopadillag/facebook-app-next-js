import React from 'react';
import Image from 'next/image';
import { ChevronDownIcon, ShoppingBagIcon, UserGroupIcon } from '@heroicons/react/outline';
import { CalendarIcon, ClockIcon, DesktopComputerIcon, UsersIcon } from '@heroicons/react/solid';
import { SidebarRow } from './SidebarRow';

export const Sidebar = () => {
	return (
		<div className='p-2 mt-5 max-w-[600px] xl:min-w-[300px]'>
			<div className='flex items-center space-x-2 p-4 hover:bg-gray-200 rounded-xl cursor-pointer'>
				<Image className='rounded-full' src='/profile.png' width={40} height={40} layout='fixed' />
				<p className='font-medium hidden sm:inline-flex'>Code Codero</p>
			</div>
			<SidebarRow Icon={UsersIcon} title='Amigos' />
			<SidebarRow Icon={UserGroupIcon} title='Grupos' />
			<SidebarRow Icon={ShoppingBagIcon} title='Marketplace' />
			<SidebarRow Icon={DesktopComputerIcon} title='Videos' />
			<SidebarRow Icon={CalendarIcon} title='Eventos' />
			<SidebarRow Icon={ClockIcon} title='Recuerdos' />
			<SidebarRow Icon={ChevronDownIcon} title='Cargar más' />
		</div>
	);
};
