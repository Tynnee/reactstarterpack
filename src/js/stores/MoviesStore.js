import {EventEmitter } from "events";

class MoviesStore extends EventEmitter {
	constructor() {
	super();
	this.movies = [
		{"title":"A new hope","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":1,},
		{"title":"Empire Strikes","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":2},
		{"title":"Return of the Jedi","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":3},
		{"title":"Attack to Clones","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":4},
		{"title":"The Force Awekens","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":5},
		{"title":"Fight Club","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":6},
		{"title":"Ex Machine","release_date":"Yayın Tarihi","producer":"Yapımcı","director":"Yönetmen Adı","opening_crawl":"asd","episode_id":7},
	];
	}

	getMovies() {
		return this.movies;
	}
}



const moviesStore = new MoviesStore();

export default MoviesStore;