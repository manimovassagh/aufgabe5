import React, { ReactElement } from 'react'
import Book from '../types/Book'

interface Props {
  showDetail: (book: Book) => void;
  book: Book
}


export default function BookListItem(props: Props): ReactElement {

  const book = props.book

  return (
    <div onClick={() => props.showDetail(book)} key={book.isbn} className="item">
      {
        book.thumbnails && book.thumbnails.length !== 0 &&
        <img className="ui tiny image" alt="" src={book.thumbnails[0].url} />
      }
      <div className="content">
        <div className="header">{book.title}</div>
        <div className="description">{book.subtitle}</div>
        <div className="metadata">
          {book.authors.map((author, index) =>
            <span key={author}>
              {author}
              {index !== book.authors.length - 1 && ', '}
            </span>
          )}
          <br />
          ISBN {book.isbn}
        </div>
      </div>
    </div>
  )
}
