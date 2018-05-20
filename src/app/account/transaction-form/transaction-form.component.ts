import { Component, OnInit } from '@angular/core';
import {Transaction} from "../../model/transaction";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  public transaction = new Transaction();

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

}
