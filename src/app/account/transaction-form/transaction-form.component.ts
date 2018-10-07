import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material";
import {Transaction} from '../../state/model';

@Component({
  selector: 'app-transaction-form',
  templateUrl: './transaction-form.component.html',
  styleUrls: ['./transaction-form.component.scss']
})
export class TransactionFormComponent implements OnInit {

  public transaction:Transaction = {
    date: new Date().toISOString()
  };

  public categories = [
    "Activity",
    "Allowance",
    "Food",
    "Toy",
    "Tithing"
  ]

  constructor(public dialog:MatDialog) { }

  ngOnInit() {
  }

}
