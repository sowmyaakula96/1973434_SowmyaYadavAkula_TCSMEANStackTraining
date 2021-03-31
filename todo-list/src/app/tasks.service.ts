import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private httpClient: HttpClient) {}

  saveTask(task: any){
    return this.httpClient.post('http://localhost:3000/tasks', task)
  }


  getTasks(){
    return this.httpClient.get('http://localhost:3000/tasks')
  }

}
