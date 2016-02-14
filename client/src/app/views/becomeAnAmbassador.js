import React from 'react';
import DocMeta from 'react-doc-meta';
import DocTitle from 'components/docTitle';
import config from 'config';

import Debug from 'debug';
let debug = new Debug("views:main");

export default React.createClass({

    mixins: [
        require('react-intl').IntlMixin
    ],

    componentDidMount() {
        debug("componentDidMount");
    },

    render() {
        debug("render");

        return (
            <div>
                <DocTitle
                    title="Beavr Ambassadors"
                />

            <div className="block block-lg app-block-super-beavr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-left">
                            <h1 className="block-title">{ this.getIntlMessage("ambassadorProgram.welcome") }</h1>
                            <h3 className="lead">
                                { this.getIntlMessage("ambassadorProgram.beavr-personal-assistant") }
                            </h3>
                            <h3 className="lead">
                                { this.getIntlMessage("ambassadorProgram.beavr-ambassador") }
                            </h3>

                            <a className="hidden visible-md visible-lg visible-xl" href="/register-ambassador">
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                            <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.ambassador') }>
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>

                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-left">
                            <img className="img-responsive reset-margins-xs pull-left" src="../assets/img/ambassador-rocket.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-super-beavr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6">
                            <img className="img-responsive reset-margins-xs pull-right" src="../assets/img/ambassador-rally.png" data-transition="entrance" />
                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-left">
                            <h1 className="block-title">{ this.getIntlMessage("ambassadorProgram.why") }</h1>
                            <h3 className="lead">
                                <strong>{ this.getIntlMessage("ambassadorProgram.experience-for-life-1") }</strong> { this.getIntlMessage("ambassadorProgram.experience-for-life") }
                            </h3>
                            <h3 className="lead">
                                <strong>{ this.getIntlMessage("ambassadorProgram.networking-what-1") }</strong> { this.getIntlMessage("ambassadorProgram.networking-what") }
                            </h3>

                            <a className="hidden visible-md visible-lg visible-xl" href="/register-ambassador">
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                            <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.ambassador') }>
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="block block-lg app-block-super-beavr">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-lg-push-6 col-sm-6 text-left">
                            <h1 className="block-title">{ this.getIntlMessage("ambassadorProgram.what1") }</h1>
                            <h3 className="lead">
                                <strong>{ this.getIntlMessage("ambassadorProgram.organization1") }</strong> { this.getIntlMessage("ambassadorProgram.organization") }
                            </h3>
                            <h3 className="lead">
                                <strong>{ this.getIntlMessage("ambassadorProgram.communication1") }</strong> { this.getIntlMessage("ambassadorProgram.communication") }
                            </h3>
                            <h3 className="lead">
                                <strong>{ this.getIntlMessage("ambassadorProgram.support1") }</strong> { this.getIntlMessage("ambassadorProgram.support") }
                            </h3>

                            <a className="hidden visible-md visible-lg visible-xl" href="/register-ambassador">
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                            <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.ambassador') }>
                                <button className="btn btn-primary mt-10 btn-lg text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>

                        </div>
                        <div className="col-md-6 col-lg-pull-6 col-sm-6 text-xs-center text-sm-left">
                            <img className="img-responsive reset-margins-xs pull-left" src="../assets/img/ambassador-sailing.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <div id="#signup" className="block block-lg pt-10 pb-50 full-width">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <h1 className="block-title pt-30 pb-30">{ this.getIntlMessage("ambassadorProgram.who") }</h1>

                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.cool") } </h4>
                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.age") } </h4>
                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.digital-media") } </h4>
                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.communicative") } </h4>
                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.contacts") } </h4>
                            <h4> ✓ { this.getIntlMessage("ambassadorProgram.brand") } </h4>

                            <a className="hidden visible-md visible-lg visible-xl" href="/register-ambassador">
                                <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                            <a className="hidden visible-xs visible-sm" href={this.getIntlMessage('typeformLinks.ambassador') }>
                                <button className="btn btn-primary mt-30 btn-xl text-center m-5">{ this.getIntlMessage("ambassadorProgram.join-us-now") }</button>
                            </a>
                        </div>

                        <div className="col-md-6 col-sm-6">
                            <img className="img-responsive hidden-xs pull-right reset-margins-xs" src="../assets/img/ambassador-party.png" data-transition="entrance" />
                        </div>
                    </div>
                </div>
            </div>

            <DocMeta tags={ this.tags() } />
            </div>
        );
    },

    tags() {
        let description = config.description;

        return [
            {name: 'description', content: description},
            {name: 'twitter:card', content: description},
            {name: 'twitter:title', content: description},
            {property: 'og:title', content: description}
        ];
    }


} );
