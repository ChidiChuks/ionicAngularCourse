import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  text = 'Default starting text'

  onChangeText() {
    this.text = 'Changed!';
  }

  constructor(public navCtrl: NavController) {

  }

}
