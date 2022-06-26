import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit {

   @Input() label?: string;
  
  @Output() onClick = new EventEmitter<any>();
  constructor() {
    
   }

  
  ngOnInit(): void {
  }

  onButtonClick(event:any) {
    this.onClick.emit(event)
  }

}
