import React from "react";
import propTypes from "prop-types";

const List = (props) => {

	return (
		<li className="dropdown-item">
			{props.value}
			<button onClick={props.quit} type="button" className="btn float-end"><i className="fa-solid fa-trash-can"></i></button>
		</li>
	);
};

List.propTypes = {
	value: propTypes.any,
	quit: propTypes.any
};

export default List;