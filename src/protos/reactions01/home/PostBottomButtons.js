import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";

const Container = styled(motion.div)`
	position: absolute;
	bottom: 0;
	width: 100%;
	height: 84px;
	display: flex;
	justify-content: space-between;
	padding: 0 64px;
`;

const PostBottomButton = styled(motion.div)``;

export const PostBottomButtons = props => {
	return (
		<Container
			animate={{
				opacity: props.focussedPost !== null ? 1 : 0,
			}}
            transition={props.focussedPost !== null ? transitions.slowEase :  transitions.fastEase }
			initial={false}
		>
			<PostBottomButton>
				<Icon name={"DeleteTrashOutline"} fill={props.theme.fillPrimary} style={{ margin: "auto" }} />
			</PostBottomButton>
			<PostBottomButton>
				<Icon name={"Download"} fill={props.theme.fillPrimary} style={{ margin: "auto" }} />
			</PostBottomButton>
			<PostBottomButton>
				<Icon name={"ChatCircle"} fill={props.theme.fillPrimary} style={{ margin: "auto" }} />
			</PostBottomButton>
		</Container>
	);
};
