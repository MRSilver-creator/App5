import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  readonly navItems = ['About', 'Features', 'Get Started'];

  readonly stats = [
    { label: 'AI-Powered', value: '✦' },
    { label: 'Gemini Vision', value: 'AI' },
    { label: 'Real-time sync', value: '∞' },
    { label: 'Confidence tiers', value: '3' },
  ];

  readonly features = [
    { no: '01', icon: '📷', title: 'Camera / Upload', description: 'Take a live photo or upload an image of any medication packaging.' },
    { no: '02', icon: '🤖', title: 'Gemini AI Analysis', description: 'Gemini Vision identifies the medication, active ingredients, dosage, uses, and warnings instantly.' },
    { no: '03', icon: '🔒', title: 'Confidence Rating', description: 'Every result carries a High / Medium / Low confidence score so you always know how reliable the reading is.' },
    { no: '04', icon: '📚', title: 'Personal Library', description: 'Save identified medications to your cloud library with an optional nickname for quick reference.' },
    { no: '05', icon: '💊', title: 'Dose Logging', description: 'Record when you took each medication and review the full history at any time.' },
    { no: '06', icon: '🔄', title: 'Real-Time Firebase', description: 'All data is stored and synced via Firebase Realtime Database — available instantly across devices.' },
  ];

  constructor(private router: Router) {}

  goToIdentify(): void { this.router.navigate(['/identify']); }

  onNavClick(item: string): void {
    if (item === 'Get Started') {
      this.goToIdentify();
      return;
    }
    const target = document.getElementById(item.toLowerCase());
    target?.scrollIntoView({ behavior: 'smooth' });
  }
}
