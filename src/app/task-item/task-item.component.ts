import { Component, Input, Inject } from '@angular/core';
import { Task } from '../task.model';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TaskDetailComponent } from '../task-details/task-details.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent {
  @Input() task: Task;
  @Input() deleteTask: (task: Task) => void;

  constructor(public dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(TaskDetailComponent, {
      data: this.task,
    });
  }

  editTask() {
    alert('edit');
  }
  deleteTaskConfirm() {
    if (confirm(`Are you sure you want to delete "${this.task.title}"?`)) {
      this.deleteTask(this.task);
    }
  }
}
