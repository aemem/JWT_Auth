import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "/workspace/react-flask-hello/src/front/js/store/appContext.js";
import injectContext from "/workspace/react-flask-hello/src/front/js/store/appContext.js";

export const Navbar = () => {
	const { actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Home</span>
				</Link>
				{localStorage.getItem("token") ? <div>
					<Link to="/login">
						<button className="btn btn-danger" onClick={() => actions.logout()}>Log Out</button>
					</Link> 
				</div> : <div>
					<Link to="/login">
						<button className="btn btn-success">Log In</button>
					</Link>
					<Link to={"/signup"}>
						<button className="btn btn-primary">Sign Up</button>
					</Link>
				</div>
				}
			</div>
		</nav>
	);
};

