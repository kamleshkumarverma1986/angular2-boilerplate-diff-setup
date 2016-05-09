import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { CareerStartupAppComponent } from '../app/career-startup.component';

beforeEachProviders(() => [CareerStartupAppComponent]);

describe('App: CareerStartup', () => {
  it('should create the app',
      inject([CareerStartupAppComponent], (app: CareerStartupAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'career-startup works!\'',
      inject([CareerStartupAppComponent], (app: CareerStartupAppComponent) => {
    expect(app.title).toEqual('career-startup works!');
  }));
});
