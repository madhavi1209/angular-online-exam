import { TestBed } from '@angular/core/testing';

import { RemoveQuestionService } from './remove-question.service';

describe('RemoveQuestionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemoveQuestionService = TestBed.get(RemoveQuestionService);
    expect(service).toBeTruthy();
  });
});
