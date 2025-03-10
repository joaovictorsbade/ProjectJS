import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit{
  users: User[] = [];

  constructor(private userService: UserService){ }

  ngOnInit(): void{
     this.userService.getUsers().subscribe({
      next:(users) => {
        this.users = users;
      },
      error: (err) => {
        console.error('Error fatching users: ', err);
      }
     });
  }
}
