import React, { useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { NavBar } from "../navbar/NavBar";
import { Home } from "../home/Home";
import { ModalDismiss } from "../controls/ModalDismiss";
import { BottomSheet } from "../controls/BottomSheet";
import { ReactionStickers } from "../home/ReactionStickers";

const Wrap = styled(motion.div)`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

export const Muze = ({ data, user, theme, metrics }) => {
	const [reactionSheetShowing, setReactionSheetShowing] = useState(true);

	const sheetYOffset = useMotionValue(0);
	const modalOpacity = useTransform(sheetYOffset, [0, 400], [1, 0]);
	return (
		<Wrap
			animate={{
				backgroundColor: theme.z0,
			}}
			initial={false}
		>
			<Home
				user={user}
				data={data}
				metrics={metrics}
				theme={theme}
				setShowSheet={setReactionSheetShowing}
				showSheet={reactionSheetShowing}
			/>
			<NavBar theme={theme} user={user} data={data} />
			<ModalDismiss
				theme={theme}
				show={reactionSheetShowing}
				setShow={setReactionSheetShowing}
				modalOpacity={modalOpacity}
			/>
			<BottomSheet
				theme={theme}
				show={reactionSheetShowing}
				setShow={setReactionSheetShowing}
				sheetYOffset={sheetYOffset}
			>
				<ReactionStickers theme={theme} data={data} user={user} />
			</BottomSheet>
		</Wrap>
	);
};
