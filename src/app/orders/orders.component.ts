import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FlexModalService } from '../shared-components/flex-modal/flex-modal.service';
import { Http } from '@angular/http';

interface IOrder {
  pid: string;
  image: string;
  description: string;
  price: number;
  quantity: number;
     }
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {

  orders: Array<IOrder> = []
  ;

  constructor(
    private router: Router,
    private flexModal: FlexModalService,
    private http: Http
  ) {
  }

  async ngOnInit() {

  }

  clear() {
    this.orders = []; }

    addItem(item: string) {
      switch (item) {
        case 'Android':
          this.orders.unshift({'pid': '1',
          'image': 'assets/sm_android.jpeg',
          'description': 'Android',
          'price': 150.00,
          'quantity': 2
          });
      }
    }
    delete(index: number) {	
      console.log('index', index); 
      this.orders.splice(index, 1);
      }

  async readFile() { const rows =  await this.http.get('assets/orders.json').toPromise();
  console.log('rows', rows.json());
  this.orders = rows.json();
  return rows.json();
 } }

