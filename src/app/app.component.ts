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
  }


  abrir(nombre:string, vencimiento:string){
    this.modal.style.display = "block";
    var name = document.getElementById("nombre");
    var vence = document.getElementById("vencimiento");
    name.textContent = nombre;
    vence.textContent = vencimiento;

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == this.modal) {
        this.modal.style.display = "none";
      }
    } 
  }

  cerrar() {
    this.modal.style.display = "none";
  }

}


