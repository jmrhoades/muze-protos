import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Wrap = styled(motion.div)`
	padding: 4em 8em;
	h1 {
		font-size: 2em;
		opacity: 0.5;
	}
	ul {
		font-size: 2em;
		list-style: none;
	}
	a {
		color: black;
	}
`;

export const App = props => {
	return (
		<Wrap>
			<h1>Muze Protos</h1>
			<nav>
				<ul>
					<li>
						<Link to="/reactions01">Reactions 1</Link>
					</li>
					<li>
						<Link to="/reactions02">Reactions 2</Link>
					</li>
					<li>
						<Link to="/reactions02Promo">Reactions 2 Promo</Link>
					</li>
				</ul>
			</nav>
		</Wrap>
	);
};
