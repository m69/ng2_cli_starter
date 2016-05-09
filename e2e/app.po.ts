export class Ng2CliPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-cli-app h1')).getText();
  }
}
