import React from 'react'
import PropTypes from 'prop-types'
import './author-details.css'
import BookList from '../book-list/book-list'
import BookControls from '../book-controls/book-controls'

const AuthorDetails = ({ author, onAddBook, onDeleteBook }) => (
	<div className="author-info">
		<h1>{`Name: ${author.name}`}</h1>
		<h2>{`Books: ${author.books.length}`}</h2>
		<div className="books">
			<BookList
				list={author.books}
				onDeleteBook={bookId => onDeleteBook(author.id, bookId)}
			/>
			<BookControls onAdd={onAddBook} />
		</div>
	</div>
)

AuthorDetails.propTypes = {
	author: PropTypes.any,
	onAddBook: PropTypes.any,
	onDeleteBook: PropTypes.any,
}

export default AuthorDetails
