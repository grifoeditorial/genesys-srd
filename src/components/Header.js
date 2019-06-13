import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import GitHubButton from 'react-github-btn'
import Img from "gatsby-image";
import Link from "./link";
import './styles.css';

import Sidebar from "./sidebar";

const Header = ({location}) => (
  <StaticQuery
    query={
      graphql`
        query headerTitleQuery {
          site {
            siteMetadata {
              headerTitle
              githubUrl
              helpUrl
              tweetText
              logo
              headerLinks {
                link
                text
              }
            }
          },
          imageSharp {
            fixed (width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        `}
    render={(data) => {
      const twitter = require('./images/twitter.svg');
      const {
        site: {
          siteMetadata: {
            headerTitle,
            githubUrl,
            helpUrl,
            tweetText,
            headerLinks
          }
        }
      } = data;
      return (
        <div className={'navBarWrapper'}>
          <nav className={'navbar navbar-default navBarDefault'}>
            <div className={'navbar-header'}>
              <button type="button" className={'navbar-toggle collapsed navBarToggle'} data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span className={'sr-only'}>Toggle navigation</span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
                <span className={'icon-bar'}></span>
              </button>
              <Link to="/" className={'navbar-brand navBarBrand'}>

              <Img fixed={data.imageSharp.fixed} />
                {headerTitle}
              </Link>
            </div>
            <div id="navbar" className={'navbar-collapse collapse navBarCollapse'}>
              <div className={'visible-xs'}>
                <Sidebar location={location} />
                <hr/>
              </div>
                <ul className={'nav navbar-nav navBarUL'}>
                  {githubUrl !== '' ?
                    (<li className={'githubBtn'}>
                      <GitHubButton href={githubUrl} data-show-count="true" aria-label="Star on GitHub">Star</GitHubButton>
                    </li>) : null}
                  {helpUrl !== '' ?
                    (<li><a href={helpUrl}>Need Help?</a></li>) : null
                  }
                </ul>
              }
              <ul className={'nav navbar-nav navBarUL navbar-right'}>
                {tweetText !== '' ?
                  (<li>
                    <a href={'https://twitter.com/intent/tweet?&text=' + tweetText} target="_blank">
                      <img className={'twitterIcon'} src={twitter} alt={'Twitter'} />
                    </a>
                   </li>) : null
                }
                {headerLinks.map((link, key) => {
                  if(link.link !== '' && link.text !== '') {
                    return(
                      <li key={key}>
                        <a href={link.link} target="_blank">{link.text}</a>
                      </li>
                    );
                  }
                })}
              </ul>
            </div>
          </nav>
        </div>
      );
    }}
  />
);

export default Header;
