export class Task {
  static readonly pomodoroLimit: number = 5;
  done: number;
  title: string;
  completed: boolean;
  todo: number;

  constructor(options: {
    done?: number,
    title?: string,
    completed?: boolean,
    todo?: number
  } = {}) {
    this.done = options.done || 0;
    this.title = options.title || '';
    this.completed = options.completed || false;
    this.todo = options.todo || 1;
  }
}
