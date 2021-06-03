import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RecoverpwUserService } from './recoverpw-user.service';

@Component({
  selector: 'app-recoverpw-user',
  templateUrl: './recoverpw-user.component.html',
  styleUrls: ['./recoverpw-user.component.css']
})
export class RecoverpwUserComponent implements OnInit {

  formGroup!: FormGroup;
  constructor(private fb:FormBuilder, private recoverpwUserService: RecoverpwUserService) { }
  
  ngOnInit(): void {
  }
  get email() { return this.formGroup.get('email'); }

  infoForm() {
    this.formGroup = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

}
