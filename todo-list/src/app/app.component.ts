import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  taskForm: FormGroup;
  tasks: any = [];
  taskData: boolean = false;
  

  constructor(
    private formBuilder: FormBuilder,
    private taskService: TasksService
  ) { }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required]
    });
    this.loadTasks();
  }

  loadTasks() {
    this.taskService.getTasks().subscribe(result => {
      console.log('result', result);
      this.tasks = result;

      if(this.tasks.length > 0) {
        this.taskData = true;
      }
    })
  }

  submit() {
    if (!this.taskForm.valid) {
      return;
    }

    var myDate = (this.taskForm.controls.deadline.value).toLocaleDateString()
    // console.log(myDate)
    

    var obj = {
      id: this.taskForm.controls.id.value,
      name: this.taskForm.controls.name.value,
      description: this.taskForm.controls.description.value,
      deadline: myDate
    }

    this.taskService.saveTask(obj).subscribe(result => {
      console.log('result', result);
    })

    // console.log(obj);
  }
}
