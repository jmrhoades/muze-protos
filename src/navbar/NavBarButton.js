import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Icon } from "../ds/Icon";


const Container = styled.div`

`;

const Asset = styled.div`

`;

const Background = styled.div`

`;

export const NavBarButton = props => {
	return (
		<Container>
            <Asset><Icon name={props.iconName} fill={props.theme.fillPrimary} /></Asset>
            <Background />
		</Container>
	);
};
