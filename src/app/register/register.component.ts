import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../Models/user';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  user:User={};

  constructor(private fb:FormBuilder){}

  registerpage = this.fb.group({
  username:['',[Validators.required,Validators.minLength(3)]],
  password:['',[Validators.required,Validators.minLength(3)]],
  emailId:['',[Validators.required, Validators.email]]

});

get username(){
  return this.registerpage.get('username');
}

get password(){
  return this.registerpage.get('password');
}

get emailId(){
  return this.registerpage.get('emailId')
}

onSubmit() {
  console.log(this.registerpage.value);
  
  // Assign form values to the user object
  this.user.username = this.registerpage.value.username;
  this.user.password = this.registerpage.value.password;
  this.user.emailId = this.registerpage.value.emailId;

  console.log(this.user);

  // this.userService.addUser(this.user).subscribe({
  //   next: (data) => {
  //     alert("User added Successfully");
  //   },
  //   error: (error) => {
  //     alert(error + " Email address already exists");
  //     this.registerpage.reset();
  //   }
  // });
  
  
}


}
