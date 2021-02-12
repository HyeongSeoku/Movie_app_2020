import React from "react";
import "./Detail.css"
class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <div className="container__data">
      <div className="detail__title">{location.state.title}</div>
      <div className="detail__year">{location.state.year}</div>
      <img className="detail__poster" src={location.state.poster} alt={location.state.title}/>
      <div className="detail__genres">{location.state.genres}</div>
      </div>
      <div className="detail__summary_container">
        <div>{location.state.summary}</div>
        </div>
      </div>
      );
      
    } else {
      return null;
    }
  }
}
export default Detail;