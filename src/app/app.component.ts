import { Component, OnInit } from '@angular/core';
import { FlexModalService } from './shared-components/flex-modal/flex-modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'final';
  aboutText: string;
  constructor(private flexModal: FlexModalService) {

  }

  ngOnInit() {
  }
  open() { alert ('This appliation is designed by Jose Hernandez(C) 2018' ); } }

