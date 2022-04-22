import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { HomeIndicator } from "./HomeIndicator";
import { StatusBar } from "./StatusBar";
import { Bevel } from "./Bevel";

const Wrap = styled(motion.div)`
	width: 466px;
	height: 900px;
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const Screen = styled.div`
	width: 390px;
	height: 844px;
	position: relative;
	overflow: hidden;
	/* cursor: url(/ui/framer-touch-cursor.png) 32 32, auto !important;
	& * :active {
		cursor: url(/ui/framer-touch-cursor-active.png) 32 32, auto !important;
	} */
`;

export const Viewport = props => {
	return (
		<Wrap>
			<Screen>
				{props.children}
				<HomeIndicator theme={props.theme} />
				<StatusBar theme={props.theme} />
			</Screen>
			<Bevel theme={props.theme} />
		</Wrap>
	);
};
