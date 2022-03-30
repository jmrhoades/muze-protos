import React from "react";
import styled from "styled-components";

import { NavBarButton } from "./NavBarButton";

const Container = styled.div`
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
		<Container>
            <NavBarButton iconName="Users" theme={props.theme} />
            <NavBarButton iconName="Add" theme={props.theme} />
		</Container>
	);
};
