import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
 
  firstname: string = "";
  surname: string="";
  email: string = "";
  password: string = "";
  confirmpassword: string = "";
  
 

  constructor(private router: Router) {}

  ngOnInit(): void {}

  registerSubmit() {
    const user = {
      name: this.firstname,
      email: this.email,
      password: this.password
      // Add other fields from your form as needed
    };
  
    // Retrieve existing users from localStorage or initialize an empty array if no users exist
    const usersJSON = localStorage.getItem('user') || '[]';
    const users = JSON.parse(usersJSON);
  
    // Check if a user with the same email already exists
    const existingUserIndex = users.findIndex((u: any) => u.email === this.email);
  
    if (existingUserIndex !== -1) {
      // User already exists, display a message with existing user's name
      const existingUser = users[existingUserIndex];
      alert(`User already exists!\n\nName: ${existingUser.name}`);
    } else {
      // Add the new user to the array
      users.push(user);
  
      // Convert the updated array back to JSON
      const updatedUsersJSON = JSON.stringify(users);
  
      // Store the updated array in localStorage
      localStorage.setItem('users', updatedUsersJSON);
  
      // Display a confirmation message with the new user's name
      alert(`User Registered Successfully!\n\nName: ${user.name}`);
      this.router.navigate(['/pro']);
      // Optionally, you can navigate to a different route or perform other actions here.
    }
  }
}  