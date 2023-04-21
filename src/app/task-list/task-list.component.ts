import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Task } from '../task.model';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
  selectedTask!: Task;

  @Input() tasks: Task[] = [];
  @Input() deleteTask: (task: Task) => void;

  ngOnInit() {}
}

