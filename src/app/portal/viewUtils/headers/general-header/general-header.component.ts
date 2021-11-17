import { Component, OnInit, Input, AbstractType } from '@angular/core';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

/* Import iterfaces */
import { HeaderModel } from 'src/app/data/models/local/equipos/InputsModels';

import { WORK_TEAM } from 'src/app/portal/utils/TextConstantsES';

@Component({
  selector: 'app-general-header',
  templateUrl: './general-header.component.html',
  styleUrls: ['./general-header.component.scss']
})
export class GeneralHeaderComponent implements OnInit {

  @Input() dataInput: HeaderModel;

  //Text
  public searchLabel: string;
  public searchButtonLabel: string;
  public txtTitle: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  //Flags
  public flagButton: boolean;
  public flagSearch: boolean

  constructor(private formBuilder: FormBuilder, private dialogController: MatDialog) {
      this.searchGroupForm = this.formBuilder.group({
        searchInput: ['', Validators.required]
      });
    
      this.searchInput = this.searchGroupForm.controls.searchInput;
    }

  ngOnInit(): void {
    this.searchLabel = this.dataInput.TEXT_PLACEHOLDER;
    this.searchButtonLabel = this.dataInput.TEXT_ADD_BUTTON;
    this.txtTitle = this.dataInput.TITLE;

    this.flagButton = this.dataInput.FLAG_ACTIVE_BUTTON;
    this.flagSearch = this.dataInput.FLAG_ACTIVE_SEARCH;

    //console.log('Texto recibido: ', this.title.TITLE);
  }

  public openDialog(){
    const dialog = this.dialogController.open(this.dataInput.COMPONENT_DIALOG, {
      disableClose: true, 
      width: '635px',
    });
  }

}
