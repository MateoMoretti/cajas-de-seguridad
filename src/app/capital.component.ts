import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './capital.component.html',
  styleUrls: ['./app.component.css']
})
export class CapitalComponent {
  title = 'cajas-de-seguridad';

  modal:any;
 
  busquedaLetra = ['A', 'B', 'C', 'D']
  
  busquedaLetraNumero = ['A0','B0','C0','D0']

  tipo_modal = ["Alquilada por: ", "Alquilada por: ", "Disponible "]

  cajas = ["A01", "A02", "A03", "A04", "A05",
          "B01", "B02", "B03", "B04", "B05",
          "C01", "C02", "C03", "C04", "C05",
          "D01", "D02", "D03", "D04", "D05"]

  personas = ["Kyrie Irving", "Mateo Moretti", "Renato Moretti", "Nicanor Cellati", "Danilo Benitez",
            "Facundo Figliuolo", "Leo Messi", "Esteban Ballesteros", "Damian Lillard", "Magic Johnson",
          "Pedro Lopez", "Jeremy Lin", "Russell Westbrook", "Alex Caruso", "Nacho Bermudez",
          "Paul George", "Kawhi Leonard", "Anthony Davis", "Rafael Nadal", "Roger Federer"
          ]

  permitidas = ["Julius Randle", "Lonzo Ball", "Brandon Ingram", "Josh Hart", "JJ Redick",
              "Jimmy Buttler", "Tyler Herro", "Bam Adebayo", "Goran Dragic", "Terry Rozier", 
              "Miles Bridges", "Carmelo Anthony", "Jaylen Brown", "Jason Tatum", "Kemba Walker",
              "DeAndre Jordan", "Eric Bledsoe", "Brook Lopez", "Tacko Fall", "Eduardo Lopez"]

  fechas_inicio = ["01/06/2020", "01/07/2020", "01/08/2020", "01/09/2020", "01/10/2020", 
                  "10/06/2020", "12/07/2020", "11/08/2020", "05/09/2020", "22/10/2020",
                  "20/06/2020", "22/07/2020", "16/08/2020", "14/09/2020", "24/10/2020",
                  "27/06/2020", "28/07/2020", "25/08/2020", "19/09/2020", "16/10/2020" ]
                
  duraciones = ["12 meses", "8 meses", "4 meses", "2 meses", "8 meses", 
                "10 meses", "11 meses", "3 meses", "7 meses", "9 meses", 
                "12 meses", "6 meses", "4 meses", "6 meses", "12 meses",
                "8 meses", "12 meses", "9 meses", "5 meses", "7 meses"] 

  fechas_fin = ["01/06/2021", "01/03/2021", "01/12/2020", "01/11/2020", "01/06/2021", 
                "10/04/2021", "12/06/2021", "11/11/2020", "05/02/2021", "22/07/2021",
                "20/06/2021", "22/01/2021", "16/12/2020", "14/03/2021", "24/10/2021",
                "27/02/2021", "28/07/2021", "25/05/2021", "19/04/2021", "16/05/2021" ]


  dimensiones = ["60x60x80 cms", "70x70x70 cms", "80x80x40 cms", "90x90x60 cms", "50x90x70 cms", 
                "60x80x70 cms", "50x70x80 cms", "40x40x50 cms", "40x60x40 cms", "50x25x50cms",
                "90x60x60 cms", "40x70x70 cms", "35x80x50 cms", "30x90x60 cms", "50x90x50 cms", 
                "20x80x70 cms", "30x70x70 cms", "45x4560 cms", "120x60x80 cms", "90x65x80cms"]
                
  precios = ["$1000", "$900", "$500", "$600", "$700", 
            "$1200", "$750", "$700", "$1200", "$900", 
            "$1400", "$950", "$400", "$1600", "$650", 
            "$1600", "$500", "$500", "$1800", "$1300", ]

  estado_cuenta = ["Al día", "Con deuda","Al día", "Con deuda","Al día", 
                  "Al día", "Con deuda", "Al día", "Con deuda", "Con deuda",
                  "Al día", "Con deuda","Al día", "Con deuda","Al día", 
                  "Al día", "Con deuda", "Al día", "Con deuda", "Con deuda"]



  constructor(private router: Router) {}

  filtro = '' 

  ngOnInit(): void {
    console.log("Junin");

    // Get the modal
    
    this.modal = document.getElementById("myModal");    
  }


  filtroUpper():string{
    return this.filtro.toUpperCase(); 
  }



  abrir(tipo_modal:number, numero:number){



    this.modal.style.display = "block";

    var caja = document.getElementById("caja");
    var titular = document.getElementById("titular");
    var personas_permitidas = document.getElementById("permitidos");
    var inicio = document.getElementById("inicio");
    var duracion = document.getElementById("duracion");
    var vencimiento = document.getElementById("vencimiento");
    var dimensiones = document.getElementById("dimensiones");
    var precio = document.getElementById("precio");
    var estado_cuenta = document.getElementById("estado_cuenta");

    
    personas_permitidas.textContent = "";
    titular.textContent += "";
    inicio.textContent = "";
    duracion.textContent = "";
    vencimiento.textContent = "";
    vencimiento.textContent = "";
    estado_cuenta.textContent = "";

    //caja.textContent = this.cajas[numero];
    titular.textContent = "Caja "+this.cajas[numero]+". "+this.tipo_modal[tipo_modal];
    if(tipo_modal != 2){
      personas_permitidas.textContent = "Otras personas con acceso: "+this.permitidas[numero];
      titular.textContent += this.personas[numero];
      inicio.textContent = "Fecha de inicio: "+this.fechas_inicio[numero];
      duracion.textContent = "Duración del contrato: "+this.duraciones[numero];
      vencimiento.textContent = "Fecha de finalización: "+this.fechas_fin[numero];
      estado_cuenta.textContent = "Estado de cuenta: "+this.estado_cuenta[numero];
    }

    dimensiones.textContent = "Dimensiones: "+this.dimensiones[numero];
    precio.textContent = "Precio mensual: "+this.precios[numero];

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

  redirigir(ciudad:string){
    this.router.navigate([ciudad]);
  }

}


