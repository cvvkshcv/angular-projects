import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GetPostService } from 'src/app/services/get-post.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HomeComponent } from './home.component';
import { of } from 'rxjs';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ],
      providers: [ GetPostService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get all posts from getAllPosts', () => {
    spyOn(component, 'isLoggedIn').and.returnValue(true);
    spyOn(component, 'isUserClickedBtn').and.stub();
    const service = fixture.debugElement.injector.get(GetPostService);
    spyOn(service, 'getPosts').and.returnValue(of([{ id : 1}]));
    component.getAllPosts();
    expect(component.allPosts).toEqual([{ id : 1}]);
  });

});

/*

const obj = {
  fetchPost: () => {
    // api logic
  }
}
// 

obj.fetchPost = () => {};

obj.fetchPost();

*/