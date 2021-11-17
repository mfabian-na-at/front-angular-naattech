import { Component, OnInit } from '@angular/core';


/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';

/* Importacion de constantes */
import * as TextES from '../../../utils/TextConstantsES';

/* Importacion de interfaces */
import { ProjectDetail } from '../../../../data/models/response/projects/Projects';

@Component({
  selector: 'app-detalles-proyecto',
  templateUrl: './detalles-proyecto.component.html',
  styleUrls: ['./detalles-proyecto.component.scss']
})
export class DetallesProyectoComponent implements OnInit {

// Textos
public textEs = TextES.PROJECTS.SUBMENU;
private textLabel = TextES.INPUTS;
public searchLabel: string;

// Form
public searchGroupForm: FormGroup;
public searchInput: AbstractControl;

  constructor( private formBuilder: FormBuilder,  ) { 

    this.searchLabel = this.textLabel.SEARCH;

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
  }

  public searchValue(){
    console.log("Contenido del controlador del input: ", this.searchInput);
  }

}
