import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { FirebaseService } from '../../services/firebase.service';
import { DoseLog, Medication } from '../../models/medication.model';
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
  doses: DoseLog[]          = [];
  medications: Medication[] = [];
  searchTerm = '';

  // Flattened rows fed into <m-table>
  tableRows: any[] = [];
  tableColumns = ['dateTaken', 'medicationName', 'notes'];
  tableHeaders = ['Date & Time Taken', 'Medication', 'Notes'];

  // Data fed into <m-timeserieschart>
  chartData: { date: string; value: number }[] = [];

  // ID of the most recently logged dose (for highlight)
  latestId: string | undefined;

  private subs: Subscription[] = [];

  constructor(private firebase: FirebaseService) {}

  ngOnInit() {
    this.subs.push(
      this.firebase.getDoses().subscribe(d => {
        this.doses = [...d].sort(
          (a, b) => new Date(b.dateTaken).getTime() - new Date(a.dateTaken).getTime()
        );
        this.latestId = this.doses[0]?.id;
        this.buildTableRows();
        this.buildChartData();
      }),
      this.firebase.getMedications().subscribe(m => {
        this.medications = m;
        this.buildTableRows();
      })
    );
  }

  private buildTableRows() {
    this.tableRows = this.doses.map(dose => ({
      id:             dose.id,
      dateTaken:      new Date(dose.dateTaken).toLocaleString(),
      medicationName: dose.medicationName,
      notes:          dose.notes || '—',
      _isLatest:      dose.id === this.latestId,
    }));
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
