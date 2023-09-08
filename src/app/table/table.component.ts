
import { Component, OnInit } from '@angular/core'
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit{
  users: any[] = [];

  ngOnInit() {
    // Fetch user data from local storage
    const userData = localStorage.getItem('user');
    if (userData) {
      this.users.push(JSON.parse(userData));
    }
  }
}
