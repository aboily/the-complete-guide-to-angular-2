import { Form11Page } from './app.po';

describe('form-11 App', function() {
  let page: Form11Page;

  beforeEach(() => {
    page = new Form11Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
