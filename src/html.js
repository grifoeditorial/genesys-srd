import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

export default class HTML extends React.Component {
    render() {
        return (
            <html lang="pt" {...this.props.htmlAttributes}>
                <head>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    {config.siteMetadata.ogImage ? (
                        <meta
                            property="og:image"
                            content={config.siteMetadata.ogImage}
                        />
                    ) : null}
                    <meta
                        property="twitter:card"
                        content="summary_large_image"
                    />
                    {config.siteMetadata.ogImage ? (
                        <meta
                            property="twitter:image"
                            content={config.siteMetadata.ogImage}
                        />
                    ) : null}
                    {config.siteMetadata.favicon ? (
                        <link
                            rel="shortcut icon"
                            type="image/svg"
                            href={config.siteMetadata.favicon}
                        />
                    ) : null}

                    <link rel="stylesheet" href={'/bootstrap-3.3.7.min.css'} />

                    <script src={'/jquery-3.3.1.min.js'} />

                    <script src={'/bootstrap-3.3.7.min.js'} />

                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
            $(document).on('click','.navbar-collapse.in',function(e) {
              if( $(e.target).is('a') ) {
                $(this).collapse('hide');
              }
            });
            `,
                        }}
                    />
                </body>
            </html>
        )
    }
}

HTML.propTypes = {
    htmlAttributes: PropTypes.object,
    headComponents: PropTypes.array,
    bodyAttributes: PropTypes.object,
    preBodyComponents: PropTypes.array,
    body: PropTypes.string,
    postBodyComponents: PropTypes.array,
}
