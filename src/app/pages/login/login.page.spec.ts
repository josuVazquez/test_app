import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach( () => {
    TestBed.configureTestingModule({
      declarations: [ LoginPage ],
      imports: [IonicModule.forRoot()],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
    }).compileComponents();
  });

  beforeEach( () => {
    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('email field validity', () => {
    const email = component.loginForm.controls.email;
    expect(email.valid).toBeFalsy();

    email.setValue('');
    expect(email.hasError('required')).toBeTruthy();
    
    email.setValue('notvalidmail');
    expect(email.hasError('email')).toBeTruthy();
  });

  it('password field validity', () => {
    const pass = component.loginForm.controls.pass;
    expect(pass.valid).toBeFalsy();

    pass.setValue('');
    expect(pass.hasError('required')).toBeTruthy();
  });

  it('form should be valid', () => {
    component.loginForm.controls.email.setValue('sadasd@asd.com');
    component.loginForm.controls.pass.setValue('12345');
    expect(component.loginForm.valid).toBeTruthy();
    component.submitLogin();
    expect(component.submitted).toBeTrue();
  });

  it('form should be invalid', () => {
    component.loginForm.controls.email.setValue('sadasd');
    component.loginForm.controls.pass.setValue('1234');
    expect(component.loginForm.valid).toBeFalse();
    component.submitLogin();
    expect(component.submitted).toBeTrue();
  });

});
