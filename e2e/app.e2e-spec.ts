import { PersonalWebGtwgoaPage } from './app.po';

describe('personal-web-gtwgoa App', function() {
  let page: PersonalWebGtwgoaPage;

  beforeEach(() => {
    page = new PersonalWebGtwgoaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
