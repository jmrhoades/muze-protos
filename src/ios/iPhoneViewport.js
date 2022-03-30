import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { HomeIndicator } from "./HomeIndicator";
import { StatusBar } from "./StatusBar";

const Wrap = styled(motion.div)`
	width: 466px;
	height: 900px;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const PhoneBevelLight = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 466px;
	height: 900px;
	background-image: url("/phone-bezels/iPhone13-Starlight.png");
	background-repeat: no-repeat;
	background-size: 466px 900px;
`;

const PhoneBevelDark = styled(PhoneBevelLight)`
	background-image: url("/phone-bezels/iPhone13-Midnight.png");
`;

const Screen = styled.div`
	width: 390px;
	height: 844px;
	position: relative;
`;

export const Viewport = props => {
	return (
		<Wrap>
			<PhoneBevelLight animate={{ opacity: props.theme.name === "dark" ? 0 : 1 }} initial={false} />
			<PhoneBevelDark animate={{ opacity: props.theme.name === "dark" ? 1 : 0 }} initial={false} />
			<Screen>
				{props.children}
				<HomeIndicator theme={props.theme} />
				<StatusBar theme={props.theme} />
			</Screen>
		</Wrap>
	);
};
