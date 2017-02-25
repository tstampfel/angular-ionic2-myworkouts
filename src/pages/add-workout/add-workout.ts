import { WorkoutsPage } from '../workouts/workouts';
import { WorkoutService } from '../../app/services/workout-service';
import { ResultFunc } from 'rxjs/observable/GenerateObservable';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the AddWorkout page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-workout',
  templateUrl: 'add-workout.html'
})

export class AddWorkoutPage {
  public title: String;
  public note: String;
  public type: String;
  public result: any;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private workoutService: WorkoutService) {


  }


  onSubmit() {
    console.log("This is in add workout")
    var workout = {
      title: this.title,
      note: this.note,
      type: this.type
    }
    this.workoutService.addWorkout(workout).subscribe(data => {
      this.result = data;
    });
    this.navCtrl.push(WorkoutsPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad AddWorkoutPage');
  }

}
