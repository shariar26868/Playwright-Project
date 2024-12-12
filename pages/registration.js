import fs from 'fs';

class Registration {
  constructor(page) {
    this.page = page;
  }

  async navigateToRegister() {
    await this.page.getByRole('link', { name: 'Register' }).click();
  }

  async fillFirstName() {
    await this.page.getByLabel('First Name *').fill('Shariar Shaikat');
    this.firstName = 'Shariar Shaikat';  
  }

  async fillLastName() {
    await this.page.getByLabel('Last Name').fill('Azad');
    this.lastName = 'Azad';
  }

  async fillEmailAddress() {
    await this.page.getByLabel('Email *').fill('shariarshaikat@azad');
    this.email = 'shariarshaikat@azad';
  }

  async fillPassword() {
    await this.page.getByLabel('Password *').fill('Philips1234');
    this.password = 'Philips1234';
  }

  async fillPhoneNumber() {
    await this.page.getByLabel('Phone Number *').fill('01795989948');
    this.phoneNumber = '01795989948';
  }

  async fillAddress() {
    await this.page.getByLabel('Address').fill('70/b,chowrasta, khulna');
    this.address = '70/b,chowrasta, khulna';
  }

  async selectGender() {
    await this.page.getByRole('radio').first().check();
  }

  async checkCheckbox() {
    await this.page.getByRole('checkbox').check();
  }

  async submitRegistration() {
    await this.page.getByRole('button', { name: 'Register' }).click();
  }
  async saveUserData() {
    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
      phoneNumber: this.phoneNumber,
      address: this.address
    };
    fs.writeFileSync('userData.json', JSON.stringify(userData, null, 2), 'utf-8');
    console.log('User data saved to userData.json');
  }
}

export default Registration;
