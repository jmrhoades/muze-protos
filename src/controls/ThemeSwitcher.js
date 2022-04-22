import React from "react";
import { motion } from "framer-motion";
import styled from "styled-components";

import { Icon } from "../ds/Icon";
import { lightTheme, darkTheme } from "../ds/Colors";

const Wrap = styled(motion.button)`
	position: absolute;
	top: 0;
	left: 0;
	width: 64px;
	height: 64px;

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const ThemeSwitcher = props => {
	const onThemeToggleTap = (event, info) => {
		
        if (props.theme.name === "light") {
            props.setTheme(darkTheme)
        } else {
            props.setTheme(lightTheme)
        }

        console.log(props.theme);
	};

	return (
		<Wrap
			whileHover={{
				scale: 1.05,
				transition: { duration: 0.2 },
			}}
			whileTap={{ scale: 0.9 }}
			onTap={onThemeToggleTap}
		>
			<Icon name={"ThemeToggle"} fill={props.theme.fillPrimary} />
		</Wrap>
	);
};
