class Item {
  constructor(page) {
    this.page = page;
  }
  async addItem(itemName, amount, purchaseDate, remarks) {
    await this.page.getByRole('button', { name: 'Add Cost' }).click();
    await this.page.getByLabel('Item Name').fill(itemName);
    await this.page.locator('div').filter({ hasText: /^-\+$/ }).getByRole('spinbutton').click();
    await this.page.getByRole('button', { name: '+' }).click();
    await this.page.getByLabel('Amount').fill(amount);
    await this.page.getByLabel('Purchase Date').fill(purchaseDate);
    await this.page.getByLabel('Remarks').fill(remarks);
    this.page.once('dialog', (dialog) => {
      console.log(`Dialog message: ${dialog.message()}`);
      dialog.dismiss().catch(() => {}); 
    });
    await this.page.getByRole('button', { name: 'Submit' }).click();
  }
}

export default Item;