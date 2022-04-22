import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";

const Sheet = styled(motion.div)`
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
`;

const Background = styled(motion.div)`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	border-radius: 32px 32px 0 0;
	box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.08);
`;

const Handle = styled(motion.div)`
	position: absolute;
	height: 32px;
	width: 100%;
	left: 0;
	top: -16px;
	/* background-color: rgba(100, 0, 0, 0.1); */
`;

const HandleMaterial = styled(motion.div)`
	position: absolute;
	height: 5px;
	border-radius: 2.5px;
	width: 36px;
	left: 50%;
	bottom: 6px;
	background-color: rgba(100, 0, 0, 0.1);
	transform: translateX(-18px);
`;

export const BottomSheet = props => {
	//const animation = useAnimation();
	
	const sheetHeight = 400;
	const bottomOvershootHeight = 200;

	return (
		<Sheet
			style={{
				y: props.sheetYOffset,
				height: sheetHeight,
			}}
			drag={"y"}
			dragMomentum={false}
			dragConstraints={{ top: 0, bottom: sheetHeight/2 }}
			animate={{
				y: props.show ? 0 : sheetHeight + 100,
			}}
            transition={transitions.slowSpring}
            dragTransition={transitions.springySpring}
			onDragEnd={(event, info) => {
				if (info.offset.y >= 50) {
					props.setShow(false);
				} else {
					props.setShow(true);
				}
			}}
		>
			<Background
				style={{
					height: sheetHeight + bottomOvershootHeight,
				}}
				animate={{
					backgroundColor: props.theme.sheetBackgroundMaterial,
				}}
			/>
			<Handle
				onTap={() => {
					props.setShow(false);
				}}
			>
				<HandleMaterial
					animate={{
						backgroundColor: props.theme.sheetHandleMaterial,
					}}
				/>
			</Handle>
            {props.children}
		</Sheet>
	);
};
