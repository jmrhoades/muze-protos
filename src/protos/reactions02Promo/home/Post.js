import React, { useLayoutEffect } from "react";
import styled from "styled-components";
import { motion, useAnimation } from "framer-motion";

import useSound from "use-sound";
import pop_sound from "../../../sounds/pop05.mp3";
import pop_sound2 from "../../../sounds/pop06.mp3";

import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";
import { reward } from "../reward/useReward";

const ListItem = styled(motion.div)`
	position: relative;
	/* display: flex;
	align-items: center;
	justify-content: center; */
`;

const ListItemContent = styled(motion.div)`
	/* width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	transform: translateY(32px); */
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
	top: 50%;
	left: 35%;
	pointer-events: none;

	width: 10px;
	height: 10px;
	/* background-color: red; */
	border-radius: 5px;

	/* position: absolute;

	left: 50%;
	top: 65%; */
`;

const ReactionsList = styled.div`
	padding-left: 32px;
`;

const stickerSize = 56;

export const Post = props => {
	const [playPop] = useSound(pop_sound);

	const postFrom = props.users.filter(u => {
		return u.id === props.post.created_by;
	})[0];

	useLayoutEffect(() => {
		// if new reaction is a part of this post
	});

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
							{props.post.create_at_relative}
						</Timestamp>
					</Attribution>
					<Actions>
						<PostButton
							onTap={() => {
								playPop();
							}}
						>
							<Icon name={"MoreOptions2Dots"} fill={props.theme.fillPrimary} />
						</PostButton>
						{props.user.id !== props.post.created_by && (
							<PostButton
								onTap={() => {
									//playPop();
									props.setShowSheet(true);
									props.setActivePostID(props.post.id);
								}}
								animate={{
									opacity: props.showSheet ? 0.2 : 1,
								}}
								transition={{
									type: "tween",
									duration: 0.2,
								}}
								initial={false}
							>
								<Icon name={"Sticker"} fill={props.theme.fillPrimary} />
							</PostButton>
						)}
					</Actions>
				</MetaData>

				<ImageWrap
					animate={{ backgroundColor: props.theme.canvasFill }}
					initial={false}
					transition={transitions.slowSpring}
				>
					<Image src={props.post.image.src} />
					<ConfettiTarget id={"receiver_target_" + props.user.id + props.post.id} />
				</ImageWrap>

				<ReactionsList
					style={{
						paddingLeft: stickerSize / 2,
					}}
				>
					{props.reactions.map(r => (
						<Sticker
							key={r.id}
							reaction={r}
							data={props.data}
							stickers={props.data.stickers}
							activePostID={props.activePostID}
							user={props.user}
							snd={props.snd}
						/>
					))}
				</ReactionsList>
			</ListItemContent>
		</ListItem>
	);
};

const StickerWrap = styled(motion.span)`
	position: relative;
	display: inline-block;
`;

const StickerImage = styled(motion.img)`
	position: relative;
	filter: drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 3px rgba(0, 0, 0, 0.15))
		drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.1));
`;

const StickerRewardTarget = styled(motion.span)`
	display: block;
	position: absolute;
	top: 0%;
	left: 0%;
`;

const Sticker = props => {
	const sticker = props.stickers.filter(s => {
		return s.id === props.reaction.sticker_id;
	})[0];

	const [pop] = useSound(pop_sound2);

	const animation = useAnimation();

	const reward_id =
		"poststicker_" + props.user.id + "_" + props.activePostID + "_" + sticker.id + "_" + props.reaction.id;

		/*
	useLayoutEffect(() => {
		if (props.data.newReactionID === props.reaction.id && props.reaction.created_by === props.user.id) {
			setTimeout(() => {
				pop()
				reward(reward_id, {
					elementSize: 12,
					elementCount: 24,
					image: sticker.src,
					spread: 40,
					startVelocity: 20,
					lifetime: 105,
				});
				props.data.newReactionID = null;
			}, 300);
		}
	});
	*/

	useLayoutEffect(() => {
		animation.start({
			scale:0,
			transition: {
				duration: 0,
			}
		})
		setTimeout(() => {
			//pop()
			animation.start({
				scale:1,
			})
			reward(reward_id, {
				elementSize: 12,
				elementCount: 24,
				image: sticker.src,
				spread: 40,
				startVelocity: 20,
				lifetime: 105,
			});
		}, props.reaction.order * 100);

	}, [props.data]);

	return (
		<StickerWrap
			style={{
				height: stickerSize,
				marginLeft: -stickerSize / 4,
				marginTop: -stickerSize / 2,
			}}
		>
			<StickerImage
				src={sticker.src}
				style={{
					height: stickerSize,
				}}
				initial={{
					scale: 0,
					
				}}
				animate={animation}
				transition={{
					type: "spring",
				}}
			></StickerImage>
			<StickerRewardTarget id={reward_id} />
		</StickerWrap>
	);
};
