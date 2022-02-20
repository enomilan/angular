import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang';
  counter = 0
  greet = ''
  toggle = true
  
  // amVal = 2
  // medVal = 4
  // opVal = 14
  
     
    
  increment() {

    if (this.counter  === this.amVal) 
          { 
            this.amVal += 3;
            this.toggle = !this.toggle; 
            this.greet = 'Interista'; }  
            
      else {
              this.toggle = true
              this.greet = ''
              }
         

      if (this.counter === this.medVal)

        { this.medVal += 5;
          this.toggle = !this.toggle;
          this.greet = 'Vaffanculo' }
        

      if (this.counter === this.opVal) 
        { this.opVal += 15;
          this.toggle = !this.toggle;
          this.greet = 'Opportunities'}   

     if (this.counter === 100) 
         {this.counter = 0;
          this.amVal = 2;
          this.medVal = 4;
          this.opVal = 14; } 
          
          
      //Modulo solution
          
      // if (this.counter % 3 === 0) 
      //     {
      //       this.toggle = !this.toggle; 
      //       this.greet = 'Forza'; }  
            
      // else {
      //         this.toggle = true
      //         this.greet = ''
      //         }
         

      // if (this.counter % 5 === 0) 
      //   { this.toggle = !this.toggle;
      //     this.greet = 'Milan' }
        

      // if (this.counter % 3 === 0 && this.counter % 5 === 0) 
      //   { this.toggle = !this.toggle;
      //     this.greet = 'Campione'}
        
      

      

    	this.counter++;
    
  }

  
}
