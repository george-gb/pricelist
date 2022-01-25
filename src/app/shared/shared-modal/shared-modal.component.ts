import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  templateUrl: './shared-modal.component.html',
  styleUrls: ['./shared-modal.component.scss']
})
export class SharedModalComponent implements OnInit {
  @Input() width: string = "690px";
  @Input() maxWidth: string = "100%";
  @Input() height: string;
  @Input() title: string = "Edit Item";
  @Output() outClose = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

}
