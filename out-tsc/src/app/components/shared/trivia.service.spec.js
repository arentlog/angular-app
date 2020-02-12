import { TestBed } from '@angular/core/testing';
import { TriviaService } from './trivia.service';
describe('TriviaService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(TriviaService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=trivia.service.spec.js.map