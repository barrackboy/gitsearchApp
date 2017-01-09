import {Injectable} from '@angular/core';
import {Http,Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username: string;
    private client_id='9aa1c1e15cafadfe2bc5';
    private client_secret='c66efe2fc606a3f42cab50b9bc5cd745f726c969';
    
    constructor(private _http:Http){
        console.log('Github Service Ready...');
        //this.username='barrackboy'
    }
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret'+this.client_secret)
        .map(res=>res.json());
    }
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret'+this.client_secret)
        .map(res=>res.json());
    }
    updateUser(username:string){
         this.username=username;
    }
}