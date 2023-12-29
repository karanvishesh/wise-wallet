import { Component } from '@angular/core';
import { SliderComponent } from './slider/slider.component';
import { RevenueService } from '../../../services/revenue.service';
import { CommaSeparatedPipe } from '../../../utils/pipes/comma-seperated.pipe';

@Component({
  selector: 'app-impact-section',
  standalone: true,
  imports: [SliderComponent, CommaSeparatedPipe],
  templateUrl: './impact-section.component.html',
  styleUrl: './impact-section.component.css'
})
export class ImpactSectionComponent {
  income: number = 0;
  savingsPercentage: number = 20;
  minSavings: number = 1600;
  maxSavings: number = 2400;

  constructor(private revenueService: RevenueService) {
    this.revenueService.getRevenue().subscribe((revenue: number) => {
      this.income = revenue;
      this.adjustSavingsPercentage();
    });
  }

  adjustSavingsPercentage(): void {
    if (this.income < 30000) {
      this.savingsPercentage = 10;
    } else if (this.income >= 30000 && this.income < 70000) {
      this.savingsPercentage = 15;
    } else {
      this.savingsPercentage = 20;
    }
    this.calculateSavings();
  }

  calculateSavings(): void {
    const savingsPercentageDecimal = this.savingsPercentage / 100;
    const savings = this.income * savingsPercentageDecimal;

    this.minSavings = Math.round(savings * 0.8);
    this.maxSavings = Math.round(savings * 1.2);
  }
}
