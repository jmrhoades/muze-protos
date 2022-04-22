import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";

const ListItem = styled(motion.div)`
	position: relative;
	/* display: flex;
	align-items: center;
	justify-content: center; */
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
	height: 56px;
	width: 100%;
	padding: 0 16px;
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const Attribution = styled(motion.div)`
	display: flex;
	font-size: 19px;
	line-height: 56px;
`;

const Name = styled(motion.div)`
	padding-right: 10px;
`;

const Timestamp = styled(motion.div)``;

const Actions = styled(motion.div)`
	display: flex;
`;

const PostButton = styled(motion.div)`
	width: 48px;
	height: 48px;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const ConfettiTarget = styled.div`
	position: absolute;
	top: 65%;
	left: 50%;
	pointer-events: none;
`;

export const Post = props => {

	
	const postFrom = props.users.filter(u => {
		return u.id === props.data.created_by
	})[0]
	

	return (
		<ListItem
			style={{
				marginBottom: props.marginBottom,
			}}
		>
			<ListItemContent>
				<MetaData>
					<Attribution>
						<Name animate={{ color: props.theme.fillPrimary }} initial={false}>
							{postFrom.name}
						</Name>
						<Timestamp animate={{ color: props.theme.fillSecondary }} initial={false}>
							{props.data.create_at_relative}
						</Timestamp>
					</Attribution>
					<Actions>
						<PostButton>
							<Icon name={"MoreOptions2Dots"} fill={props.theme.fillPrimary} />
						</PostButton>
						<PostButton
							onTap={() => {
								props.setShowSheet(true);
							}}
							animate={{
								opacity: props.showSheet ? 0.2 : 1,
							}}
							transition={{
								type: "tween",
								duration: 0.2,
							}}
						>
							<Icon name={"Sticker"} fill={props.theme.fillPrimary} />
						</PostButton>
					</Actions>
				</MetaData>

				<ImageWrap
					animate={{ backgroundColor: props.theme.canvasFill }}
					initial={false}
					transition={transitions.slowSpring}
				>
					<Image src={props.data.image.src} />
				</ImageWrap>
			</ListItemContent>

			<ConfettiTarget id={"rewardTarget_"} />
			{/* <ConfettiTarget id={"rewardTarget_" + props.data.id + "_02"} /> */}
			{/* <ConfettiTarget id={"rewardTarget_" + props.data.id + "_03"} /> */}
			{/* <ConfettiTarget id={"rewardTarget_" + props.data.id + "_04"} /> */}
		</ListItem>
	);
};
