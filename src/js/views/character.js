import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

export const Character = () => {
	const {store, actions} = useContext(Context);
	const params = useParams();
	

	useEffect(()=>{
		actions.getCharactersInfo(params.theid)
	},[])
	

	return (
		<div className="container ">
		{store.characterDetails.map((info) =>{
			return(
				<div key={params.theid} className="row">
					<div className="col-12 col-sm-6 text-center">
						<img  className="img-fluid rounded-3 mb-5" src={"https://starwars-visualguide.com/assets/img/characters/"+  params.theid +".jpg"} alt="Star Wars character" />
					</div>
					<div className="col-12 col-sm-6 text-center bg-gradient">	
						<h1 className="text-light mt-5" style={{fontFamily: "Square Peg", fontSize: "80px"}}>{info.name}</h1>
						<p className="text-light mr-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
					</div>
					<hr className="footer-divider bg-light"></hr>
					<footer className="footer mt-auto py-3 text-center text-light row bg-gradient">
						<h5 className="col fs-5"><b>HEIGHT</b> <p>{info.height}</p></h5>
						<h5 className="col fs-5"><b>MASS</b><p>{info.mass}</p></h5>
						<h5 className="col fs-5"><b>HAIR COLOR</b><p>{info.hair_color}</p></h5>
						<h5 className="col fs-5"><b>SKIN COLOR</b><p>{info.skin_color}</p></h5>
						<h5 className="col fs-5"><b>EYE COLOR</b><p>{info.eye_color}</p></h5>
						<h5 className="col fs-5"><b>BIRTH YEAR</b><p>{info.birth_year}</p></h5>
						<h5 className="col fs-5"><b>GENDER</b><p>{info.gender}</p></h5>
					</footer>
				</div>
			)}
		)}		
		</div>
	);
};


