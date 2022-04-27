import React, {useState,useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";


export const Home = () => {
	const {store, actions} = useContext(Context);
	const [style1, setStyle1] = useState({ display: "none" });
	const [btn1, setBtn1] = useState({display: 'block'});
	const [style2, setStyle2] = useState({ display: "none" });
	const [btn2, setBtn2] = useState({display: 'none'});
	const [counter, setCounter] = useState(10);
	

	useEffect(()=>{
		actions.getCharacters()
		actions.getCharacters2()
		actions.getCharacters3()
		actions.getVehicles()
		actions.getPlanets()
	},[])

	return(
		<div className="container pb-5">
			<div id="CHARACTERS">
				<h3 className="text-white">{'('+ counter + ')' +'CHARACTERS'}<i className="fa-solid fa-user-secret"></i></h3>
				<div className="d-flex overflow-auto">
					{store.characters.map((character) => {
						return (
							<div className="card m-3 col-12 col-md-6 col-lg-3" key={character.uid}>
								<img src={"https://starwars-visualguide.com/assets/img/characters/"+character.uid+".jpg"} className="card-img-top img-fluid" alt={character.name}/>
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<Link to={"/character/" + character.uid} className="btn btn-light"><i className="fa-solid fa-angles-right"> Learn more</i></Link>
									<button onClick={()=> actions.setFavorites(character.name)} className="btn btn-outline-dark float-end"><i className="fa-solid fa-heart fa-md"></i></button>
								</div>
							</div>
						)}
					)}	
					<button className="btn btn-dark" onClick={(e)=>{setStyle1({ display: "block" }), setBtn1({display: "none"}), setBtn2({display: "block"}), setCounter(20)}} style={btn1}>More characters</button>
					{store.characters2.map((character) =>{
						return(
							<div className="card m-3 col-12 col-md-6 col-lg-3" key={character.uid} style={style1}>
								<img src={"https://starwars-visualguide.com/assets/img/characters/"+character.uid+".jpg"} className="card-img-top img-fluid" alt={character.name}/>
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<Link to={"/character/" + character.uid} className="btn btn-light"><i className="fa-solid fa-angles-right"> Learn more</i></Link>
									<button onClick={()=> actions.setFavorites(character.name)} className="btn btn-outline-dark float-end"><i className="fa-solid fa-heart fa-md"></i></button>
								</div>
							</div>
						)}
					)}
					<button className="btn btn-dark" onClick={(e)=>{setBtn2({ display: "none" }), setStyle2({display: "block"}), setCounter(30)}} style={btn2}>More characters</button>
					{store.characters3.map((character) =>{
						return(
							<div className="card m-3 col-12 col-md-6 col-lg-3" key={character.uid} style={style2}>
								<img src={"https://starwars-visualguide.com/assets/img/characters/"+character.uid+".jpg"} className="card-img-top img-fluid" alt={character.name}/>
								<div className="card-body">
									<h5 className="card-title">{character.name}</h5>
									<Link to={"/character/" + character.uid} className="btn btn-light"><i className="fa-solid fa-angles-right"> Learn more</i></Link>
									<button onClick={()=> actions.setFavorites(character.name)} className="btn btn-outline-dark float-end"><i className="fa-solid fa-heart fa-md"></i></button>
								</div>
							</div>
						)}
					)}
				</div>
			</div>	
			<div id="VEHICLES" className="my-5">
				<h3 className="text-white">VEHICLES <i className="fa-solid fa-jet-fighter"></i></h3>
				<div className="d-flex overflow-auto">
				{store.vehicles.map((vehicle) => {
					return (
						<div className="card m-3 col-12 col-md-6 col-lg-3" key={vehicle.uid}>
							<img src={"https://starwars-visualguide.com/assets/img/vehicles/"+vehicle.uid+".jpg"} className="card-img-top" alt={vehicle.name}/>
							<div className="card-body">
								<h5 className="card-title">{vehicle.name}</h5>
								<Link to={"/vehicle/" + vehicle.uid} className="btn btn-light"><i className="fa-solid fa-angles-right"> Learn more</i></Link>
								<button onClick={()=> actions.setFavorites(vehicle.name)} className="btn btn-outline-dark float-end"><i className="fa-solid fa-heart fa-md"></i></button>
							</div>
						</div>
					)}
				)}	
				</div>
			</div>	
			<div id="PLANETS">
				<h3 className="text-white">PLANETS <i className="fa-solid fa-earth-europe"></i></h3>
				<div className="d-flex overflow-auto">
				{store.planets.map((planet) => {
					return (
						<div className="card m-3 col-12 col-md-6 col-lg-3" key={planet.uid}>
							<img src={planet.uid == 1 ? "http://4.bp.blogspot.com/-IUO_O-bojLM/TWE3Iy01V4I/AAAAAAAAA_w/UaPdiVYWbgo/s1600/Star+Wars+-+Tattoine+09.jpg" : "https://starwars-visualguide.com/assets/img/planets/"+planet.uid+".jpg"} className="card-img-top" alt={planet.name}/>
							<div className="card-body">
								<h5 className="card-title">{planet.name}</h5>
								<Link to={"/planet/" + planet.uid} className="btn btn-light"><i className="fa-solid fa-angles-right"> Learn more</i></Link>
								<button onClick={()=> actions.setFavorites(planet.name)} className="btn btn-outline-dark float-end"><i className="fa-solid fa-heart fa-md"></i></button>
							</div>
						</div>
					)}
				)}
				</div>	
			</div>	
		</div>
	)
};

