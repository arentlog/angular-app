import { TestBed } from '@angular/core/testing';
import { ChuckJokeService } from './chuck-joke.service';
describe('ChuckJokeService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ChuckJokeService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=chuck-joke.service.spec.js.map