import { WorkoutDetailsPage } from '../workout-details/workout-details';
import { WorkoutService } from '../../app/services/workout-service';
import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'workouts',
  templateUrl: 'workouts.html'
})
export class WorkoutsPage {
  workouts: any;
  constructor(public navCtrl: NavController, private workoutService: WorkoutService) {

  }

  ngOnInit() {
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
  }

ionViewWillEnter(){
    this.workoutService.getWorkouts().subscribe(workouts => {
      this.workouts = workouts;
    });
 
}



  workoutselected(event, workout) {
    this.navCtrl.push(WorkoutDetailsPage, {
      workout: workout
    });
  }
}
