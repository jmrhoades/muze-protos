import React, { useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Post } from "./Post";

const Container = styled(motion.div)`
	position: relative;
`;

const List = styled(motion.div)`
	position: relative;
`;

export const Home = props => {
	const width = props.metrics.viewport_width;
	const height = props.metrics.viewport_height;

	// this user's home feed
	const friends = [props.user.id, ...props.user.friends];
	const isFriendPost = p => {
		let t = false;
		friends.forEach(friend_id => {
			//console.log(p.created_by, friend_id);
			if (p.created_by === friend_id) {
				t = true;
			}
		});
		return t;
	};
	const posts = props.data.posts.filter(isFriendPost);
	const scrollViewRef = useRef(null);
	return (
		<Container
			style={{
				width: width,
				minHeight: height,
				overflow: "hidden",
			}}
			animate={{ backgroundColor: props.theme.z0 }}
			initial={false}
		>
			<List
				ref={scrollViewRef}
				drag={"y"}
				dragConstraints={{ top: -5784 + height, bottom: 0 }}
				style={{
					paddingTop: 160,
				}}
			>
				{posts.map(post => (
					<Post
						key={post.id}
						post={post}
						reactions={props.data.reactions.filter(r => {
							return r.post_id === post.id;
						})}
						data={props.data}
						metrics={props.metrics}
						theme={props.theme}
						marginBottom={props.metrics.home_post_spacing}
						setShowSheet={props.setShowSheet}
						showSheet={props.showSheet}
						user={props.user}
						users={props.data.users}
						setActivePostID={props.setActivePostID}
						activePostID={props.activePostID}
						snd={props.snd}
					/>
				))}
			</List>
		</Container>
	);
};
