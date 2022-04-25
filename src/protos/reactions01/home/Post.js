import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";
import { PostReactions } from "./PostReactions";

const ListItem = styled(motion.div)`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ListItemContent = styled(motion.div)`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: translateY(32px);
`;

const ImageWrap = styled(motion.div)`
	position: relative;
	width: 100%;
	padding-top: 100%; /* 1:1 Aspect Ratio */
	border-radius: 23px;
	overflow: hidden;
	margin-bottom: 24px;
`;

const Image = styled(motion.img)`
	display: block;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	max-width: 100%;
	pointer-events: none;
`;

const MetaData = styled(motion.div)`
	position: relative;
	z-index: 1;
`;

const Attribution = styled(motion.div)`
	display: flex;
	padding: 8px 16px;
	border-radius: 20px;
	font-size: 19px;
	line-height: 24px;
`;

const Name = styled(motion.div)`
	padding-right: 10px;
`;

const Timestamp = styled(motion.div)``;

const Reaction = styled(motion.div)`
	font-size: 21px;
    margin-left: 10px;
	/* line-height: 40px; */
	/* position: absolute;
	right: -32px;
	top: 0; */
`;

const ConfettiTarget = styled.div`
	position: absolute;
	top: 65%;
	left: 50%;
    pointer-events: none;
`;

export const Post = props => {
	const height = props.viewportSize.height;
	const isFocussed = props.focussedPost === props.data.id;

	const toggleFocus = () => {
		if (props.focussedPost === props.data.id) {
			props.setFocussedPost(null);
		} else {
			props.setFocussedPost(props.data.id);
		}
	};

	return (
		<ListItem
			style={{
				height: height,
				overflow: "hidden",
			}}
		>
			<ListItemContent>
				<ImageWrap
					animate={{ backgroundColor: props.theme.canvasFill, y: isFocussed ? -24 : 0 }}
					initial={false}
					transition={transitions.slowSpring}
                    onTap={toggleFocus}
				>
					<Image src={props.data.image.src} />
				</ImageWrap>

				<MetaData
					onTap={toggleFocus}
					initial={false}
					animate={{ y: isFocussed ? 48 : 0 }}
					transition={transitions.slowSpring}
				>
					<Attribution animate={{ backgroundColor: props.theme.attributionSurface }} initial={false}>
						<Name animate={{ color: props.theme.fillPrimary }} initial={false}>
							{props.data.attribution.name}
						</Name>
						<Timestamp animate={{ color: props.theme.fillSecondary }} initial={false}>
							{props.data.attribution.time}
						</Timestamp>
                        {props.data.reaction && <Reaction>{props.data.reaction}</Reaction>}
					</Attribution>

					
				</MetaData>

				<PostReactions theme={props.theme} isFocussed={isFocussed} setFocussedPost={props.setFocussedPost} data={props.data} setData={props.setData} setShowEmojiKeyboard={props.setShowEmojiKeyboard} />
			</ListItemContent>
			<ConfettiTarget id={"rewardTarget_" + props.data.id + "_01"} />
			<ConfettiTarget id={"rewardTarget_" + props.data.id + "_02"} />
			<ConfettiTarget id={"rewardTarget_" + props.data.id + "_03"} />
			<ConfettiTarget id={"rewardTarget_" + props.data.id + "_04"} />
		</ListItem>
	);
};
