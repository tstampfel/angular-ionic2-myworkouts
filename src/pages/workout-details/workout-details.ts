import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutService } from '../../app/services/workout-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the WorkoutDetails page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'workout-details',
  templateUrl: 'workout-details.html'
})
export class WorkoutDetailsPage {
  public workout: any;
  public result:any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public workoutService : WorkoutService ) {

                this.workout = navParams.get('workout');
              }

deleteWorkout(id){
  this.workoutService.deleteWorkout(id).subscribe(
    data => {
      this.result = data;
    });
    this.navCtrl.push(WorkoutsPage);
}


  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkoutDetailsPage');
  }

}
