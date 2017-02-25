import { Http, Headers, RequestOptions } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs';


@Injectable()
export class WorkoutService{
       http:any;
       apiKey:String;
       workoutsUrlGet:String;
       workoutsUrlPost:String;

       constructor(http:Http){
            this.http = http;
            this.apiKey = 'DdQWCVTP7PZeiRxFn8zpTqDbX7ma1FGg';
            this.workoutsUrlGet = 'http://api.mlab.com/api/1/databases/myworkouts_tomoapp/collections/workouts';
           this.workoutsUrlPost = 'https://api.mlab.com/api/1/databases/myworkouts_tomoapp/collections/workouts';
       } 

       getWorkouts(){
           return this.http.get(this.workoutsUrlGet+'?apiKey=' + this.apiKey)
           .map(res => res.json());
       }

       addWorkout(workout){
        var headers = new Headers();
        headers.append('Content-Type', 'application/json');
        return this.http.post(this.workoutsUrlPost+ '?apiKey='+this.apiKey, 
        JSON.stringify(workout),
        {headers:headers})
        .map(res => res.json())
       }

       deleteWorkout(id){
            return this.http.delete(this.workoutsUrlPost+ '/' + id + '?apiKey=' + this.apiKey)
            .map(res => res.json());
       }

}
