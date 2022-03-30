import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { Viewport } from "./ios/iPhoneViewport";
import { NavBar } from "./navbar/NavBar";
import { ThemeSwitcher } from "./controls/ThemeSwitcher";
import { lightTheme } from "./ds/Colors";

const Wrap = styled(motion.div)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	position: relative;
	overflow: hidden;
`;


function App() {

  const [theme, setTheme] = useState({...lightTheme});

	return (
		<Wrap
      animate={{
        backgroundColor: theme.z0,
      }}
      initial={false}
    >
			<Viewport theme={theme}>
				<NavBar theme={theme} />
        
			</Viewport>
      <ThemeSwitcher theme={theme} setTheme={setTheme} />
		</Wrap>
	);
}

export default App;
