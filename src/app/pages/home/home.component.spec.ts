import { ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { GetPostService } from 'src/app/services/get-post.service';

import { HomeComponent } from './home.component';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs/internal/observable/of';

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let mockGetPostsService: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ HomeComponent ],
      providers: [GetPostService]
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

  it('should trigger button click and make api call', () => {
    const submitEl = fixture.debugElement.nativeElement.querySelector('button');
    let getAllPosts = spyOn(component, 'getAllPosts');
    submitEl.click();
    expect(getAllPosts).toHaveBeenCalled();
  });

  it('should make api call', () => {
    let data = [{
      userId: 1,
      id: 1,
      title: 'string',
      body: 'string'
    }];
    const postService = fixture.debugElement.injector.get(GetPostService);
    spyOn(postService, 'getPosts').and.returnValue(of(data));
    component.getAllPosts();
    expect(component.allPosts).toEqual(data);
  });

});
