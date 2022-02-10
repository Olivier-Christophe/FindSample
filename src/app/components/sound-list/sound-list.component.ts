import { Component, OnInit } from '@angular/core';
import { SoundDetailsModel } from 'src/app/models/sound-details.model';
import { SoundModel } from 'src/app/models/sound.model';
import { SoundServicesService } from 'src/app/Services/sound-service.service';

@Component({
  selector: 'app-sound-list',
  templateUrl: './sound-list.component.html',
  styleUrls: ['./sound-list.component.scss']
})
export class SoundListComponent implements OnInit {

  constructor(private _soundService:SoundServicesService) { }

  liste!:SoundModel;
  details!: SoundDetailsModel;
  toUrl:string="";
  search!: string;
  result!:number;
  isLoading = false;

  ngOnInit(): void {
    this.loadItems();
  }

  loadItems(){
    this.isLoading = true;
    this._soundService.getAll(this.search).subscribe(data => {
      this.liste = data
      this.result= this.liste.count
      this.isLoading = false;
    }); 
    
    
  }

  select(id: number) {
    this._soundService.getOne(id).subscribe(data => this.details = data);
  }
  clickPrevious(){
    this._soundService.getUrl(this.liste.previous?? '').subscribe(data => this.liste = data);
  }
   clickNext(){
    this._soundService.getUrl(this.liste.next?? '').subscribe(data => this.liste = data);
    }//{this.loadItems(this.model.next??)""}
      


    }
  




