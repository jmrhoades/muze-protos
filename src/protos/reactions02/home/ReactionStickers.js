import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";
import { useReward } from "react-rewards";


const StickersWrap = styled(motion.div)`
	position: relative;
	display: flex;
	flex-wrap: wrap;
    padding: 24px 24px 0;
`;

const buttonWidth = "33%";
const buttonHeight = 112;

const addIconSize = 58;
const bgSize = 96;
const buttonCornerRadius = 24;
const imgSize = 88;

const StickerWrap = styled(motion.div)`
	position: relative;
	display: grid;
	& > * {
		margin: auto;
	}
`;
const AddButton = styled(StickerWrap)``;
const StickerBackground = styled(motion.div)`
	position: absolute;
	width: 100%;
	height: 100%;
    top: 50%;
    left: 50%;
	/* background: rgba(0, 0, 100, 0.4); */
`;
const AddButtonBackground = styled(StickerBackground)``;
const StickerImage = styled(motion.img)`
	position: relative;
	filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))
		drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
`;

export const ReactionStickers = props => {
	console.log(props.user.id, props.data.reactions);

	const stickersFrom = props.data.reactions.filter(r => {
		return r.created_by === props.user.id;
	});

    const { reward: reward1 } = useReward("rewardTarget_", "emoji", {
		position: "absolute",
		emoji: ["😹", "😹"],
        elementSize: 50,
        spread: 75,
	});

	return (
		<StickersWrap>
			<AddButton
				style={{
					width: buttonWidth,
					height: buttonHeight,
				}}
			>
				<AddButtonBackground
				style={{
					borderRadius: buttonCornerRadius,
					width: bgSize,
					height: bgSize,
                    x: "-50%",
                    y: "-50%",
				}}
			/>
                <Icon name={"AddCircle"} fill={props.theme.fillPrimary} size={addIconSize} />
			</AddButton>

			{stickersFrom.map(s => (
				<Sticker key={s.id} data={s} action={reward1} />
			))}
		</StickersWrap>
	);
};

const Sticker = props => {
	return (
		<StickerWrap
			style={{
				width: buttonWidth,
				height: buttonHeight,
			}}
		>
			<StickerBackground
				style={{
					borderRadius: buttonCornerRadius,
					width: bgSize,
					height: bgSize,
                    x: "-50%",
                    y: "-50%",
				}}
			/>
			<StickerImage
				src={props.data.src}
				style={{
					width: imgSize,
					height: imgSize,
				}}
                drag
                dragConstraints={{top: 0, bottom: 0, left: 0, right: 0}}
                whileTap={{ scale: 0.9 }}
                onTap={()=> {
                    props.action();
                    console.log()
                }}
			/>
		</StickerWrap>
	);
};
