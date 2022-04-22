import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";


const Wrap = styled(motion.div)`
	width: 466px;
	height: 900px;
    pointer-events: none;
    position: absolute;
	top: 50%;
	left: 50%;
    transform: translate(-50%, -50%);
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


export const Bevel = props => {
	return (
		<Wrap>
			<PhoneBevelLight animate={{ opacity: props.theme.name === "dark" ? 0 : 1 }} initial={false} />
			<PhoneBevelDark animate={{ opacity: props.theme.name === "dark" ? 1 : 0 }} initial={false} />
		</Wrap>
	);
};
