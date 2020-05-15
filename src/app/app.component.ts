import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'Client';

  serveAlert(){
    Swal.fire(
      'Good job!',
      'You clicked the button!',
      'success'
    );
  }
}
