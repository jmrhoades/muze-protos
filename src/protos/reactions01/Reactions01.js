import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Viewport } from "../../ios/iPhoneViewport";
import { ThemeSwitcher } from "../../controls/ThemeSwitcher";
import { lightTheme } from "../../ds/Colors";
import { EmojiKeyboard } from "../../controls/EmojiKeyboard";

import { NavBar } from "./navbar/NavBar";
import { Home } from "./home/Home";


const Wrap = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;

export const Reactions01 = props => {
	const [theme, setTheme] = useState({ ...lightTheme });

	const [viewportSize, setViewportSize] = useState({
		width: 390,
		height: 844,
	});

	const [focussedPost, setFocussedPost] = useState(null);
	const [showEmojiKeyboard, setShowEmojiKeyboard] = useState(false);

	const [data, setData] = useState({
		posts: [
			{
				id: "post_0",
				order: 0,
				image: {
					src: "/images/canvas-layer-01.png",
				},
				attribution: {
					name: "jmrhoades",
					time: "4hr",
				},
			},
			{
				id: "post_2",
				order: 0,
				image: {
					src: "/images/canvas-layer-03.png",
				},
				attribution: {
					name: "Fenner",
					time: "20hr",
				},
			},
			{
				id: "post_1",
				order: 0,
				image: {
					src: "/images/canvas-layer-02.png",
				},
				attribution: {
					name: "jmrhoades",
					time: "1d",
				},
			},

			{
				id: "post_3",
				order: 0,
				image: {
					src: "/images/canvas-layer-04.png",
				},
				attribution: {
					name: "Fenner",
					time: "1d",
				},
			},
		],
	});

	return (
		<Wrap
			animate={{
				backgroundColor: theme.z0,
			}}
			initial={false}
		>
			<Viewport theme={theme}>
				<Home
					theme={theme}
					viewportSize={viewportSize}
					data={data}
					setData={setData}
					focussedPost={focussedPost}
					setFocussedPost={setFocussedPost}
					setShowEmojiKeyboard={setShowEmojiKeyboard}
				/>
				<NavBar theme={theme} focussedPost={focussedPost} />
				<EmojiKeyboard showEmojiKeyboard={showEmojiKeyboard} setShowEmojiKeyboard={setShowEmojiKeyboard} />
			</Viewport>
			<ThemeSwitcher theme={theme} setTheme={setTheme} setViewportSize={setViewportSize} />
		</Wrap>
	);
};
