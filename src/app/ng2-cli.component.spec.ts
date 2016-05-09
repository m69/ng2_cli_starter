import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { Ng2CliAppComponent } from '../app/ng2-cli.component';

beforeEachProviders(() => [Ng2CliAppComponent]);

describe('App: Ng2Cli', () => {
  it('should create the app',
      inject([Ng2CliAppComponent], (app: Ng2CliAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'ng2-cli works!\'',
      inject([Ng2CliAppComponent], (app: Ng2CliAppComponent) => {
    expect(app.title).toEqual('ng2-cli works!');
  }));
});
