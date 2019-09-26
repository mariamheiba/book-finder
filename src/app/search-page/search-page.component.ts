import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {

  form: FormGroup;
  constructor(private fb:FormBuilder,private http:HttpClient) { 
    this.form=this.fb.group({
      searchBox: ['',[Validators.required]]

      });

  }

  searchTerm :any;
  books:any=[];
  booksG:any=[];
  noBooks:boolean=true;
  showSpinner: boolean= false;

  ngOnInit() {
  }

  searchClicked()
  {
this.showSpinner=true;
    const val =this.form.value;
    this.searchTerm=val.searchBox;
    console.log(this.form.value);
    this.noBooks=false;
    this.http.get<any>('https://www.googleapis.com/books/v1/volumes?q='+this.searchTerm).subscribe((book:any)=>
    {
      this.showSpinner=false;
      this.books=book.items;
      console.log(this.books);
console.log(this.books[0].volumeInfo.imageLinks)
      
    }
    
    );
   
    
  
  }

}
