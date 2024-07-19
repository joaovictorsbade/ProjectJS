import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';
import { FormControl, FormsModule } from '@angular/forms';
import { UserListComponent } from '../user-list/user-list.component';


@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, UserListComponent],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  name: string = '';
  age: number = 0;
  reload: boolean = false;

 firstNameControl = new FormControl();

  constructor(private userService: UserService){ }

  onSubmit(): void{
    const newUser : User = {id: 0, name: this.name, age: this.age};

    if(!this.validateUser(newUser)){
      alert('Campo invalido');
      return;
    }

    this.userService.addUser(newUser).subscribe({
      next:(user)=>{
        console.log('User added successfully: ', user);
        this.name = '';
        this.age = 0;

        this.reload = true;
      },
      error: (err) => {
        console.error('Error adding user: ', err);
        alert('Erro ao adicionar usuario');
      }
    })
    
  }

  validateUser(newUser: User): boolean{
    let valid: boolean = true;

    if(newUser.name.length === 0){
      valid = false;
    }

    return valid;
  }
}
