import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemComponent } from './item.component';
import { CommonModule } from '@angular/common';

describe('ItemComponent', () => {
  let component: ItemComponent;
  let fixture: ComponentFixture<ItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ItemComponent', () => {
    let component: ItemComponent;
    let fixture: ComponentFixture<ItemComponent>;

    beforeEach(async () => {
      await TestBed.configureTestingModule({
        declarations: [ItemComponent],
        imports: [CommonModule]
      }).compileComponents();
    });

    beforeEach(() => {
      fixture = TestBed.createComponent(ItemComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should emit remove event when remove method is called', () => {
      spyOn(component.remove, 'emit');
      component.remove;
      expect(component.remove.emit).toHaveBeenCalled();
    });

    it('should update item description on saveItem method', () => {
      const newDescription = 'Updated description';
      component.saveItem(newDescription);
      expect(component.item.description).toEqual(newDescription);
    });

    it('should not update item description if new description is empty', () => {
      const initialDescription = component.item.description;
      component.saveItem('');
      expect(component.item.description).toEqual(initialDescription);
    });
  });

});
