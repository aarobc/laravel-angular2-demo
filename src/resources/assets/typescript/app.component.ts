import { Component } from '@angular/core';
import {ViewEncapsulation} from '@angular/core';

// import { FormsModule } from '@angular/forms';
import { Http, Response } from '@angular/http';
import './rxjs-operators';

@Component({
  selector: 'my-app',
  styleUrls: ['../sass/app.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `
  <nav class="navbar navbar-inverse navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">List Demo</a>
        </div>
      </div>
    </nav>

    <div class="container">

      <ul class="list-group">
			<li class="list-group-item">
        <input [(ngModel)]="newer"
        placeholder="Add Entry"
        (keyup.enter)="addTask()"
        id='newer'  type='text'/>
      </li>
			<li class="list-group-item" *ngFor='let task of tasks'>
        <span
        (click)='rmTask(task)'
        class="glyphicon glyphicon-remove rm pull-xs-right"></span>
				{{ task.task }}
			</li>
      </ul>
    </div>
  `
})
export class AppComponent {

  constructor (public http: Http) {}

  private url = '/tasks'
  public tasks :any[] = [];
  public newer = "";
  // public tasks = [];
  ngOnInit(){
    this.getTasks()
    console.log('ppeople?')
  }

  private extractData(res: Response) {
    return res.json()
  }

  test() {
    console.log(this.newer)
    this.newer = ""
  }

  getTasks() {

    this.http.get(this.url)
      .map(this.extractData)
      .subscribe(dat => {
        console.log(dat)
        this.tasks = dat.tasks
        console.log('potaot')
      })
      // .catch(this.showErr)

    console.log(this.tasks)
  }

  addTask(){
    let n = {
      task: this.newer
    }
    this.http.post(this.url, n)
    .map(this.extractData)
    .subscribe(r => {
      console.log(r)
      this.tasks.push(r)
      // this.getTasks()
      this.newer = ""
    })
  }

  rmTask(task: any) {

    this.http.delete(this.url + '/' + task.id)
    .subscribe(r => {
      console.log(r)
      var index = this.tasks.indexOf(task);
      this.tasks.splice(index, 1);
    })
  }

  private showErr(error: any){
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
  }

}

