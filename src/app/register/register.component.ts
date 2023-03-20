import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../_services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  success = false;
  errMessage = ''

   constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient ,
    private registerService: RegisterService
 ) { }
  ngOnInit(): void {
this.registerForm = this.formBuilder.group({
  username:['',Validators.required],
  name:['',Validators.required],
  phone_number:['',Validators.required],
  email:['',Validators.required],
  nameplaintextPassword:['',Validators.required]
})
  }

  register(){
       const formValue = this.registerForm.value;

    this.registerService.register(formValue.username,formValue.name,formValue.phone_number,formValue.email,formValue.nameplaintextPassword).subscribe({next:()=>
    {
      this.success = true
    },error:(err) =>{
      if(err.error == 404)
      this.errMessage = "L'utilisateur existe deja! Essayer a nouveau"
      else
      this.errMessage = 'quelque chose a mal tourné'
    }})

  }

}
