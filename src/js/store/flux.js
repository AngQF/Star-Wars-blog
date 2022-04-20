const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			characters2: [],
			characters3: [],
			vehicles: [],
			planets: [],
			favorites: [],
			characterDetails: [],
			vehicleDetails: [],
			planetDetails: [],
		},
		

		actions: {
			getCharacters: async() =>{
				const response = await fetch("https://www.swapi.tech/api/people");
				const info = await response.json()
				setStore({characters: info.results})
			},
			getCharacters2 : async() =>{
				const response = await fetch("https://www.swapi.tech/api/people?page=2&limit=10");
				const info = await response.json()
				setStore({characters2: info.results})
			},
			getCharacters3 : async() =>{
				const response = await fetch("https://www.swapi.tech/api/people?page=3&limit=10");
				const info = await response.json()
				setStore({characters3: info.results})
			},
			getCharactersInfo : async(id) =>{
				const response = await fetch("https://www.swapi.tech/api/people/" + id);
				const info = await response.json()
				setStore({characterDetails: [info.result.properties]})
			},
			getVehicles: async() =>{
				const response = await fetch("https://www.swapi.tech/api/vehicles");
				const info = await response.json()
				setStore({vehicles: info.results})
			},
			getVehiclesInfo: async(id) =>{
				const response = await fetch("https://www.swapi.tech/api/vehicles/" + id);
				const info = await response.json()
				setStore({vehicleDetails: [info.result.properties]})
				
			},
			getPlanets: async() =>{
				const response = await fetch("https://www.swapi.tech/api/planets");
				const info = await response.json()
				setStore({planets: info.results})
			},
			getPlanetsInfo : async(id) =>{
				const response = await fetch("https://www.swapi.tech/api/planets/" + id);
				const info = await response.json()
				setStore({planetDetails: [info.result.properties]})
			},
			setFavorites: async(item) =>{
				const store = getStore()
				if(!store.favorites.includes(item))
				{setStore({favorites: [...store.favorites, item]})
				}else{
					//Eliminar usando un array vacío y un bucle for//
					// let remove = [];
					// for (let index = 0; index < store.favorites.length; index++) {
					// 	const favorite = store.favorites[index];
					// 	if(item != favorite){
					// 		remove.push(favorite)
					// 	}
					// 	setStore({favorites: remove})
					// }

					//Eliminar usando filter//
					setStore({favorites: store.favorites.filter((fav) => fav != item)})
				}
			}
		}
	};
};

export default getState;

// Página del primer botón para que muestre 10 personajes más (en total=20)
// https://www.swapi.tech/api/people?page=2&limit=10

// Página del segundo botón para que muestre 10 personajes más (en total 30)
// https://www.swapi.tech/api/people?page=3&limit=10