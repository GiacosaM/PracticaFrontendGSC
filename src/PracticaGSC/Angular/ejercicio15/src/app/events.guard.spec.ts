import { TestBed } from '@angular/core/testing';

import { EventsGuard } from './events.guard';

describe('EventsGuard', () => {
  let guard: EventsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EventsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
