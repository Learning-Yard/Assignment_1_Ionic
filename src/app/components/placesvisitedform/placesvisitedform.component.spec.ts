import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlacesvisitedformComponent } from './placesvisitedform.component';

describe('PlacesvisitedformComponent', () => {
  let component: PlacesvisitedformComponent;
  let fixture: ComponentFixture<PlacesvisitedformComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesvisitedformComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlacesvisitedformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
