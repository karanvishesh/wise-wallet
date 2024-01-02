import { Component, OnInit } from '@angular/core';
import { SliderModule } from 'primeng/slider';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RevenueService } from '../../../../services/revenue.service';
import { CommaSeparatedPipe } from '../../../../utils/pipes/comma-seperated.pipe';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [SliderModule, FormsModule, CommonModule, CommaSeparatedPipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css',
})
export class SliderComponent implements OnInit{
  minValue!: number;
  maxValue!: number;
  value!: number;
  revenue!: number;
  constructor(private revenueService: RevenueService) { }
  ngOnInit() {
    this.value = 20000;
    this.minValue = 10000;
    this.maxValue = 100000;
    this.revenue = this.value;
  }

  onSlideEnd(event: any) {
    this.revenueService.setRevenue(event.value);
    this.revenue = event.value;
  }

  onInputChange(event: any) {
    this.revenueService.setRevenue(event.target.value);
    this.revenue = event.target.value;
  }
}
