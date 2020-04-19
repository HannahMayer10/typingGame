import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomSentence = lorem.sentence();
  input = "";

  onChange(input: string) {
    this.input = input;
  }
  compare(random: string, input: string) {
    if(!input){
      return 'pending'      
    }
    return random === input ? 'correct' : 'incorrect'
  }
}
