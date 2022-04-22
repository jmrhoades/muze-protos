import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

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
    padding: 0 16px;
	
`;


export const NavBar = props => {
	return (
		<Container
		
		className={"navbar"}
		>
            <NavBarButton iconName="Users" theme={props.theme} />
            <NavBarButton iconName="Add" theme={props.theme} />
		</Container>
	);
};
