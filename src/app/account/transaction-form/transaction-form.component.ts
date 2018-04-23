import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../model/transaction";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  public transaction = new Transaction();

  constructor() { }

  ngOnInit() {
  }

}
