import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle } from 'reactstrap';

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
                    -- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}
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
