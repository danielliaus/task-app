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
  
  // Retrieve tasks from local storage on initialization
  constructor(private taskService: TaskService) {
    const tasksJson = localStorage.getItem('tasks');
    if (tasksJson) {
      this.tasks = JSON.parse(tasksJson);
    }
  }

  // Sorts the task array by priority and due date
  sortByPriorityAndDueDate(): void {
    this.tasks.sort((a, b) => {
      if (a.priority === b.priority) {
        return a.dueDate < b.dueDate ? -1 : 1;
      } else {
        return a.priority < b.priority ? -1 : 1;
      }
    });
  }


  // Deletes a task from the task array
  deleteTask = (task: Task): void => {
    this.tasks = this.tasks.filter((t) => t.id !== task.id);
  };

  // Automatically generates new tasks every 10 seconds
  ngOnInit() {
    if (this.tasks.length <= 10) {
      setInterval(() => {
        const task = this.taskService.generateRandomTask();
        this.tasks.push(task);
        this.sortByPriorityAndDueDate();
      }, 10000);
    }
    
  }


  // Refreshes the task list by reinitializing the component
  refreshTaskList() {
    // This will trigger a re-render of the task list with the updated data
    this.ngOnInit();
  }
}
