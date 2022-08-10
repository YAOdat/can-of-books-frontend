import React from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import './style.css'



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  getBooks = async () => {
    const bookData = await axios.get('http://localhost:3001/books');
    
    this.setState({ books: bookData.data });

  }


    componentDidMount() {
      this.getBooks();
      

    }
  render() {
   
    /* TODO: render all the books in a Carousel */
      console.log(this.state.books[1])
    return (
      <>

<Carousel variant="dark" className="Carsouel">


{this.state.books.map((item,index) => (
      <Carousel.Item interval={2000} key={index}> 
        <h3>{item.title}</h3>
        <img
          className="d-block w-25"
          src={item.image}
          alt={item.title}
        />
         
        <Carousel.Caption className="Carsouel">
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
      
      ))}




    </Carousel>

 
</>
    )
  }
}

export default BestBooks;
