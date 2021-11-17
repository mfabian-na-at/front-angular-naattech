import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './portal/ui/access/login/login.component';
import { PrincipalComponent } from './portal/ui/dashboard/principal/principal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* Coneciones a inernet */
import { HttpClientModule} from '@angular/common/http';

/* Angular Material */
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { ProyectosComponent } from './portal/ui/dashboard/proyectos/proyectos.component';
import { ActividadesComponent } from './portal/ui/dashboard/actividades/actividades.component';
import { ClientesComponent } from './portal/ui/dashboard/clientes/clientes.component';
import { EquiposComponent } from './portal/ui/dashboard/equipos/equipos.component';
import { NoticiasComponent } from './portal/ui/dashboard/noticias/noticias.component';
import { NotificacionesComponent } from './portal/ui/dashboard/notificaciones/notificaciones.component';
import { UsuariosComponent } from './portal/ui/dashboard/usuarios/usuarios.component';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogAddProjectComponent } from './portal/viewUtils/dialog/dialog-add-project/dialog-add-project.component';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';


/* Importacion de elementos para Form */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetallesProyectoComponent } from './portal/ui/dashboard/detalles-proyecto/detalles-proyecto.component';
import { GeneralTableComponent } from './portal/viewUtils/table/general-table/general-table.component';
import { SimpleTableComponent } from './portal/viewUtils/table/simple-table/simple-table.component';
import { GeneralHeaderComponent } from './portal/viewUtils/headers/general-header/general-header.component';
import { DialogAddTeamComponent } from './portal/viewUtils/dialog/dialog-add-team/dialog-add-team.component';

//
import { MatTabsModule } from '@angular/material/tabs';
import { ActivadasComponent } from './portal/ui/dashboard/noticias/activadas/activadas.component';
import { BorradoresComponent } from './portal/ui/dashboard/noticias/borradores/borradores.component';
import { SuspendidasComponent } from './portal/ui/dashboard/noticias/suspendidas/suspendidas.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    ProyectosComponent,
    ActividadesComponent,
    ClientesComponent,
    EquiposComponent,
    NoticiasComponent,
    NotificacionesComponent,
    UsuariosComponent,
    DetallesProyectoComponent,
    DialogAddProjectComponent,
    GeneralTableComponent,
    SimpleTableComponent,
    GeneralHeaderComponent,
    DialogAddTeamComponent,
    ActivadasComponent,
    BorradoresComponent,
    SuspendidasComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatSelectModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatTabsModule
  ],
  entryComponents:[
    DialogAddProjectComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
