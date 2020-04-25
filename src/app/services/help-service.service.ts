import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class HelpServiceService {

  help;

  constructor(private db: AngularFireDatabase) { 
    this.help = this.db.list('/Help');
  }

  add(object) {
    return this.help.push({
      'name': "name"
    })
  }
}
