/**
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms'; // For ngModel
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

// interface OrderItem {
//   id: string;
//   description: string;
// }

@Component({
  selector: 'app-order-page',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './orderpage.component.html',
  styleUrls: ['./orderpage.component.scss'],
})
export class OrderpageComponent implements OnInit {
  userName: string = ''; // From firebase auth or manual input??
  orderItems: any[] = [];
  // orderItems: OrderItem[] = [
  // { id: '1', description: 'Latte whole milk vanilla' },
  // { id: '2', description: 'Matcha hot' }
  // ];

  constructor() {}

  ngOnInit(): void {}

  onEditOrder(): void {}

  onSubmitOrder(): void {}
}
