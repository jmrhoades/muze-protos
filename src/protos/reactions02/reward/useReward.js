import { useState } from "react";
import { stickers } from "./Stickers";
import { getContainerById } from "./helpers";

export const useReward = (id, type, config) => {
	const [isAnimating, setIsAnimating] = useState(false);

	const internalAnimatingCallback = () => {
		setIsAnimating(false);
	};

	let reward;
	switch (type) {
		case "stickers": {
			reward = (id, config) => {
				const foundContainer = getContainerById(id);
				if (!foundContainer) return;
				setIsAnimating(true);
				stickers(foundContainer, internalAnimatingCallback, config);
			};
			break;
		}
		default: {
			reward = () => console.error(`${type} is not a valid react-rewards type.`);
		}
	}
	return { reward, isAnimating };
};

export const reward = (id, config) => {
	const foundContainer = getContainerById(id);
	if (!foundContainer) return;
	stickers(foundContainer, config);
};
