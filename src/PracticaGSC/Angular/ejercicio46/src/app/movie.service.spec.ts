import { TestBed } from '@angular/core/testing';

import { MovieService } from './movie.service';

describe('MovieService', () => {
  beforeEach(() => TestBed.configureTestingModule({
  }));

  it('should be created', () => {
    const service: MovieService = TestBed.get(MovieService);
    expect(service).toBeTruthy();
  });

  
  it ('Deberia agregar un nuevo registro', ()=> {
    
    let movie = new MovieService();
    
    movie.addCastMember('Martin', 'Reparto');
    expect (movie.castMembers.length ===  1). toBeTruthy();
  })

});
