import { Injectable } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private angularFireDatabase: AngularFireDatabase) {}

  getUsers() {
    return this.angularFireDatabase.list('/users');
  }

  getUserById(uid: string) {
    return this.angularFireDatabase.object('/users/' + uid);
  }

  createUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  editUser(user) {
    return this.angularFireDatabase.object('/users/' + user.uid).set(user);
  }

  setAvatar(avatar: string, uid: string) {
    return this.angularFireDatabase
      .object('/users/' + uid + '/avatar')
      .set(avatar);
  }
}
