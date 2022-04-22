export const transitions = {
	
	slowSpring: {
		default: {
			type: "spring",
			stiffness: 600,
			damping: 60,
		},
		opacity: {
			type: "tween",
			ease: "easeInOut",
			duration: 0.43,
		},
	},

    fastSpring: {
		default: {
			type: "spring",
			stiffness: 500,
			damping: 50,
		},
		opacity: {
			type: "tween",
			ease: "easeInOut",
			duration: 0.2,
		},
	},

    fastEase: {
		duration: 0.15,
		ease: [0.4, 0, 0.1, 1],
	},

	slowEase: {
		duration: 0.5,
		type: "tween",
	},

	springySpring: {
		default: {
			type: "spring",
			stiffness: 500,
			damping: 30,
		},
		opacity: {
			type: "tween",
			ease: "easeInOut",
			duration: 0.25,
		},
	},
};
