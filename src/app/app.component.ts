import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cajas-de-seguridad';

  modal:any;

  constructor() {}

  ngOnInit(): void {

    // Get the modal
    
    this.modal = document.getElementById("myModal");

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    } 
  }


  abrir(nombre:string, vencimiento:string){
    this.modal.style.display = "block";
    var name = document.getElementById("nombre");
    var vence = document.getElementById("vencimiento");
    name.textContent = "Alquilada por: "+nombre;
    vence.textContent = "Vence el día: "+vencimiento;
  }

  cerrar() {
    this.modal.style.display = "none";
  }

}


