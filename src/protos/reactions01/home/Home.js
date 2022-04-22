import React from "react";
import styled from "styled-components";
import { motion, useMotionValue, useAnimation } from "framer-motion";

import { Post } from "./Post";
import { PostBottomButtons } from "./PostBottomButtons";

const Container = styled(motion.div)`
	position: relative;
`;

const List = styled(motion.div)`
	position: relative;
`;

export const Home = props => {
	const width = props.viewportSize.width;
	const height = props.viewportSize.height;

	// Paging Scrollview
	const isScrolling = useMotionValue(0);
	const currentPage = useMotionValue(0);

	const snapToPageAnimation = useAnimation();
	const totalPages = props.data.posts.length;
	const pageHeight = height;
	const pagesHeight = pageHeight * (totalPages - 1);

	
	return (
		<Container
			style={{
				width: width,
				height: height,
				overflow: "hidden",
			}}
			animate={{ backgroundColor: props.theme.z0 }}
			initial={false}
		>
			<List
				drag={"y"}
				dragMomentum={false}
				dragConstraints={{ top: -pagesHeight, bottom: 0 }}
				onDragStart={()=> {
					props.setFocussedPost(null);
				}}
				onDragEnd={(event, info) => {
					// scrollY, velocity threshold, newpage
					const velocityThreshold = 300;
					const offsetThreshhold = 100;
					let newPage = currentPage.get();

					// velocity or offset-based paging
					if (info.velocity.y >= velocityThreshold || info.offset.y >= offsetThreshhold) {
						newPage--;
					} else if (info.velocity.y <= -velocityThreshold || info.offset.y <= -offsetThreshhold) {
						newPage++;
					}

					// set new page
					if (newPage > totalPages - 1) newPage = totalPages - 1;
					if (newPage < 0) newPage = 0;
					currentPage.set(newPage);

					// scroll!
					snapToPageAnimation.start({
						y: -pageHeight * newPage,
						transition: {
							type: "spring",
							stiffness: 500,
							damping: 60,
							onComplete: () => {
								isScrolling.set(0);
							},
						},
					});
				}}
				animate={snapToPageAnimation}
			>
				{props.data.posts.map(post => (
					<Post
						key={post.id}
						data={post}
						setData={props.setData}
						viewportSize={props.viewportSize}
						theme={props.theme}
						focussedPost={props.focussedPost}
						setFocussedPost={props.setFocussedPost}
						setShowEmojiKeyboard={props.setShowEmojiKeyboard}
					/>
				))}
			</List>
			<PostBottomButtons focussedPost={props.focussedPost} theme={props.theme} />
		</Container>
	);
};
