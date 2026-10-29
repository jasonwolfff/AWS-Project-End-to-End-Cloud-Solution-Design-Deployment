// Plain JavaScript example
export function greet(name = "World") {
	return `Hello, ${name}!`;
}

// React example (uses React.createElement so this works in a .js file without JSX)
import React, { useState } from "react";

export function GreetingCard({ name = "World" }) {
	const [likes, setLikes] = useState(0);

	return React.createElement(
		"section",
		{ className: "greeting-card" },
		React.createElement("h1", null, greet(name)),
		React.createElement("p", null, `Likes: ${likes}`),
		React.createElement(
			"button",
			{ type: "button", onClick: () => setLikes((count) => count + 1) },
			"Like"
		)
	);
}
