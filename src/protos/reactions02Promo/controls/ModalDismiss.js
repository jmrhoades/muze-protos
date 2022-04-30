import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import useSound from "use-sound";
import close_sound from "../../../sounds/close01.mp3";

const Wrap = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
`;

export const ModalDismiss = props => {

	const [playClose] = useSound(close_sound);

	return (
		<Wrap
			style={{
				pointerEvents: props.show ? "auto" : "none",
                opacity: props.modalOpacity,
			}}
			// animate={{
			// 	opacity: props.show ? 1 : 0,
			// }}
			onTap={e => {
				//playClose();
				props.setShow(false);
			}}
		/>
	);
};
