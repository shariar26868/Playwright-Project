import fs from 'fs'; 
class Login {
  constructor(page) {
    this.page = page;
  }
  async fillEmailAddress(email) {
    await this.page.getByLabel('Email *').fill(email);
    this.email = email;  
  }
  async fillPassword(password) {
    await this.page.getByLabel('Password *').fill(password);
    this.password = password;  
  }
  async submitLogin() {
    await this.page.getByRole('button', { name: 'Login' }).click();
  }
  async saveLoginData() {
    const loginData = {
      email: this.email,
      password: this.password,
    };
    fs.writeFileSync('loginData.json', JSON.stringify(loginData, null, 2), 'utf-8');
    console.log('Login data saved to loginData.json');
  }
}

export default Login;