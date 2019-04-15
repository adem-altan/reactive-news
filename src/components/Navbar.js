import React, { Component } from "react";
import axios from 'axios';
import Button from '@material-ui/core/Button';
import shortid from 'shortid';
import {connect} from 'react-redux';
import Select from './DialogSelect';
import Icon from '@material-ui/core/Icon';

const environment = {
    APIKEY: '810f45c7213f4a46bc5ab820d0b0ab7a',
    APIEndPoint: 'https://newsapi.org/v2/'
  };
class Navbar extends Component {
  makeQuery = (countryCode,category) => {
    axios.get(environment.APIEndPoint+'top-headlines?country='+countryCode+'&category='+category+'&apiKey='+environment.APIKEY)
        .then(response => {
            const articles = response.data.articles;
            this.props.getArticlesByCategory(articles);
        });
  }
  state = {
    isLoading: 'true',
    categories: []
  };
  componentWillMount() {
      axios.get(environment.APIEndPoint+'sources?apiKey='+environment.APIKEY)
      .then(response => {
          this.state.categories.push(new Set(response.data.sources.map((cat) => cat.category)));
          this.setState(this.state.categories);
      })
  }
  render() {
    const  {countryCode}  = this.props;
    return (
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper">
            <div className="current-country">
            <a>Country: {countryCode}</a>
          </div>
            <a href="#" className="brandlogo">What's News?</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            { 
              this.state.categories.map(cat => Array.from(cat).map(c => 
              {
                return (
                  <li className="category-items" key={shortid.generate()}>
                    <Button onClick={ () => this.makeQuery(countryCode,c) } variant="contained" color="primary">
                      {c}
                      <Icon className="rightIcon">question_answer</Icon>
                    </Button>
                  </li>);
              }))
            }
              <div className="select-country">
                <Select />
              </div>
            </ul>
        </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    countryCode: state.countryCode
  }
}

const mapDispatchToStore = (dispatch) => {
  return {
    getArticlesByCategory: (article) => {dispatch({type: "GET_ARTICLES_BY_CATEGORY", article: article})}
  }
}
export default connect(mapStateToProps, mapDispatchToStore)(Navbar);

