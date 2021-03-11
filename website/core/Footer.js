/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
	docUrl(doc) {
		const baseUrl = this.props.config.baseUrl;
		const docsUrl = this.props.config.docsUrl;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		return `${baseUrl}${docsPart}${doc}`;
	}

	render() {
		return (
			<footer className="nav-footer" id="footer">
				<section className="sitemap">
					<div>
						<h5>Docs </h5>
						<a
							target="_blank"
							href="https://ktern.com/articles?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Articles
						</a>
						<a
							target="_blank"
							href="https://ktern.com/content-repository?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Content Repository
						</a>
						<a
							target="_blank"
							href="https://ktern.com/resources/compare-with-competitors?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Compare KTern
						</a>
						<a
							target="_blank"
							href="https://ktern.com/resources/faq?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							FAQ
						</a>
					</div>
					<div>
						<h5>Community</h5>
						<a
							target="_blank"
							href="https://www.linkedin.com/company/ktern?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							LinkedIn
						</a>
						<a
							target="_blank"
							href="https://twitter.com/KTernOfficial?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Twitter
						</a>
					</div>
					<div>
						<h5>More</h5>
						<a
							target="_blank"
							href="https://demo.ktern.com?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Access DEMO
						</a>
						<a
							target="_blank"
							href="https://app.ktern.com?utm_source=product-documentation&utm_medium=help-ktern-com"
						>
							Access TRIAL
						</a>
					</div>
				</section>

				<a
					href="https://www.sapappcenter.com/en/product/display-0000059068_live_v1/KTern.AI%20for%20SAP%20Digital%20Transformation%20Workplace"
					target="_blank"
					rel="noreferrer noopener"
					className="fbOpenSource"
				>
					<img src={`${this.props.config.baseUrl}img/appcenter.png`} alt="" width="170" height="45" />
				</a>
				<section className="copyright">© KTern. All rights reserved.</section>
			</footer>
		);
	}
}

module.exports = Footer;
