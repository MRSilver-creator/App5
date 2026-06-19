import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MHeaderComponent }   from '../../m-framework/components/m-header/m-header.component';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { MMainMenuComponent }  from '../../m-framework/components/m-main-menu/m-main-menu.component';
import { MAhaComponent }       from '../../m-framework/components/m-aha/m-aha.component';
import { MResultBoxComponent } from '../../m-framework/components/m-result-box/m-result-box.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    MHeaderComponent,
    MContainerComponent,
    MMainMenuComponent,
    MAhaComponent,
    MResultBoxComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  appTitle    = 'MedTrack';
  navFeatures = ['Identify', 'Library', 'Log Dose', 'History'];

  stats = [
    { label: 'Medications Tracked', value: '12' },
    { label: 'Doses Logged Today',  value: '3'  },
    { label: 'Upcoming Doses',      value: '5'  },
  ];

  constructor(private router: Router) {}

  onMenuClick(item: string): void {
    this.router.navigate([item.replace(/\s+/g, '-').toLowerCase()]);
  }
}
