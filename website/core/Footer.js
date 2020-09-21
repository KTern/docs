/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require("react");

class Footer extends React.Component {
  docUrl(doc) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ""}`;
    return `${baseUrl}${docsPart}${doc}`;
  }

  render() {
    return (
      <footer className='nav-footer' id='footer'>
        <section className='sitemap'>
          <a href={this.props.config.baseUrl} className='nav-home'>
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width='90'
                height='25'
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href='https://ktern.com/articles/'>Articles</a>
            <a href='https://ktern.com/content-repository/'>
              Content Repository
            </a>
            <a href='https://ktern.com/resources/compare-with-competitors'>
              Compare KTern
            </a>
            <a href='https://ktern.com/resources/faq'>FAQ</a>
          </div>
          <div>
            <h5>Community</h5>
            <a href='https://www.linkedin.com/company/ktern'>LinkedIn</a>
            <a href='https://twitter.com/KTernOfficial'>Twitter</a>
          </div>
          <div>
            <h5>More</h5>
            <a href='https://demo.ktern.com'>Access DEMO</a>
            <a href='https://app.ktern.com'>Access TRIAL</a>
          </div>
        </section>

        <a
          href='https://www.sapappcenter.com/en/product/display-0000059068_live_v1/KTern.AI%20for%20SAP%20Digital%20Transformation%20Workplace'
          target='_blank'
          rel='noreferrer noopener'
          className='fbOpenSource'
        >
          <img
            src={`${this.props.config.baseUrl}img/appcenter.svg`}
            alt=''
            width='170'
            height='45'
          />
        </a>
        <section className='copyright'>© KTern. All rights reserved.</section>
      </footer>
    );
  }
}

module.exports = Footer;
