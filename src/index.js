import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import { App } from "./App";
import { Reactions01 } from "./protos/reactions01/Reactions01";
import { Reactions02 } from "./protos/reactions02/Reactions02";
import { Reactions02Promo } from "./protos/reactions02Promo/Reactions02Promo";

render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="reactions01" element={<Reactions01 />} />
				<Route path="reactions02" element={<Reactions02 />} />
				<Route path="reactions02Promo" element={<Reactions02Promo />} />
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
