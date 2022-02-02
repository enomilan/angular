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
  toggle = true
  

  
  display() {

      
  }
    
    
  increment() {

      if (this.counter % 3 === 0) 
          {
            this.toggle = !this.toggle; 
            this.greet = 'American'; }  
            
      else {
              this.toggle = true
              this.greet = ''
              }
         

      if (this.counter % 5 === 0) 
        { this.toggle = !this.toggle;
          this.greet = 'Medical' }
        

      if (this.counter % 3 === 0 && this.counter % 5 === 0) 
        { this.toggle = !this.toggle;
          this.greet = 'Opportunities'}
        
      

      if (this.counter === 100) this.counter = 0;

    	this.counter++;
    
  }

  
}
