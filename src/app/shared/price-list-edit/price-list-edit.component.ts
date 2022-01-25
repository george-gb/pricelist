import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PriceListModel } from 'src/app/models/pricelistModel.model';

@Component({
  selector: 'app-price-list-edit',
  templateUrl: './price-list-edit.component.html',
  styleUrls: ['./price-list-edit.component.scss']
})
export class PriceListEditComponent implements OnInit {

  @Input() priceListItem: PriceListModel;
  @Input() priceListArr: PriceListModel[];
  @Output() outClose = new EventEmitter<boolean>();
  @Output() onSaveEdit = new EventEmitter<any>();
  editItem: PriceListModel;
  error: any = [];


  constructor() {
  }

  ngOnInit(): void {
    this.editItem = { ...this.editItem, ...this.priceListItem }
  }

  onInputChange(title): void {

    if (title == 'priceListName') {
      if ((/[^a-zA-Z]/).test(this.editItem[title]) || !this.editItem[title].length) {
        if (!(this.error.filter(el => el['priceListName'])).length) {
          this.error.push({ [title]: "must not be empty and must have only characters in PriceListName" });
        }
      } else {
        this.error = this.error.filter(el => !el['priceListName']);
      }
    } else if (title == 'extErpPriceListID') {
      if (this.priceListArr.filter(el => (el.priceListID == this.editItem[title] || el.extErpPriceListID == this.editItem[title]) && el.priceListID != this.editItem['priceListID']).length) {
        if (!(this.error.filter(el => el['extErpPriceListID'])).length) {
          this.error.push({ [title]: "extErpPriceListID cant have same ID" });
        }
      } else {
        this.error = this.error.filter(el => !el['extErpPriceListID']);
      }
    }
  }

  save(): void {
    this.onSaveEdit.emit(this.editItem);
  }
}
