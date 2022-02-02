import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  counter = 1
  greet = ''
  display = 'true'
  

  
  true() {



  }
    
    
  increment() {

      if (this.counter % 3 == 0) this.greet = 'American'  
            else this.greet = ''
         

      if (this.counter % 5 === 0) this.greet = 'Medical'
        

      if (this.counter % 3 === 0 && this.counter % 5 === 0) this.greet = 'Opportunities'
        
      

      if (this.counter === 100) this.counter = 0;

    	this.counter++;
    
  }

  
}
