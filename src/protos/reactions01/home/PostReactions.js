import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { useReward } from "react-rewards";

import { transitions } from "../../../ds/Transitions";
import { Icon } from "../../../ds/Icon";

const Container = styled(motion.div)`
	width: 100%;
	height: 48px;
	display: flex;
	justify-content: space-between;
	padding: 0 40px;
`;

const PostReactionButton = styled(motion.div)`
	width: 48px;
	height: 48px;
	display: grid;
	border-radius: 24px;
`;

const PostReactionEmoji = styled(motion.div)`
	line-height: 48px;
	text-align: center;
	font-size: 24px;
	transform: translateY(3px);
`;

const makeDelaySpring = delay => {
	return {
		default: {
			type: "spring",
			stiffness: 900,
			damping: 60,
			delay: delay,
		},
		y: {
			type: "spring",
			stiffness: 700,
			damping: 60,
			delay: delay,
		},
		opacity: {
			type: "tween",
			ease: "easeInOut",
			duration: 0.3,
			delay: delay,
		},
	};
};

export const PostReactions = props => {
    
	const { reward: reward1 } = useReward("rewardTarget_" + props.data.id + "_01", "emoji", {
		position: "absolute",
		emoji: ["😹", "😹"],
        elementSize: 50,
        spread: 75,
	});

    const { reward: reward2 } = useReward("rewardTarget_" + props.data.id + "_02", "emoji", {
		position: "absolute",
		emoji: ["🔥", "🔥"],
        elementSize: 50,
        spread: 75,
	});

    const { reward: reward3 } = useReward("rewardTarget_" + props.data.id + "_03", "emoji", {
		position: "absolute",
		emoji: ["😍", "😍"],
        elementSize: 50,
        spread: 75,
	});

    const { reward: reward4 } = useReward("rewardTarget_" + props.data.id + "_04", "emoji", {
		position: "absolute",
		emoji: ["🚀", "🚀"],
        elementSize: 50,
        spread: 75,
	});

	return (
		<Container
			animate={{
				opacity: props.focussedPost !== null ? 1 : 0,
			}}
			transition={transitions.fastSpring}
			initial={false}
		>
			<PostReactionButton
				animate={{
					backgroundColor: props.theme.attributionSurface,
					y: props.isFocussed ? -64 : -44,
					x: props.isFocussed ? 0 : 144,
					scale: props.isFocussed ? 1 : 0.5,
					opacity: props.isFocussed ? 1 : 0,
				}}
				initial={false}
				transition={props.isFocussed ? makeDelaySpring(0.11) : transitions.fastSpring}
                onTap={()=> {
                    reward1();
                    props.data.reaction = "😹"; 
                    //props.setData({...props.data});
                    props.setFocussedPost(null);
                }}
			>
				<PostReactionEmoji>😹</PostReactionEmoji>
			</PostReactionButton>
			<PostReactionButton
				animate={{
					backgroundColor: props.theme.attributionSurface,
					y: props.isFocussed ? -64 : -44,
					x: props.isFocussed ? 0 : 72,
					scale: props.isFocussed ? 1 : 0.5,
					opacity: props.isFocussed ? 1 : 0,
				}}
				initial={false}
				transition={props.isFocussed ? makeDelaySpring(0.05) : transitions.fastSpring}
                onTap={()=> {
                    reward2();
                    props.data.reaction = "🔥"; 
                    //props.setData(...props.data);
                    props.setFocussedPost(null);
                }}
			>
				<PostReactionEmoji>🔥</PostReactionEmoji>
			</PostReactionButton>
			<PostReactionButton
				animate={{
					backgroundColor: props.theme.attributionSurface,
					y: props.isFocussed ? -64 : -44,
					scale: props.isFocussed ? 1 : 0.5,
					opacity: props.isFocussed ? 1 : 0,
				}}
				initial={false}
				transition={props.isFocussed ? makeDelaySpring(0.01) : transitions.fastSpring}
                onTap={()=> {
                    reward3();
                    props.data.reaction = "😍"; 
                    //props.setData(...props.data);
                    props.setFocussedPost(null);
                }}
			>
				<PostReactionEmoji>😍</PostReactionEmoji>
			</PostReactionButton>
			<PostReactionButton
				animate={{
					backgroundColor: props.theme.attributionSurface,
					y: props.isFocussed ? -64 : -44,
					x: props.isFocussed ? 0 : -72,
					scale: props.isFocussed ? 1 : 0.5,
					opacity: props.isFocussed ? 1 : 0,
				}}
				initial={false}
				transition={props.isFocussed ? makeDelaySpring(0.05) : transitions.fastSpring}
                onTap={()=> {
                    reward4();
                    props.data.reaction = "🚀"; 
                    //props.setData(...props.data);
                    props.setFocussedPost(null);
                }}
			>
				<PostReactionEmoji>🚀</PostReactionEmoji>
			</PostReactionButton>

			<PostReactionButton
				animate={{
					backgroundColor: props.theme.attributionSurface,
					y: props.isFocussed ? -64 : -44,
					x: props.isFocussed ? 0 : -144,
					scale: props.isFocussed ? 1 : 0.5,
					opacity: props.isFocussed ? 1 : 0,
				}}
				initial={false}
				transition={props.isFocussed ? makeDelaySpring(0.11) : transitions.fastSpring}
                onTap={()=>{
                    props.setShowEmojiKeyboard(true);
                }}
			>
				<Icon name={"StickerEmojiAddOutline"} fill={props.theme.fillPrimary} style={{ margin: "auto" }} />
			</PostReactionButton>
		</Container>
	);
};
