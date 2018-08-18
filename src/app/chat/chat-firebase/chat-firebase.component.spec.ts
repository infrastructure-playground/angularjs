import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatFirebaseComponent } from './chat-firebase.component';

describe('ChatFirebaseComponent', () => {
  let component: ChatFirebaseComponent;
  let fixture: ComponentFixture<ChatFirebaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatFirebaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatFirebaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
