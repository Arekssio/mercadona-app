import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-add-dialog',
  templateUrl: './product-add-dialog.component.html',
  styleUrls: ['./product-add-dialog.component.scss']
})
export class ProductAddDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ProductAddDialogComponent>, @Inject(MAT_DIALOG_DATA) private data: any) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
