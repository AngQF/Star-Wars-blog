import React, { useEffect, useContext } from "react";
import { Context } from "../store/appContext";
import {useParams} from "react-router-dom";

export const Vehicle = () => {
	const {store, actions} = useContext(Context);
	const params = useParams();

	useEffect(()=>{
		actions.getVehiclesInfo(params.theid)
	},[])

	return (
		<div className="container ">
		{store.vehicleDetails.map((info) =>{
			return(
				<div key={params.theid} className="row">
					<div className="col-12 col-sm-6 text-center">
						<img  className="img-fluid rounded-3 mb-5" src={"https://starwars-visualguide.com/assets/img/vehicles/"+ params.theid +".jpg"} alt="Star Wars character" />
					</div>
					<div className="col-12 col-sm-6 text-center bg-gradient">	
						<h1 className="text-light mt-5" style={{fontFamily: "Square Peg", fontSize: "80px"}}>{info.name}</h1>
						<p className="text-light mr-5">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
					</div>
					<hr className="footer-divider bg-light"></hr>
					<footer className="footer mt-auto py-3 text-center text-light row bg-gradient">
						<h5 className="col fs-5"><b>MODEL</b> <p>{info.model}</p></h5>
						<h5 className="col fs-5"><b>CLASS</b><p>{info.vehicle_class}</p></h5>
						<h5 className="col fs-5"><b>MANUFACTURER</b><p>{info.manufacturer}</p></h5>
						<h5 className="col fs-5"><b>COST IN CREDITS</b><p>{info.cost_in_credits}</p></h5>
						<h5 className="col fs-5"><b>LENGTH</b><p>{info.length}</p></h5>
						<h5 className="col fs-5"><b>CREW</b><p>{info.crew}</p></h5>
						<h5 className="col fs-5"><b>PASSENGERS</b><p>{info.passengers}</p></h5>
                        <h5 className="col fs-5"><b>MAX ATMOSPHERING SPEED</b><p>{info.max_atmosphering_speed}</p></h5>
                        <h5 className="col fs-5"><b>CARGO CAPACITY</b><p>{info.cargo_capacity}</p></h5>
                        <h5 className="col fs-5"><b>CONSUMABLES</b><p>{info.consumables}</p></h5>
					</footer>
				</div>
			)}
		)}		
		</div>
	);
};