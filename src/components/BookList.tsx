import Book from '../types/Book';
import BookListItem from './BookListItem'
import React, { ReactElement, useEffect, useState } from 'react'
import axios from 'axios';
import Loader from './Loader'


interface Props {
  showDetail: (book: Book) => void;

}


export default function BookList(props: Props): ReactElement {
  const [fetchData, setFetchData] = useState<Book[]>()

  const getBooks = () => {
    axios({
      method: 'GET',
      url: 'https://api3.angular-buch.com/books'
    }).then(
      res => setFetchData(res.data)
    )

  }

  useEffect(getBooks, [])

  // define a reset button 
  const onReset = () => {
    axios({
      method: 'delete',
      url: 'https://api3.angular-buch.com/books'
    }).then(getBooks)
  }


  // ***********that is vey very important to give !!!!!
  if (!fetchData) { return <Loader /> }

  return fetchData.length
    ? (
      <div className="ui middle aligned selection divided list">
        {fetchData.map((book) =>
          //by using showdetails we set books in state
          <BookListItem key={book.isbn} book={book} showDetail={props.showDetail} />
        )}

      </div>
    )
    : (
      <div className="ui message">
        <div className="header">
          There is No More Books !!
          {' '}
          <button className="ui button" onClick={onReset}>Reset Server To default</button>
        </div>
      </div>

    )
}
