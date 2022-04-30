import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Icon } from "../../../ds/Icon";

const Container = styled(motion.div)`
	position: relative;
	display: grid;
	backdrop-filter: blur(42px) saturate(1.2);
`;

export const NavBarButton = props => {
	const size = 48;

	return (
		<Container
			style={{
				width: size,
				height: size,
				borderRadius: size / 2,
			}}
			animate={{
				backgroundColor: props.theme.buttonBackgroundFill
			}}
			initial={false}
		>
			<Icon name={props.iconName} fill={props.theme.fillPrimary} style={{ margin: "auto" }} />
		</Container>
	);
};
