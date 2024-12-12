
import { test, expect } from '@playwright/test';
import Profile from '../pages/profile'; 

test('User uploads a profile photo and saves changes', async ({ page }) => {
  const profile = new Profile(page);
  await profile.goToProfileSettings();
  await profile.uploadProfilePhoto('path/to/profile-picture.jpg');  
  await profile.saveProfileChanges();

  await profile.assertProfilePhotoUploaded(); 
});
