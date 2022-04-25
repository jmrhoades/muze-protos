import React, { useState } from "react";
import uuid from "react-uuid";

import styled from "styled-components";
import { motion } from "framer-motion";

import { Viewport } from "../../ios/iPhoneViewport";
import { ThemeSwitcher } from "../../controls/ThemeSwitcher";
import { lightTheme as startingTheme } from "../../ds/Colors";

import { Muze } from "./muze/Muze";
import { testDataA as testData } from "./data";

import Snd from 'snd-lib';



const Wrap = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;

const Phone = styled(motion.div)`
	&:first-child {
		margin-right: 3vw;
	}
`;

const PhoneLabel = styled(motion.div)`
	/* padding-top: 2em; */
	/* text-align: center; */
	display: flex;
	align-items: center;
	justify-content: center;
	width: 64px;
	height: 64px;
	border-radius: 50%;
	margin-top: -64px;
	/* margin-left: -24px; */
	position: relative;
	box-shadow: 0 1px 5px 0 rgba(0,0,0,.1);

	p {
		font-size: 1.5em;
		&:nth-child(2) {
			opacity: 0.3;
		}
	}
`;

const StickerPreload = styled(motion.div)`
	position: absolute;
	pointer-events: none;
	opacity: 0;
`;
const Sticker = styled(motion.img)``;

export const Reactions02 = props => {
	const [theme, setTheme] = useState({ ...startingTheme });

	const snd = new Snd();

	const [metrics, setMetrics] = useState({
		viewport_width: 390,
		viewport_height: 844,
		home_post_spacing: 96,
	});

	const [data, setData] = useState(testData);

	const model = {};
	model.addReactionFromUserToPost = (sticker_id, user_id, post_id) => {
		const reaction = {
			id: uuid(),
			created_by: user_id,
			sticker_id: sticker_id,
			create_at_relative: "now",
			post_id: post_id,
		};
		//console.log("addReactionFromUserToPost", sticker_id, user_id, post_id);
		data.reactions.push(reaction);
		data.newReactionID = reaction.id;
		setData({ ...data });

		
		
						
	};

	// Load audio file
snd.load(Snd.KITS.SND01).then(() => {
	console.log("loaded!")
})

	return (
		<Wrap
			animate={{
				backgroundColor: theme.z0,
			}}
			initial={false}
		>
			{data.users.map(user => (
				<Phone key={user.id}>
					<Viewport theme={theme}>
						<Muze data={data} theme={theme} metrics={metrics} user={user} model={model} snd={snd} />
					</Viewport>
					<PhoneLabel
						style={{
							backgroundColor: user.profileBackgroundColor,
						}}
					>
						<motion.p
							animate={{
								color: theme.fillPrimary,
							}}
						>
							{user.profileInitials}
						</motion.p>
						{/* <motion.p
							animate={{
								color: theme.fillPrimary,
							}}
						>
							{user.role}
						</motion.p> */}
					</PhoneLabel>
				</Phone>
			))}

			<StickerPreload>
				{data.stickers.map(s => (
					<Sticker src={s.src} id={s.id} key={s.id} />
				))}
			</StickerPreload>

			<ThemeSwitcher theme={theme} setTheme={setTheme} setMetrics={setMetrics} setData={setData} />
		</Wrap>
	);
};
