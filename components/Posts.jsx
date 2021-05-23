import React, { useCallback, useEffect, useState } from 'react';
import { Post } from './Post';

export const Posts = () => {
	const [posts, setPosts] = useState([]);

	const getPost = useCallback(() => {
		fetch('https://spaceflightnewsapi.net/api/v2/blogs?_limit=10')
			.then((res) => (res.ok ? res.json() : Promise.reject(res)))
			.then((data) => {
				setPosts(data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	useEffect(() => {
		getPost();
	}, []);

	return (
		<div>
			{posts.map((post) => (
				<Post key={post.id} title={post.title} image={post.imageUrl} description={post.summary} />
			))}
		</div>
	);
};
