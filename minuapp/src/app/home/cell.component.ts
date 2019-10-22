import {Component, Input, Output, EventEmitter, HostListener} from '@angular/core';

@Component({
  selector: 'my-cell',
  template: `<div>{{value}}</div>`,
  styles: [
    `div {font-size:72px; height: 125px; width: 125px; background-color: black; float: left; margin: 0 4px 4px 0; color: white; text-align:center;}`
  ]
})
export class CellComponent {
  @Input() value: string;
  @Output('userClick') click = new EventEmitter<string>();

  @HostListener('click')
  clickHandler() {
    this.click.emit('');
  }
}