import React from 'react';
import { StoryCard } from './StoryCard';
const stories = [
	{
		uid: 'S001',
		name: 'Ramon',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/1.jpg',
		story_url: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/1.jpg',
	},
	{
		uid: 'S002',
		name: 'Gorillaz',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/2.jpg',
		story_url: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/4.jpg',
	},
	{
		uid: 'S003',
		name: 'Lady Gaga',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/3.jpg',
		story_url: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/6.jpg',
	},
	{
		uid: 'S004',
		name: 'The Weeknd',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/4.jpg',
		story_url: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/8.jpg',
	},
	{
		uid: 'S005',
		name: 'Rivers Cuomo',
		photo: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/users/5.jpg',
		story_url: 'https://raw.githubusercontent.com/ramon82/assets/master/zuck.js/stories/9.jpg',
	},
];
export const Stories = () => {
	return (
		<div className='flex justify-center space-x-3 mx-auto'>
			{stories.map((story) => (
				<StoryCard key={story.uid} name={story.name} photo={story.photo} story={story.story_url} />
			))}
		</div>
	);
};
