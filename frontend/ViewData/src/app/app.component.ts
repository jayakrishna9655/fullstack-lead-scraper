import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'ViewData';
  constructor(private http: HttpClient) { }
  data: any[] = [];
  ngOnInit(): void {
    this.getData()
  }

  private apiUrl = 'http://localhost:8080/api/leads/all';

  getData() {
    this.http.get<any[]>(this.apiUrl)
      .subscribe({
        next: (res) => {
        this.data = res;
          console.log(this.data);
        },
        error: (err) => {
          console.log("No data", err);
        }
      });
  }
}
