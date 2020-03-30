import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { List } from '../models/list';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  userList: User[] = [];
  todoList: List[] = [];

  constructor() { }

  saveUser(user) {
    this.userList.push(user);
  }

  saveList(list) {
    this.todoList.push(list);
  }
}
