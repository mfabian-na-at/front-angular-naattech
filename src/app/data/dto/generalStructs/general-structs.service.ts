import { Injectable } from '@angular/core';

/* Models */
import { HeaderModel } from '../../models/local/equipos/InputsModels';

@Injectable({
  providedIn: 'root'
})
export class GeneralStructsService {

  constructor() { }

  public createStructheader(title: string, placeholder: string, 
    button: string, activeSearch: boolean, activeButton: boolean, 
    component: any): HeaderModel{
      return {
        TITLE: title, 
        TEXT_PLACEHOLDER: placeholder, 
        TEXT_ADD_BUTTON: button,
        FLAG_ACTIVE_BUTTON: activeButton,
        FLAG_ACTIVE_SEARCH: activeSearch, 
        COMPONENT_DIALOG: component
      };
  }

}