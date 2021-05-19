import './App.css';
import BookList from './components/BookList'
import BookDetails from './components/BookDetails'
import React, { ReactElement, useState } from 'react';
import Book from './types/Book';


function App(): ReactElement {
  const [book, setBook] = useState<Book>()

  //reset to undefined for going back to home
  const showList = () => {
    setBook(undefined)
  }

  //helper function to set state of books inside
  const showDetail = (book: Book) => {
    console.log(book)
    setBook(book)
  }
  return (
    <div className="ui container">
      {book ?
        <BookDetails showList={showList} book={book} />
        :
        <BookList showDetail={showDetail} />
      }
    </div>
  );
}

export default App;
