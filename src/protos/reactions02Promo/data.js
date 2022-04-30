export const testDataA = {
	users: [
		{
			id: "user_a",
			name: "jmrhoades",
			role: "sender",
			friends: ["user_b"],
			profileBackgroundColor: "#DCAEFF",
			profileInitials: "J",
			displayInProto: true,
		},
		{
			id: "user_b",
			name: "Fenner 🐪",
			role: "receiver",
			friends: ["user_a"],
			profileBackgroundColor: "#A1D0EB",
			profileInitials: "F",
			displayInProto: false,
		},
	],

	posts: [
		{
			id: "post_b_7",
			created_by: "user_b",
			create_at_relative: "4hr",
			image: {
				src: "/images/canvas-layer-11.jpg",
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
			id: "post_b_1",
			created_by: "user_b",
			create_at_relative: "8hr",
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
			id: "reaction_a_11",
			created_by: "user_a",
			sticker_id: "sticker_b_5",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 1,
		},
		{
			id: "reaction_a_12",
			created_by: "user_a",
			sticker_id: "sticker_a_2",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 2,
		},
		{
			id: "reaction_a_13",
			created_by: "user_a",
			sticker_id: "sticker_a_3",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 3,
		},
		{
			id: "reaction_a_14",
			created_by: "user_a",
			sticker_id: "sticker_a_7",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 4,
		},
		{
			id: "reaction_a_15",
			created_by: "user_a",
			sticker_id: "sticker_a_5",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 5,
		},
		{
			id: "reaction_a_16",
			created_by: "user_a",
			sticker_id: "sticker_a_6",
			create_at_relative: "4hr",
			post_id: "post_b_7",
			order: 6,
		},


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
			src: "/stickers/IMG_1571.png",
		},
		{
			id: "sticker_a_2",
			created_by: "user_a",
			src: "/stickers/IMG_1572.png",
		},
		{
			id: "sticker_a_3",
			created_by: "user_a",
			src: "/stickers/IMG_1573.png",
		},
		{
			id: "sticker_a_4",
			created_by: "user_a",
			src: "/stickers/IMG_1574.png",
		},
		{
			id: "sticker_a_5",
			created_by: "user_a",
			src: "/stickers/IMG_1575.png",
		},
		{
			id: "sticker_a_6",
			created_by: "user_a",
			src: "/stickers/IMG_1576.png",
		},
		{
			id: "sticker_a_7",
			created_by: "user_a",
			src: "/stickers/IMG_1577.png",
		},
		{
			id: "sticker_b_1",
			created_by: "user_b",
			src: "/stickers/IMG_1580.png",
		},
		{
			id: "sticker_b_2",
			created_by: "user_b",
			src: "/stickers/IMG_1584.png",
		},
		{
			id: "sticker_b_3",
			created_by: "user_b",
			src: "/stickers/IMG_1586.png",
		},
		{
			id: "sticker_b_4",
			created_by: "user_b",
			src: "/stickers/sticker-04.png",
		},
		{
			id: "sticker_b_5",
			created_by: "user_b",
			src: "/stickers/sticker-01.png",
		},
	],
};
