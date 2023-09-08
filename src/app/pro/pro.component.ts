import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pro',
  templateUrl: './pro.component.html',
  styleUrls: ['./pro.component.css']
})
export class ProComponent {
  email = '';
  password = '';

  constructor(private router: Router) {}

  login(): void {
    const usersJSON = localStorage.getItem('users') || '[]';
    const users = JSON.parse(usersJSON);
    
    const existingUser = users.find((user: any) => user.email === this.email);

    if (existingUser) {
      if (existingUser.password === this.password) {
        alert('User Logged In Successfully');
        this.router.navigate(['/table']);
      } else {
        alert('Incorrect Password');
      }
    } else {
      // User doesn't exist, so let's register them
      const newUser = {
        email: this.email,
        password: this.password
      };

      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));
      alert('User Registered and Logged In Successfully');
      this.router.navigate(['/table']);
    }
  }
}
