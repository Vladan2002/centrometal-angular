import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NewsletterService } from '../../services/newsletter.service';
import { Subscriber } from './interfaces/subcriber.interface';

@Component({
  selector: 'app-newsletter',
  standalone:false,
  templateUrl: './newsletter.component.html',
  styleUrl: './newsletter.component.scss'
})
export class NewsletterComponent implements OnInit {
  public newsletterForm!: FormGroup;
  public successMessage:string = '';
  public errorMessage:string = '';

  constructor(private newsletterService: NewsletterService) {}

  public ngOnInit() {
    this.initForm();
  }


  private initForm(): void {
    this.newsletterForm = new FormGroup({
      fullName: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\s*\S+(\s+\S+)+\s*$/)
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    });
  }

  public onSubmit() {
    if (this.newsletterForm.invalid) return;

    const newSubscriber: Subscriber = this.newsletterForm.value;
    this.newsletterService.getByEmail(newSubscriber.email).subscribe(existing => {
      if (existing.length) {
        this.errorMessage = 'Email već postoji.';
        this.successMessage = '';
      } else {
        this.newsletterService.subscribe(newSubscriber).subscribe({
          next: (res) => {
            this.successMessage = 'Uspješno ste se prijavili!';
            this.errorMessage = '';
            this.newsletterForm.reset();
          },
          error: (err) => {
            this.errorMessage = 'Greška prilikom prijave.';
            this.successMessage = '';
          }
        });
      }
    });
  }
}
