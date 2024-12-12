class Profile {
    constructor(page) {
      this.page = page;
    }
    async goToProfileSettings() {
      await this.page.goto('https://dailyfinance.roadtocareer.net/user'); 
    }

    async uploadProfilePhoto(photoPath) {
      const fileInput = this.page.locator('input[type="../resources/pic"]');  
      await fileInput.setInputFiles(photoPath); 
    }
    async saveProfileChanges() {
      await this.page.getByRole('button', { name: 'UPDATE' }).click();
    }
  }
  
  export default Profile;
  