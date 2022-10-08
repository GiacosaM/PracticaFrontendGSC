import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';
import { ActorService } from './actor.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  it('adding a cast member increases the cast member count by one', () => {
    const service: MovieService = TestBed.get(MovieService);

    
    // agregamos el codigo aqui
    
    let mockActorService= new ActorService();
    let spy:any;
    spy = spyOn(mockActorService, 'canAddMovieToActor').and.returnValue(true);


    service.addCastMember('Sylvester', 'Rambo', mockActorService);
    expect(service.castMembers.length).toBe(1)    
  });

});
