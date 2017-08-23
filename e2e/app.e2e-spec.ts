import { Angular2TicTacToePage } from './app.po';

describe('angular2-tic-tac-toe App', () => {
  let page: Angular2TicTacToePage;

  beforeEach(() => {
    page = new Angular2TicTacToePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
