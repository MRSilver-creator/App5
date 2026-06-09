import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { DoseLog, Medication } from '../../models/medication.model';
import { MTimeseriesChartComponent } from '../../m-framework/components/m-timeserieschart/m-timeserieschart.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, MTimeseriesChartComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit, OnDestroy {
  doses: DoseLog[]          = [];
  medications: Medication[] = [];
  searchTerm = '';
  chartData: { date: string; value: number }[] = [];

  private subs: Subscription[] = [];

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.subs.push(
      this.firebase.getDoses().subscribe(d => {
        this.doses = [...d].sort(
          (a, b) => new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()
        );
        this.buildChartData();
      }),
      this.firebase.getMedications().subscribe(m => this.medications = m)
    );
  }

  get latestId(): string | undefined {
    return this.doses[0]?.id;
  }

  get filtered(): DoseLog[] {
    const q = this.searchTerm.toLowerCase();
    if (!q) return this.doses;
    return this.doses.filter(d => d.medicationName.toLowerCase().includes(q));
  }

  thumbFor(dose: DoseLog): string {
    const med = this.medications.find(m => m.id === dose.medicationId);
    return med ? `data:${med.imageMimeType};base64,${med.imageBase64}` : '';
  }

  private buildChartData() {
    const today = new Date();
    const result: { date: string; value: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(today);
      d.setDate(d.getDate() - i);
      const dateStr = d.toISOString().slice(0, 10);
      const label   = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      const count   = this.doses.filter(dose => dose.dateTaken.slice(0, 10) === dateStr).length;
      result.push({ date: label, value: count });
    }
    this.chartData = result;
  }

  ngOnDestroy() { this.subs.forEach(s => s.unsubscribe()); }
}
