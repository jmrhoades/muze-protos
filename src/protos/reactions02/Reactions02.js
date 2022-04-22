import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Viewport } from "../../ios/iPhoneViewport";
import { ThemeSwitcher } from "../../controls/ThemeSwitcher";
import { lightTheme as startingTheme } from "../../ds/Colors";

import { Muze } from "./muze/Muze";
import { testDataA as testData } from "./data";

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
	margin-right: 4em;
`;

const PhoneLabel = styled(motion.div)`
	padding-top: 2em;
	text-align: center;
	p {
		font-size: 1.1em;
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

	const [metrics, setMetrics] = useState({
		viewport_width: 390,
		viewport_height: 844,
		home_post_spacing: 64,
	});

	const [data, setData] = useState(testData);

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
						<Muze data={data} theme={theme} metrics={metrics} user={user} />
					</Viewport>
					<PhoneLabel>
						<motion.p
							animate={{
								color: theme.fillPrimary,
							}}
						>
							{user.name}
						</motion.p>
						<motion.p
							animate={{
								color: theme.fillPrimary,
							}}
						>
							{user.role}
						</motion.p>
					</PhoneLabel>
				</Phone>
			))}

			<StickerPreload>
				{data.reactions.map(s => (
					<Sticker src={s.src} id={s.id} />
				))}
			</StickerPreload>

			<ThemeSwitcher theme={theme} setTheme={setTheme} setMetrics={setMetrics} setData={setData} />
		</Wrap>
	);
};
