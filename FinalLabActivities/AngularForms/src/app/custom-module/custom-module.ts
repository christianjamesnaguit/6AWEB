import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-custom-module',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './custom-module.html',
  styleUrl: './custom-module.css',
})
export class CustomModule {
  form!: FormGroup;
  submittedData: any = null;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(18)]],
      frequency: ['', Validators.required],
      type: ['', Validators.required],
      reason: ['', Validators.required],
      comments: ['']
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
    } else {
      this.submittedData = { ...this.form.value };
      this.form.reset();
    }
  }

  isInvalid(name: string) {
    const control = this.form.get(name);
    return control?.touched && control?.invalid;
  }
}
