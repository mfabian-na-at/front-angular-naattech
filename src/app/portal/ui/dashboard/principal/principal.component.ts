import { Component, OnInit } from '@angular/core';

/* Constant and images */
import * as Images from '../../../utils/ImagesRoutes';
import * as TextES from '../../../utils/TextConstantsES'

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  //Images
  public logoNaatTech = Images.LOGO_NAAT_TECH;

  //Texts
  public menuTxt = TextES.MENU;

  constructor() { }

  ngOnInit(): void {
  }

}
