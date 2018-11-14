import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired
  };
  state: {
    query: '',
    newBooks: [],
    searchErr: false
  };

  getBook = event => {
    const query = event.target.value;
    this.setState( {query});

    if(query){
      BooksAPI.search(query.trim(),20).then(books => {
        books.length > 0
        ? this.setState({ newBooks : books, searchErr: false})
        : this.setState( { newBooks: [],searchErr: true });
      });
    } else {
      this.setState( {newBooks: [],searchErr: false} );
    }
  };

  render(){
    const { query, newBooks, searchErr } = this.state;
    const { books, showSearchPage } = this.props;
    return(
      <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
        Close
        </Link>
      </div>
      </div>
    );
  }

}

export default Search;
