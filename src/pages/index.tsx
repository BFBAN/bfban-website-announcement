import React from "react";

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate from "@docusaurus/Translate";
import FWidget from "@site/src/components/_FWidget";
import GithubContributorsWidget from "@site/src/components/GithubContributorsWidget";

export default function Home(): React.ReactElement {
    return (
        <Layout>
            <main className="mt-5">
                <div className="mt-5 container">
                    <div className="px-4 py-5 my-5 text-center rounded-3" style={{position: 'relative'}}>
                        <FWidget></FWidget>

                        <h1 className="display-2 fw-bold text-body-emphasis">
                            <Translate id="home.title"></Translate>
                        </h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">
                                "<Translate id="home.description"></Translate>"
                            </p>
                        </div>
                    </div>
                </div>

                {/*Main Row S*/}
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 py-5">
                        <div className="col h-100">
                            <div className="rounded-4 feature bg-gradient card">
                                <div className="card-body">
                                    <div
                                        className="feature-icon d-inline-flex align-items-center justify-content-start fs-1 mb-3">
                                        <i className="bi bi-book"></i>
                                    </div>
                                    <h3 className="fs-2 text-body-emphasis">
                                        <Translate id="personnel.title"></Translate>
                                    </h3>
                                    <p>
                                    <span className="badge rounded-pill text-bg-dark">
                                        <Translate id="home.firstEdition"></Translate>
                                    </span>
                                    </p>
                                    <p className="card-text">
                                        <Translate id="personnel.description"></Translate>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link href="/precepts/tags/personnel" className="icon-link card-link">
                                        <Translate id="home.refer"></Translate>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rounded-4 feature bg-gradient card">
                                <div className="card-body">
                                    <div
                                        className="feature-icon d-inline-flex align-items-center justify-content-start fs-1 mb-3">
                                        <i className="bi bi-book"></i>
                                    </div>
                                    <h3 className="fs-2 text-body-emphasis">
                                        <Translate id="precepts.title"></Translate>
                                    </h3>
                                    <p>
                                        <span className="badge rounded-pill text-bg-danger"><Translate
                                            id="home.updata"></Translate></span>
                                        <span>&thinsp;</span>
                                        <span className="badge rounded-pill text-bg-dark">v4</span>
                                    </p>
                                    <p className="card-text">
                                        <Translate id="precepts.description"></Translate>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link href="/precepts/tags/precepts" className="icon-link card-link">
                                        <Translate id="home.refer"></Translate>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col h-100">
                            <div className="rounded-4 feature bg-gradient  card">
                                <div className="card-body">
                                    <div
                                        className="feature-icon d-inline-flex align-items-center justify-content-start fs-1 mb-3">
                                        <i className="bi bi-book"></i>
                                    </div>
                                    <h3 className="fs-2 text-body-emphasis">
                                        <Translate id="conduct.title"></Translate>
                                    </h3>
                                    <p>
                                        <span className="badge rounded-pill text-bg-dark">
                                            <Translate id="home.firstEdition"></Translate>
                                        </span>
                                    </p>
                                    <p className="card-text">
                                        <Translate id="conduct.description"></Translate>
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <Link href="/precepts/tags/conduct" className="icon-link card-link">
                                        <Translate id="home.refer"></Translate>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Main Row E*/}

                <div className="container mb-5">
                    <div className="row row-cols-3 align-items-stretch">
                        <div className="d-flex card m-3">
                            <div className="row g-0 h-100">
                                <div
                                    className="col-3 align-content-center justify-items-center text-center"
                                    style={{backgroundColor: 'var(--ifm-color-primary)'}}>
                                    <i className="bi bi-eyeglasses fs-1 text-white"></i>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <Link href="/precepts/tags/privacy-policy" target="_self">
                                            <h3 className="fs-2 text-body-emphasis">
                                                <Translate id="privacy-policy.title"></Translate>
                                            </h3>
                                        </Link>
                                        <p>
                                            <span className="badge rounded-pill text-bg-danger"><Translate
                                                id="home.updata"></Translate></span>
                                        </p>
                                        <Translate id="privacy-policy.description"></Translate>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex card m-3">
                            <div className="row g-0 h-100">
                            <div
                                    className="col-3 align-content-center justify-items-center text-center"
                                    style={{backgroundColor: 'var(--ifm-color-primary)'}}>
                                    <i className="bi bi-palette d-block fs-1 text-white"></i>
                                </div>
                                <div className="col-8">
                                    <div className="card-body">
                                        <Link href="/precepts/tags/exterior-design" target="_self">
                                            <h3 className="fs-2 text-body-emphasis">
                                                <Translate id="exterior-design.title"></Translate>
                                            </h3>
                                        </Link>
                                        <p>
                                            <span className="badge rounded-pill text-bg-danger"><Translate
                                                id="home.updata"></Translate></span>
                                        </p>
                                        <Translate id="exterior-design.description"></Translate>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <GithubContributorsWidget/>
            </main>
        </Layout>
    );
}
