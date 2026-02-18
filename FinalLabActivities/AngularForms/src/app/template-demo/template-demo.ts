import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-demo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './template-demo.html',
  styleUrl: './template-demo.css',
})
export class TemplateDemo {
  title='template driven demo';
  username='';
  email='';
  password='';
  role='';
  gender='';
  status='';
  comments='';
  submitted=false;
  submittedData: any;

  roles = [
    { value: '', label: 'select role', disabled: true },
    { value: 'admin', label: 'admin', disabled: false },
    { value: 'user', label: 'user', disabled: false },
    { value: 'guest', label: 'guest', disabled: false }
  ];

  onSubmit() {
    this.submitted = true;
    this.submittedData = {
      username: this.username,
      email: this.email,
      password: this.password,
      role: this.role,
      gender: this.gender,
      status: this.status,
      comments: this.comments
    };
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = '';
    this.gender = '';
    this.status = '';
    this.comments = '';
  }

  submitAnother() {
    this.submitted = false;
    this.username = '';
    this.email = '';
    this.password = '';
    this.role = '';
    this.gender = '';
    this.status = '';
    this.comments = '';
  }
}
