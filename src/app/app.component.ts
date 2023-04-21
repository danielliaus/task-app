import { Component, OnInit, VERSION } from '@angular/core';
import { TaskService } from './task.service';
import { Task } from './task.model';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskService: TaskService) {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
  }
  sortByPriorityAndDueDate(): void {
    this.tasks.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.dueDate < b.dueDate ? -1 : 1;
      } else {
        return a.priority < b.priority ? -1 : 1;
      }
    });
  }

  deleteTask = (task: Task): void => {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  };

  ngOnInit() {
    if (this.tasks.length <= 10) {
      setInterval(() => {
        const task = this.taskService.generateRandomTask();
        this.tasks.push(task);
        this.sortByPriorityAndDueDate();
      }, 10000);
    }
    
  }

  refreshTaskList() {
    console.log(this.tasks.length);
    // This will trigger a re-render of the task list with the updated data
    this.ngOnInit();
  }
}
