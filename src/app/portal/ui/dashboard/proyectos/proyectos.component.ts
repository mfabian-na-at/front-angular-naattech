import { Component, OnInit, ViewChild } from '@angular/core';

/* Importaciones para consummo de servicio */
import { HttpParams } from '@angular/common/http';

/* Importaciones de formulario */
import { Validators, FormBuilder, FormGroup, AbstractControl} from '@angular/forms';

/* Importacion de servicios */
import { ProjectListServiceService } from 'src/app/data/network/proyectos/project-list-service.service';

/* Importacion de interfaces */
import { ProjectList, ProjectDetail } from '../../../../data/models/response/projects/Projects';
import { UpdateProjectDetail } from 'src/app/data/models/request/projects/ProjectsRequest';

/* Importacion de constantes */
import * as TextES from '../../../utils/TextConstantsES';
import * as AppConst from '../../../utils/ConstantsApp';
import { Subscriber } from 'rxjs';

/* Dialogs */
import { DialogAddProjectComponent } from 'src/app/portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';

/* Angular Material */
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  //Listas para la tabla
  public projectList: ProjectList[];
  public headersList: string[];

  //Textos
  public textEs = TextES.PROJECTS;
  public buttonsText = TextES.BUTTONS;
  public btnAccion: string;
  private textStatus = TextES.STATUS;
  private textLabel = TextES.INPUTS;
  public searchLabel: string;

  // Form
  public searchGroupForm: FormGroup;
  public searchInput: AbstractControl;

  // Table
  public lengthDataTable: number;
  private pageTable = 0;
  private pageSize = 0;

  constructor(private projectService: ProjectListServiceService, 
              private formBuilder: FormBuilder, 
              private dialogController: MatDialog,) { 
    this.headersList = this.textEs.TABLE_HEADERS;
    this.btnAccion = this.buttonsText.ACTIONS_INACTIVE;
    this.searchLabel = this.textLabel.SEARCH + ' ' + this.textLabel.PROJECT;

    this.searchGroupForm = this.formBuilder.group({
      searchInput: ['', Validators.required]
    });

    this.searchInput = this.searchGroupForm.controls.searchInput;
  }

  ngOnInit(): void {
    //this.paginator._intl.itemsPerPageLabel = 'Proyectos por pagina';

    this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
  }

  public changePageTable( event: any ) {
    this.pageTable = event.pageIndex;
    this.pageTable = event.page
    this.projectList = [];
    this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
  }

  private getProjectList(clientID: string, page: number){
    const paramsRequest = new HttpParams()
                          .set('page', page.toString())
                          .set('size', '5');

    this.projectService.getListProjects(clientID, paramsRequest).subscribe( (data)=> {
      try{
        this.lengthDataTable = parseInt(data.headers.get('Total-Elements'), 10);

        this.projectList = (data.body as ProjectList[]);
        
        this.projectList.forEach((item: ProjectList, position: number, array: ProjectList[]) => {
          this.getProjectDetail(clientID, this.projectList[position].id, position);
        });
      }catch (err){

      }
    }, errorResponse => {
      console.log('Error en la respuesta', errorResponse);
    } );

  }

  private getProjectDetail(clientID: string, id: string, position: number){
    this.projectService.getProjectDetail(clientID,id).subscribe((data: ProjectDetail) => {
      try{
        this.projectList[position].detail = data;
        this.projectList[position].enabled = data.enabled;

        if( data.enabled ){
          this.projectList[position].status = this.textStatus.ACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_INACTIVE;
        }else{
          this.projectList[position].status = this.textStatus.INACTIVE;
          this.projectList[position].action = this.buttonsText.ACTIONS_ACTIVE;
        }
      }catch(err){

      }
      }, errorResponse => {
        console.log('Error en la respuesta', errorResponse);
      } );
  }

  public changeStatusColor(status: boolean){
    if( status ){
      return{
        statusActive: true
      };
    }else{
      return{
        statusInactive: true
      };
    }
  }

  public changeStatus(item: ProjectList){
    const bodyService: UpdateProjectDetail = {
        key: item.key,
        name: item.name,
        description: item.description,
        enabled: !item.enabled
    };
    
    this.projectService.putProjectDetail(AppConst.CLIENT_ID, item.id, bodyService).subscribe(
      (data: ProjectDetail) => {
          this.getProjectList(AppConst.CLIENT_ID, this.pageTable);
      });
  }

  public openDialog() {

    const openDialog = this.dialogController.open( DialogAddProjectComponent, {
      disableClose: true,
      width: '635px',
      data: ['Hola', 'Adios', 'Bye']
    });
    
    openDialog.afterClosed().subscribe( (result: ProjectDetail[]) => { 
      console.log(result);
      this.getProjectList('fe3f7dbf-7515-45c2-9d31-f8a7658cdb16', this.pageTable);
    });
  }

}
