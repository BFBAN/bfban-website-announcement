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
                    <div className="row align-items-stretch row-cols-1 row-cols-lg-3 g-2 py-5">
                        <div className="col">
                            <div className="rounded-4 feature bg-gradient card h-100">
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
                                    <Link href="/precepts/tags/personnel" className="card-link">
                                        <Translate id="home.refer"></Translate>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rounded-4 feature bg-gradient card h-100">
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
                                    <Link href="/precepts/tags/precepts" className="card-link">
                                        <Translate id="home.refer"></Translate>
                                        <i className="bi bi-arrow-right"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="rounded-4 feature bg-gradient card h-100">
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
                                    <Link href="/precepts/tags/conduct" className="card-link">
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
                    <div className="row align-items-stretch row-cols-2">
                        {[{
                            icon: 'bi-eyeglasses',
                            value: 'privacy-policy',
                            url: '/precepts/tags/privacy-policy',
                            updata: {
                                title: 'v4'
                            },
                        }, {
                            icon: 'bi-people-fill',
                            value: 'user-policy',
                            url: '/precepts/tags/user-policy',
                            text: {
                                value: 'v1'
                            }
                        }, {
                            icon: 'bi-palette',
                            value: 'exterior-design',
                            url: '/precepts/tags/exterior-design',
                            updata: {
                                title: 'v4'
                            },
                        }, {
                            icon: 'bi-palette',
                            value: 'recruitment-criteria',
                            url: '/precepts/tags/recruitment-criteria',
                            text: {
                                value: 'v1'
                            }
                        }].map(i => (
                            <div className="col-12 col-sm-12 col-lg-6 mb-3">
                                <div className="card h-100">
                                    <div className="row h-100">
                                        <div
                                            className="col-3 align-content-center text-center"
                                            style={{backgroundColor: 'var(--ifm-color-primary)', marginLeft: '16px'}}>
                                            <i className={`bi ${i.icon} ml-5 fs-1 text-white`}></i>
                                        </div>
                                        <div className="col-8">
                                            <div className="card-body">
                                                <Link href={i.url} target="_self">
                                                    <h3 className="fs-2 text-body-emphasis">
                                                        <Translate id={`${i.value}.title`}></Translate>
                                                    </h3>
                                                </Link>
                                                <p>
                                                    {i.updata ? (
                                                        <span className="badge rounded-pill text-bg-danger"><Translate
                                                            id="home.updata"></Translate></span>
                                                    ) : null}
                                                    {i.text ? (
                                                        <span
                                                            className="badge rounded-pill text-bg-dark">{i.text.value}</span>
                                                    ) : null}
                                                </p>
                                                <Translate id={`${i.value}.description`}></Translate>

                                                <span className="p-1">
                                                    <Link href={i.url}>
                                                        <Translate id="home.refer"></Translate>
                                                        <i className="bi bi-arrow-right"></i>
                                                    </Link>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="text-center">
                    <GithubContributorsWidget/>
                </div>
            </main>
        </Layout>
    );
}
