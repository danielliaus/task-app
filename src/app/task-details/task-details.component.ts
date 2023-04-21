import { Component, Input, Inject } from '@angular/core';
import { Task } from '../task.model';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
})
export class TaskDetailComponent {
  task: Task = this.data;

  constructor(@Inject(MAT_DIALOG_DATA) public data: Task) {}
}
