import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { CollectionItemComponent } from './collection-item.component';

@NgModule({
  declarations: [CollectionItemComponent],
  imports: [
    CommonModule,
    MatRippleModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
  ],
  exports: [CollectionItemComponent],
})
export class CollectionItemModule {}
