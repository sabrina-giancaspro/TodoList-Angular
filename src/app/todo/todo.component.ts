import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule
  ],
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  tasks: { title: string; completed: boolean }[] = [];
  newTask: string = '';

  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push({ title: this.newTask, completed: false });
      this.newTask = '';
    }
  }

  removeTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleComplete(task: { completed: boolean }) {
    task.completed = !task.completed;
  }

  get completedTasks() {
    return this.tasks.filter(task => task.completed);
  }

  get incompleteTasks() {
    return this.tasks.filter(task => !task.completed);
  }
}
