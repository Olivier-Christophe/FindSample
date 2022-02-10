import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { SoundDetailsModel } from 'src/app/models/sound-details.model';


@Component({
  selector: 'app-sound-detail',
  templateUrl: './sound-detail.component.html',
  styleUrls: ['./sound-detail.component.scss']
})
export class SoundDetailComponent implements OnInit, OnChanges {

  @ViewChild('audio') private audio!: ElementRef

  @Input()
  model!: SoundDetailsModel;  

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.audio?.nativeElement.load();
  }

  ngOnInit(): void {
  }

}
