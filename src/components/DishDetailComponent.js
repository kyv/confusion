import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

function formatDate(date) {
    const monthNames = [
      "Jan", "Feb", "Mar",
      "April", "May", "June", "July",
      "Aug", "Sep", "Oct",
      "Nov", "Dec"
    ];
    const d = new Date(date);
    const m = monthNames[d.getMonth()];
    const s = `${m} ${d.getDate()}, ${d.getFullYear()}`;
    return s;
}

class DishDetail extends Component {

    renderDish(dish) {
      if (dish != null) {
        return(
          <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                  <CardTitle>{dish.name}</CardTitle>
                  <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
          </div>
        );
    } else
        return(
          <div></div>
      );
    }

    renderComments(dish) {
      if (dish != null) {
        const comments = dish.comments.map((comment) => {
            return (
                <li key={comment.id}>
                <div>
                  <div className="comment-text">
                    {comment.comment}
                  </div>
                  <div className="comment-author">
                    -- {comment.author}, {formatDate(comment.date)}
                  </div>
                </div>
                </li>
            );
        });
        return (
          <div className="col-12 col-md-5 m-1">
          <h4>Comments</h4>
            <ul className="list-unstyled comments">
              {comments}
            </ul>
          </div>
        )
      } else {
        return (
          <div></div>
        )
      }

    }
    render() {
      const dish = this.props.dish;
          return(
              <div className="row">
                  {this.renderDish(dish)}
                  {this.renderComments(dish)}
              </div>
          );
      }
}

export default DishDetail;
