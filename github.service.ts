import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()

export class GithubService {
	client_id:string;
	client_secret:string;

	constructor(private http:Http) {		
		this.client_id = "ddfa83d0e7dd57eb1b49";
		this.client_secret = "ddfcaa0ebda1951a223146a72818efefa43945e3";
	}

	getUserInfo(username) {
		console.log("https://api.github.com/users/"+username+"?client_id="+this.client_id+"&client_secret="+this.client_secret);

		return this.http.get("https://api.github.com/users/"+username+"?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res => res.json());
	}
	getUserRepo(username){
		console.log("https://api.github.com/users/"+username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret);

		return this.http.get("https://api.github.com/users/"+username+"/repos?client_id="+this.client_id+"&client_secret="+this.client_secret).map(res=>res.json());
	}
} 