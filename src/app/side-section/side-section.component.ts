import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-section',
  templateUrl: './side-section.component.html',
  styleUrls: ['./side-section.component.css'],
})
export class SideSectionComponent {
  @Input() flag = { image: '', desc: '' };
  @Input() coatOfArms: String = '';
}
