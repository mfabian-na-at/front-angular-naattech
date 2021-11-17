import { Component, Input, OnInit} from '@angular/core';

/* Importacipon de servicios */
import { NewsService } from 'src/app/data/network/noticias/news.service';

@Component({
  selector: 'app-activadas',
  templateUrl: './activadas.component.html',
  styleUrls: ['./activadas.component.scss']
})
export class ActivadasComponent implements OnInit {
  @Input() dataInput

  constructor(private newsApi: NewsService) { }

  ngOnInit(): void {
  }

  private getNewsList(){
    this.newsApi.getNewsListService().subscribe( (data: any)=>{
      try{
        console.log('Noticias: ', data);
      }catch{

      }
    });
  }

}
