import { Component, OnInit } from '@angular/core';

/* Importación de constantes */
import * as TextES from '../../../utils/TextConstantsES';
import * as ConstantsApp from '../../../utils/ConstantsApp';

/* Importación de interfaces */
import { HeaderModel } from 'src/app/data/models/local/equipos/InputsModels';
import { DialogAddTeamComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';


@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  //Texts
  public textES = TextES.ACTIVITIES;
  private txtPlaceholder = TextES.INPUTS;
  private txtButton = TextES.BUTTONS;
  public dataToSend: HeaderModel;
  public plus = ConstantsApp.PLUS;
  public space = ConstantsApp.SPACE;

  constructor() { }

  ngOnInit(): void {
    this.dataToSend = {
      TITLE: this.textES.TITLE, 
      TEXT_PLACEHOLDER: this.txtPlaceholder.SEARCH, 
      TEXT_ADD_BUTTON: this.plus + this.space + this.txtButton.ADD,
      FLAG_ACTIVE_BUTTON: false,
      FLAG_ACTIVE_SEARCH: true, 
      COMPONENT_DIALOG: ''
    };
  }

}
