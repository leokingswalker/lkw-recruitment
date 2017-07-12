import { LkwRecruitmentPage } from './app.po';

describe('lkw-recruitment App', () => {
  let page: LkwRecruitmentPage;

  beforeEach(() => {
    page = new LkwRecruitmentPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
