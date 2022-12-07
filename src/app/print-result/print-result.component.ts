import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-print-result',
  templateUrl: './print-result.component.html',
  styleUrls: ['./print-result.component.css']
})
export class PrintResultComponent implements OnInit 
{
  constructor() { }

  @Input() generatedPassword: String | undefined;
  @Output() close = new  EventEmitter<any>();

  ngOnInit() {
  }

  hidePwdDisplay(): void 
  {
    this.close.emit();
  }
}
