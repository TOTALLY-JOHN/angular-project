import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  template: `
    <p class="paragraph_main">
      Signup for the website!
    </p>
  `,
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
