import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  // lastPriority is used to generate random tasks with different priorities
  lastPriority = 3;

  // Generates a random task with a title, description, priority, color, and due date
  generateRandomTask() {
    const titles = [
      'Buy groceries',
      'Finish project',
      'Call mom',
      'Go for a run',
      'Clean room',
    ];
    const descriptions = [
      'Get eggs, milk, and bread from the store',
      'Complete all remaining tasks',
      'Check in and chat for a while',
      'Jog for 30 minutes',
      'Vacuum and dust the bedroom',
    ];
    const priorities = [1, 2, 3];
    // Set the priority of the next task to be the next highest priority
    let lastPriority = this.lastPriority || 3;
    const nextPriority =
      priorities.find((p) => p > lastPriority) || priorities[0];
    this.lastPriority = nextPriority;

    const colors = [
      '#77DD77',
      '#836953',
      '#89cff0',
      '#99c5c4',
      '#add8e6',
      '#87cefa',
    ];

    // Generate a random task with a unique ID
    const task = {
      id: this.generateGUID(),
      dueDate: this.generateRandomDate(),
      title: titles[Math.floor(Math.random() * titles.length)],
      description:
        descriptions[Math.floor(Math.random() * descriptions.length)],
      priority: nextPriority,
      color: colors[Math.floor(Math.random() * colors.length)],
    };

    return new Task(
      task.id,
      task.dueDate,
      task.title,
      task.description,
      task.priority,
      task.color
    );
  }

  // Generates a random date within a specified range
  private generateRandomDate(): Date {
    const startDate = new Date(2024, 6, 1).getTime();
    const endDate = new Date(2024, 7, 31).getTime();
    const randomDate = new Date(
      startDate + Math.random() * (endDate - startDate)
    );
    return randomDate;
  }

  // Generates a random GUID
  private generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        const r = (Math.random() * 16) | 0;
        const v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
