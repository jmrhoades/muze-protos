export const testDataA = {
	users: [
		{
			id: "user_a",
			name: "jmrhoades",
			role: "sender",
			friends: ["user_b"],
			profileBackgroundColor: "#DCAEFF",
			profileInitials: "J",
		},
		{
			id: "user_b",
			name: "Fenner 🐪",
			role: "receiver",
			friends: ["user_a"],
			profileBackgroundColor: "#A1D0EB",
			profileInitials: "F",
		},
	],

	posts: [
		{
			id: "post_b_1",
			created_by: "user_b",
			create_at_relative: "4hr",
			image: {
				src: "/images/canvas-layer-10.png",
			},
		},
		{
			id: "post_a_1",
			created_by: "user_a",
			create_at_relative: "4hr",
			image: {
				src: "/images/canvas-layer-01.png",
			},
		},
		{
			id: "post_b_2",
			created_by: "user_b",
			create_at_relative: "20hr",
			image: {
				src: "/images/canvas-layer-05.png",
			},
		},
		{
			id: "post_a_2",
			created_by: "user_a",
			create_at_relative: "4hr",
			image: {
				src: "/images/canvas-layer-02.png",
			},
		},

		{
			id: "post_b_3",
			created_by: "user_b",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-03.png",
			},
		},
		{
			id: "post_a_3",
			created_by: "user_a",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-06.png",
			},
		},
		{
			id: "post_b_4",
			created_by: "user_b",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-07.png",
			},
		},
		{
			id: "post_a_4",
			created_by: "user_a",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-09.png",
			},
		},
		{
			id: "post_b_5",
			created_by: "user_b",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-08.png",
			},
		},
		{
			id: "post_b_6",
			created_by: "user_b",
			create_at_relative: "1d",
			image: {
				src: "/images/canvas-layer-04.png",
			},
		},
	],
	reactions: [
		{
			id: "reaction_a_1",
			created_by: "user_a",
			sticker_id: "sticker_b_4",
			create_at_relative: "4hr",
			post_id: "post_b_1",
		},
		
		{
			id: "reaction_a_3",
			created_by: "user_a",
			sticker_id: "sticker_b_1",
			create_at_relative: "4hr",
			post_id: "post_b_1",
		},
		{
			id: "reaction_a_4",
			created_by: "user_a",
			sticker_id: "sticker_b_2",
			create_at_relative: "4hr",
			post_id: "post_b_1",
		},
		{
			id: "reaction_a_5",
			created_by: "user_a",
			sticker_id: "sticker_b_3",
			create_at_relative: "4hr",
			post_id: "post_b_1",
		},
		{
			id: "reaction_b_1",
			created_by: "user_b",
			sticker_id: "sticker_b_1",
			create_at_relative: "4hr",
			post_id: "post_a_1",
		},
		{
			id: "reaction_b_2",
			created_by: "user_b",
			sticker_id: "sticker_b_2",
			create_at_relative: "4hr",
			post_id: "post_a_1",
		},
	],
	stickers: [
		{
			id: "sticker_a_1",
			created_by: "user_a",
			src: "/stickers/sticker-06.png",
		},
		{
			id: "sticker_a_2",
			created_by: "user_a",
			src: "/stickers/sticker-07.png",
		},
		{
			id: "sticker_a_3",
			created_by: "user_a",
			src: "/stickers/sticker-08.png",
		},
		{
			id: "sticker_a_4",
			created_by: "user_a",
			src: "/stickers/sticker-09.png",
		},
		{
			id: "sticker_a_5",
			created_by: "user_a",
			src: "/stickers/sticker-10.png",
		},
		{
			id: "sticker_a_6",
			created_by: "user_a",
			src: "/stickers/sticker-11.png",
		},
		{
			id: "sticker_a_7",
			created_by: "user_a",
			src: "/stickers/sticker-12.png",
		},
		{
			id: "sticker_b_1",
			created_by: "user_b",
			src: "/stickers/sticker-01.png",
		},
		{
			id: "sticker_b_2",
			created_by: "user_b",
			src: "/stickers/sticker-02.png",
		},
		{
			id: "sticker_b_3",
			created_by: "user_b",
			src: "/stickers/sticker-03.png",
		},
		{
			id: "sticker_b_4",
			created_by: "user_b",
			src: "/stickers/sticker-04.png",
		},
		{
			id: "sticker_b_5",
			created_by: "user_b",
			src: "/stickers/sticker-05.png",
		},
	],
};
