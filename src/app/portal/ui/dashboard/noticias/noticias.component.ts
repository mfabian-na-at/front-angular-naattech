import { Component, OnInit } from '@angular/core';

/* Importación de constantes */
import * as TextES from '../../../utils/TextConstantsES';
import * as ConstantsApp from '../../../utils/ConstantsApp';

/* Importación de interfaces */
import { HeaderModel } from 'src/app/data/models/local/equipos/InputsModels';

import { GeneralStructsService } from 'src/app/data/dto/generalStructs/general-structs.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.scss']
})
export class NoticiasComponent implements OnInit {

  //Texts
  public textES = TextES.NEWS;
  private txtPlaceholder = TextES.INPUTS;
  private txtButton = TextES.BUTTONS;
  public dataToSend: HeaderModel;
  public plus = ConstantsApp.PLUS;
  public space = ConstantsApp.SPACE;

  constructor(private dto: GeneralStructsService) { }

  ngOnInit(): void {
    this.dataToSend = this.dto.createStructheader(
      this.textES.TITLE, this.txtPlaceholder.SEARCH + this.space + this.txtButton.ADD_NEWS, 
      this.plus + this.space + this.txtButton.ADD + this.space + this.txtButton.ADD_NEWS, true, true, ''
    );
  }
}
