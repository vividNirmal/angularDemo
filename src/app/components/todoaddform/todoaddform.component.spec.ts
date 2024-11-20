import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoaddformComponent } from './todoaddform.component';

describe('TodoaddformComponent', () => {
  let component: TodoaddformComponent;
  let fixture: ComponentFixture<TodoaddformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoaddformComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(TodoaddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
