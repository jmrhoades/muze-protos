import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import useSound from "use-sound";

//import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";
//import { useReward } from "react-rewards";
import { reward } from "../reward/useReward";

import pop_sound from "../../../sounds/pop06.mp3";
import sticker_send_sound from "../../../sounds/sticker_send_04.mp3";

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

export const UserStickers = props => {
	//console.log(props.user.id, props.data.reactions);

	const stickersFrom = props.data.stickers.filter(r => {
		return r.created_by === props.user.id;
	});

	const [pop] = useSound(pop_sound);
	const [success] = useSound(sticker_send_sound);

	//const { reward } = useReward("rewardTarget_"+props.user.id, "stickers", {image:"/stickers/sticker-06.png"});

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
				<Sticker
					key={s.id}
					data={s}
					action={() => {
						props.setShowSheet(false);
						props.model.addReactionFromUserToPost(s.id, props.user.id, props.activePostID);

						const u = props.data.posts.filter(p => {
							return p.id === props.activePostID;
						})[0];

						const id = "receiver_target_" + u.created_by + props.activePostID;
						setTimeout(() => {
							reward(id, {
								elementSize: 48,
								elementCount: 24,
								image: s.src,
								
							});
						}, 50);

						pop();
						setTimeout(success, 200);
					}}
				/>
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
					height: imgSize,
				}}
				drag
				dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
				whileTap={{ scale: 0.9 }}
				onTap={props.action}
			/>
		</StickerWrap>
	);
};
