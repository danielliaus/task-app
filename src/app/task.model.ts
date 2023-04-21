export class Task {
    id: string;
    dueDate: Date;
    title: string;
    description: string;
    priority: number;
    color: string;
  
    constructor(
      id: string,
      dueDate: Date,
      title: string,
      description: string,
      priority: number,
      color: string
    ) {
      this.id = id;
      this.dueDate = dueDate;
      this.title = title;
      this.description = description;
      this.priority = priority;
      this.color = color;
    }
  }
  