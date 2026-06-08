import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { DoseLog } from '../../models/medication.model';
import { MTableComponent } from '../../m-framework/components/m-table/m-table.component';
import { MTimeseriesChartComponent } from '../../m-framework/components/m-timeserieschart/m-timeserieschart.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule, FormsModule, MTableComponent, MTimeseriesChartComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css',
})
export class HistoryComponent implements OnInit, OnDestroy {
  doses: DoseLog[] = [];
  searchQuery = '';
  chartData: { date: string; value: number }[] = [];
  tableRows: any[] = [];
  private subs: Subscription[] = [];

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.subs.push(
      this.firebase.getDoses().subscribe(d => {
        this.doses = [...d].sort(
          (a, b) => new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()
        );
        this.rebuildViewModels();
      })
    );
  }

  get filtered(): DoseLog[] {
    const q = this.searchQuery.toLowerCase().trim();
    if (!q) return this.doses;
    return this.doses.filter(d => d.medicationName.toLowerCase().includes(q));
  }

  rebuildViewModels() {
    const filtered = this.filtered;
    const mostRecentId = this.doses[0]?.id;

    this.tableRows = filtered.map(d => ({
      dateTaken: new Date(d.dateTaken).toLocaleString(),
      medicationName: d.medicationName,
      notes: d.notes || '—',
      highlight: d.id === mostRecentId,
    }));

    const today = new Date();
    this.chartData = [];

    for (let i = 6; i >= 0; i--) {
      const dt = new Date(today);
      dt.setDate(today.getDate() - i);

      const iso = dt.toISOString().slice(0, 10);
      const count = this.doses.filter(x => x.dateTaken.startsWith(iso)).length;

      this.chartData.push({
        date: iso,
        value: count,
      });
    }
  }

  onSearchChange() {
    this.rebuildViewModels();
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}