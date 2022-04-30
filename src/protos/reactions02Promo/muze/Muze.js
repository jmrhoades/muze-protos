import React, { useState } from "react";
import styled from "styled-components";
import { motion, useMotionValue, useTransform } from "framer-motion";

import { NavBar } from "../navbar/NavBar";
import { Home } from "../home/Home";
import { ModalDismiss } from "../controls/ModalDismiss";
import { BottomSheet } from "../controls/BottomSheet";
import { UserStickers } from "../home/UserStickers";

const Wrap = styled(motion.div)`
	position: relative;
	overflow: hidden;
	width: 100%;
	height: 100%;
`;

export const Muze = ({ data, user, theme, metrics, model, snd }) => {
	const [stickerSheetShowing, setStickerSheetShowing] = useState(false);
	const [activePostID, setActivePostID] = useState();

	const sheetYOffset = useMotionValue(400);
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
				setShowSheet={setStickerSheetShowing}
				showSheet={stickerSheetShowing}
				setActivePostID={setActivePostID}
				activePostID={activePostID}
				model={model}
				snd={snd}
			/>
			<NavBar theme={theme} user={user} data={data} />
			<ModalDismiss
				theme={theme}
				show={stickerSheetShowing}
				setShow={setStickerSheetShowing}
				modalOpacity={modalOpacity}
			/>
			<BottomSheet
				theme={theme}
				show={stickerSheetShowing}
				setShow={setStickerSheetShowing}
				sheetYOffset={sheetYOffset}
			>
				<UserStickers
					theme={theme}
					data={data}
					user={user}
					setShowSheet={setStickerSheetShowing}
					activePostID={activePostID}
					model={model}
					
				/>
			</BottomSheet>
		</Wrap>
	);
};
