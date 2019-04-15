import React, { Component } from "react";
import { connect } from "react-redux";

class Content extends Component {
  render() {
    const { articles } = this.props;
    const articleList = articles.length ? (
      articles.map(article => {
        return (
          <div className="column" key={article.title}>
            <div className="card">
              <div className="card-image waves-effect waves-block waves-light">
                <img alt="" className="activator" src={article.urlToImage} />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  <i className="material-icons right">more_vert</i>
                  {article.title.substring(0, 50)}
                </span>
                <p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={article.url}
                  >
                    View Source
                  </a>
                </p>
              </div>
              <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                  {article.content}
                  <i className="material-icons right">close</i>
                </span>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="empty-article-list">
        <h4>Please Select a Category</h4>
      </div>
    );
    return <div className="row">{articleList}</div>;
  }
}
const mapStateToProps = state => {
  return {
    articles: state.articles
  };
};

export default connect(mapStateToProps)(Content);
