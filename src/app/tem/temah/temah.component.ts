import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-temah',
  standalone: true,
  imports: [],
  templateUrl: './temah.component.html',
  styleUrl: './temah.component.css'
})
export class TemahComponent {
  @Input() mensaje!: string;

  @Output() mensaje2 = new EventEmitter<string>();

  enviarMensaje(){
    this.mensaje2.emit('Hola mundo desde hijo');
  }
}
