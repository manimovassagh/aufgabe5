/* eslint-disable indent */
import React, { ReactElement } from 'react'
import Book from '../types/Book'
import _ from 'lodash'
import axios from 'axios'


interface Props {
  showList: () => void;
  book: Book;
}

export default function BookDetails(props: Props): ReactElement {
  // console.log(props)
  const book = props.book
  const getRatings = (): number[] => {
    const ratingArray = []
    for (let i = 0; i < (props.book.rating || 0); i++) { ratingArray.push(i) }
    return ratingArray
  }
  //delete method for delete button
  const onDelete = () => {
    axios({
      method: 'delete',
      url: `https://api3.angular-buch.com/books/${book.isbn}`
    })
      .then(props.showList)
  }

  return (
    <>
      <div>
        <h1>{book.title}</h1>
        <div className="ui divider"></div>
        <div className="ui grid">
          <div className="four wide column">
            <h4>Autoren</h4>
            {book.authors.map((author) =>
              <div key={author}>{author}</div>
            )}
          </div>
          <div className="four wide column">
            <h4>ISBN</h4>
            {book.isbn}
          </div>
          <div className="four wide column">
            <h4>Erschienen</h4>
            <p>
              {new Date(book.published).toLocaleDateString()}
            </p>
          </div>
          <div className="four wide column">
            <h4>Rating</h4>
            {_.fill(getRatings(), <i className="yellow star icon" />)}
          </div>
        </div>
        <h4>Beschreibung</h4>
        {book.description}
        <div className="ui small images">
          jedes BOOK_THUMBNAIL jeweils zu einem img Element mappen
          {book.thumbnails.map((thumbnail) =>
          <img src={thumbnail.url} alt={thumbnail.title} key={thumbnail.title} />
        )}
        </div>
      </div>

      <button onClick={() => props.showList()} className="ui violet button">Back to Home</button>
      <button onClick={onDelete} className="ui red button">Delete</button>
    </>
  )
}
