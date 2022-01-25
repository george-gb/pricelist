import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { PriceListFilterModel } from 'src/app/models/priceListFilterModel.model';
import { PriceListModel } from 'src/app/models/pricelistModel.model';
import { PriceService } from 'src/app/services/price.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {


  priceListName: string = "";
  editModalOpen: boolean = false;
  priceListItemEdit: PriceListModel;
  filter: PriceListFilterModel = {
    ERPCompanyIds: [2, 3, 4, 5],
    SearchTerm: this.priceListName
  }
  priceListArr: PriceListModel[] = [
    {
      priceListID: 1,
      priceListName: 'Cosco',
      extErpPriceListID: 111
    },
    {
      priceListID: 2,
      priceListName: 'Cargo',
      extErpPriceListID: 222
    },
    {
      priceListID: 3,
      priceListName: 'OcExpress',
      extErpPriceListID: 333
    },
  ]

  private searchSubject: Subject<string> = new Subject();


  constructor(private priceService: PriceService) {
    this.getPriceLists();
  }

  ngOnInit(): void {
  }

  getPriceLists(filter: PriceListFilterModel = this.filter): void {
    this.searchSubject
      .pipe(
        distinctUntilChanged(),
        debounceTime(500),
      ).subscribe(resp => {
        this.priceService.getPriceLists(filter).subscribe(
          res => {
            this.priceListArr = res;
          },
          err => {
            console.log(err);
          })
      });
  }

  onInputChange(e): void {
    this.filter = { ...this.filter, SearchTerm: this.priceListName }
    this.searchSubject.next(this.priceListName);
  }

  onEdit(editValue: PriceListModel): void {
    this.priceListItemEdit = editValue;
    this.editModalOpen = true;
  }

  onEditSave(payload: PriceListModel) {
    this.priceService.updatePriceList(payload).subscribe(
      res => {
        this.priceListArr = res;
      },
      err => {
        console.log(err);
      })
  }

}
