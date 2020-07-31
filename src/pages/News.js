import React, { Component, Fragment } from 'react';
import TimeAgo from 'timeago-react';
import {
  Card,
  CardTitle,
  CardText,
  CardImg,
  Row,
  Col,
  Button,
} from 'reactstrap';
import { getNews } from '../services/resourseService';
import { checkNavigator } from '../utils/utils';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      news: {
        category: 'all',
        country: 'India',
        data: {},
      },
      categories: [
        {
          label: 'all',
          color: 'primary',
        },
        {
          label: 'business',
          color: 'secondary',
        },
        {
          label: 'science',
          color: 'danger',
        },
        {
          label: 'technology',
          color: 'info',
        },
        {
          label: 'entertainment',
          color: 'success',
        },
        {
          label: 'sports',
          color: 'info',
        },
        {
          label: 'health',
          color: 'warning',
        },
      ],
    };
  }

  componentDidMount() {
    this.getNewsData({ category: '' });
  }

  onChangeCategory = (value) => {
    let { news } = this.state;
    news.category = value;
    this.getNewsData({ category: value });
    this.setState({ news });
  };

  async getNewsData(obj) {
    let { news, isLoading } = this.state;

    isLoading = true;
    this.setState({ isLoading });

    const result = await getNews({ country: 'in', category: obj.category });
    if (result) {
      news.data = result.data;
      this.setState({ news });
    }
    isLoading = false;
    this.setState({ isLoading });
  }

  render() {
    const { news, categories, isLoading } = this.state;
    console.log(news);
    return (
      <div className="padding-20">
        <Row className="margin-top-20">
          <Col xl="3" lg="3" md="3" sm="12" xs="12">
            <div>
              <h6 className="font-weight-700">Category</h6>
              {categories.map((category, index) => (
                <Fragment key={category.label}>
                  <Button
                    onClick={() => this.onChangeCategory(category.label)}
                    className="text-capitalize"
                    color={category.color}
                  >
                    {category.label}
                  </Button>{' '}
                  {(index === 0 || index === 3) && (
                    <>
                      <br />
                      <br />
                    </>
                  )}
                </Fragment>
              ))}
              <br /> <br />
              {checkNavigator() === 'desktop' && (
                <img
                  onClick={() => this.props.history.push('/covid19')}
                  src="/img/advert1-covid19.png"
                  alt="covid19 India"
                  width="100%"
                  className="cursor-pointer"
                />
              )}
            </div>
          </Col>
          <Col>
            <h5>Top Stories | <span className="text-capitalize font-size-15">{news.category}</span></h5>

            {isLoading ? (
              <div>
                <img
                  src="/img/loading-spinner.gif"
                  alt="isLoading"
                  height="90px"
                />
              </div>
            ) : (
              <>
                {' '}
                {news.data && news.data.totalResults > 0 && (
                  <>
                    {(news.data.articles || []).map((article, index) => (
                      <Card
                        key={index}
                        body
                        outline
                        color="warning"
                        className="margin-top-10"
                      >
                        <Row>
                          <Col xl="2" lg="2" md="2" sm="12" xs="12">
                            <CardImg
                              className="cursor-pointer"
                              onClick={() => window.open(article.url, '_blank')}
                              src={
                                article.urlToImage || '/img/no-image-icon-6.png'
                              }
                              alt={article.title}
                            ></CardImg>
                          </Col>
                          <Col>
                            <CardTitle title={article.title}>
                              <a
                                target="_blank"
                                rel="noopener noreferrer"
                                href={article.url}
                              >
                                {article.title}
                              </a>
                            </CardTitle>
                            <CardText>{article.description}</CardText>
                            <CardText>
                              <small className="text-muted">
                                <span>{article.source.name}</span>&nbsp;|&nbsp;
                                <TimeAgo datetime={article.publishedAt} />
                              </small>
                            </CardText>
                            {/* <CardLink href="#">View full news</CardLink> */}
                          </Col>
                        </Row>
                      </Card>
                    ))}
                  </>
                )}
                <div>
                  Source:{' '}
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://newsapi.org/"
                  >
                    NewsAPI
                  </a>
                </div>
              </>
            )}
          </Col>
        </Row>
      </div>
    );
  }
}

export default News;
