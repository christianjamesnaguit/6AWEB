import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'booksapp';
  //set the link of the based route
  readonly APIUrl="http://localhost:5038/api/books/";


  constructor(private http:HttpClient){
  }
  //initialize the books array
  books:any=[];

  refreshBooks(){
    // Add cache-busting param to always get fresh data
    const url = this.APIUrl+'GetBooks?ts=' + new Date().getTime();
    this.http.get(url).subscribe((data:any)=>{
      this.books = data;
    })
  }
  ngOnInit(){
    // Always fetch books on page load
    this.refreshBooks();
  }

  addBook(){
    var newBook=(<HTMLInputElement>document.getElementById("newBook")).value;
    var newDesc=(<HTMLInputElement>document.getElementById("newDesc")).value;
    var newPrice=(<HTMLInputElement>document.getElementById("newPrice")).value;
    var newAuthor=(<HTMLInputElement>document.getElementById("newAuthor")).value;
    var newYear=(<HTMLInputElement>document.getElementById("newYear")).value;
    var formData=new FormData();
    formData.append("title", newBook);
    formData.append("description", newDesc);
    formData.append("price", newPrice.toString());
    formData.append("author", newAuthor);
    formData.append("year", newYear.toString());
    this.http.post(this.APIUrl+'AddBook', formData).subscribe((data:any)=>{
      this.books = data;
      // Clear form fields after add
      (<HTMLInputElement>document.getElementById("newBook")).value = "";
      (<HTMLInputElement>document.getElementById("newDesc")).value = "";
      (<HTMLInputElement>document.getElementById("newPrice")).value = "";
      (<HTMLInputElement>document.getElementById("newAuthor")).value = "";
      (<HTMLInputElement>document.getElementById("newYear")).value = "";
    })
  }

  deleteBook(id:any){
    console.log('Attempting to delete book with id:', id, typeof id);
    const bookId = typeof id === 'object' && id.hasOwnProperty('$oid') ? id['$oid'] : id;
    this.http.delete(this.APIUrl+'DeleteBook?id='+bookId).subscribe({
      next: data => {
        this.refreshBooks();
      },
      error: err => {
        this.refreshBooks();
      }
    });
  }
}

