import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Icon } from "../ds/Icon";
import { lightTheme, darkTheme } from "../ds/Colors";
import { transitions } from "../ds/Transitions";


const Wrap = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
`;

const Keyboard = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 390px;
	height: 370px;

	background-image: url(/ui/ios-emojikeyboard-390x370@3x.png);
	background-size: 390px 370px;
`;

export const EmojiKeyboard = props => {
	return (
		<Wrap
			style={{
				pointerEvents: props.showEmojiKeyboard ? "auto" : "none",
			}}
			onTap={()=>{
				props.setShowEmojiKeyboard(false);
			}}
		>
			<Keyboard
				animate={{
					y: props.showEmojiKeyboard ? 0 : 370,
				}}
				transition={transitions.slowSpring}
			/>
		</Wrap>
	);
};
