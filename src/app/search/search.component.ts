import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit{
 
  searchForm: FormGroup;
  items: { name: string, imageUrl: string }[] = [
    { name: 'RK Cotton Seeds', imageUrl: 'assets/images/9.jpg' },
    { name: 'RK Groundnut Seeds', imageUrl: 'assets/images/10.jpg' },
    { name: 'RK Maiza Seeds', imageUrl: 'assets/images/11.jpg' },
    { name: 'RK Jowar Seeds', imageUrl: 'assets/images/20.jpeg' },
    { name: 'RK Green gram Seeds', imageUrl: 'assets/images/21.jpeg' },
    { name: 'RK Chilli Seeds', imageUrl: 'assets/images/22.jpeg' },
    { name: 'RK Wheat Seeds', imageUrl: 'assets/images/wheat.jpg' },
    { name: 'RK Sesame Seeds', imageUrl: 'assets/images/sesame.jpg' }
  ];
  filteredItems: { name: string, imageUrl: string }[] = [];

  constructor(private fb: FormBuilder) {
    this.searchForm = this.fb.group({
      query: ['']
    });
  }

  ngOnInit() {
    this.filteredItems = this.items;

    this.searchForm.get('query')?.valueChanges
      .pipe(debounceTime(300))
      .subscribe(query => {
        this.filterItems(query);
      });
  }

  filterItems(query: string) {
    this.filteredItems = query
      ? this.items.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
      : this.items;
  }

  clearSearch() {
    this.searchForm.get('query')?.reset();
  }
}
