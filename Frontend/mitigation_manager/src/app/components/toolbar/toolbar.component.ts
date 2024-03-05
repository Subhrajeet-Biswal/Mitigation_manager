import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { CreateformComponent } from '../createform/createform.component';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule],
  standalone: true,
})
export class ToolbarComponent {
  constructor(private dialogue: MatDialog) {}

  openCreateForm() {
    this.dialogue.open(CreateformComponent, {
      width: '500px',
    });
  }
}
