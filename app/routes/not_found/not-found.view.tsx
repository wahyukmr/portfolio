import React from "react";
import { Link } from "react-router";

export default function NotFoundView(): React.JSX.Element {
	return (
		<>
			<h1>Page Not Found</h1>
			<p>The requested page could not be found.</p>

			<Link to="/" className="btn btn__secondary">
				home
			</Link>
		</>
	);
}
