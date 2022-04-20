import React, {useContext} from "react";
import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import { Context } from "../store/appContext";
import List from "./list";


export const Navbar = () => {
	const {store, actions} = useContext(Context);

	return (
		<div className="conatiner-fluid">
			<nav className="navbar mb-3 px-5">
			<div className="container">
				<Link to="/" className="nav-link">
					<span className="navbar-brand mb-0 h1 text-light">STAR WARS</span>
				</Link>
				<div className=" dropdown">
					<button type="button" className="btn btn-outline-light dropdown-toggle" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
						{'FAVORITES '+ '(' + store.favorites.length + ')'}
					</button>
					<ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
						{store.favorites.map((favorite, index)=>{
							return(
							    <List	
								key={index} 
								className="dropdown-item"
								value={favorite}
								quit={() => actions.setFavorites(favorite)}
								/>
							)
						})}
					</ul>
				</div>
			</div>	
			</nav>
		</div>		
	);
};


