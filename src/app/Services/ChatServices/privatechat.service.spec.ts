import { TestBed } from '@angular/core/testing';

import { PrivatechatService } from './privatechat.service';

describe('PrivatechatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrivatechatService = TestBed.get(PrivatechatService);
    expect(service).toBeTruthy();
  });
});
