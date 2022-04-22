import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { transitions } from "../../../ds/Transitions";
import { NavBarButton } from "./NavBarButton";

const Container = styled(motion.div)`
    position: absolute;
    top: 48px;
    left: 0;
	width: 100%;
	height: 48px;
    display: flex;
	align-items: center;
	justify-content: space-between;
    padding: 0 24px;
`;


export const NavBar = props => {
	return (
		<Container
		
		animate={{
			opacity: props.focussedPost === null ? 1 : 0,
		}}
		transition={props.focussedPost === null ? transitions.slowEase :  transitions.fastEase }
		initial={false}
		>
            <NavBarButton iconName="Users" theme={props.theme} />
            <NavBarButton iconName="Add" theme={props.theme} />
		</Container>
	);
};
