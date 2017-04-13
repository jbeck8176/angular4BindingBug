import { Angular4BindingBugPage } from './app.po';

describe('angular4-binding-bug App', () => {
  let page: Angular4BindingBugPage;

  beforeEach(() => {
    page = new Angular4BindingBugPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
