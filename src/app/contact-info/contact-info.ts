import { CommonModule } from '@angular/common';
import { CartService } from './../services/cart.service';
import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-info',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-info.html',
  styleUrl: './contact-info.scss',
})

export class ContactInfoComponent {
  contactForm!: FormGroup<{
    firstName: FormControl<string>;
    lastName: FormControl<string>;
    phone: FormControl<string>;
    address: FormControl<string>;
    city: FormControl<string>;
    state: FormControl<string>;
    country: FormControl<string>;
    zipcode: FormControl<string>;
    notes: FormControl<string>;
  }>;

  constructor(private fb: FormBuilder, private cartService: CartService, private router: Router) {
    this.createForm();
  }


  createForm() {
    this.contactForm = this.fb.group({
      firstName: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      lastName: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      phone: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      address: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      city: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      state: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      country: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      zipcode: this.fb.control('', { nonNullable: true, validators: [Validators.required] }),
      notes: this.fb.control('', { nonNullable: true })
    });
  }

  submitForm() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    const cartItems = this.cartService.getAllCartItems();

    // Format cart nicely
    const formattedCart = cartItems
      .map((item) => `- ${item.name} (${item.weight} Kg) × ${item.qty}`)
      .join('\n');

    const emailData = {
      to_email: 'ammaakkaavakai@gmail.com',

      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      phone: this.contactForm.value.phone,
      address: this.contactForm.value.address,
      city: this.contactForm.value.city,
      state: this.contactForm.value.state,
      country: this.contactForm.value.country,
      zipcode: this.contactForm.value.zipcode,
      notes: this.contactForm.value.notes,

      cart: formattedCart,
    };

    const SERVICE_ID = 'service_gg1pczv';
    const TEMPLATE_ID = 'template_1psqqyc';
    const PUBLIC_KEY = 'ZamvXbevRqsyMf8FO';

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, emailData, PUBLIC_KEY)
      .then(() => {
       
        this.contactForm.reset();
        this.router.navigate(['confirmation']);
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        alert('Failed to send email.');
      });
  }

  // Utility for showing error messages
  get f() {
    return this.contactForm.controls;
  }
}
