import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Container = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 34px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Handle = styled(motion.div)`
	width: 134px;
	height: 5px;
	border-radius: 3px;
`;

export const HomeIndicator = props => {
	return (
		<Container>
			<Handle
				animate={{ backgroundColor: props.theme.name === "dark" ? "rgba(255,255,255,1.0)" : "rgba(0,0,0,1.0)" }}
				initial={false}
			/>
		</Container>
	);
};
