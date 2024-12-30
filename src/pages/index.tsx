import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate from "@docusaurus/Translate";
import React from "react";
import FWidget from "@site/src/components/_FWidget";

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
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3 card">
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
                                <p>
                                    <Translate id="personnel.description"></Translate>
                                </p>
                                <Link href="/precepts/tags/personnel" className="icon-link">
                                    <Translate id="home.refer"></Translate>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3 card">
                                <div
                                    className="feature-icon d-inline-flex align-items-center justify-content-start fs-1 mb-3">
                                    <i className="bi bi-book"></i>
                                </div>
                                <h3 className="fs-2 text-body-emphasis">
                                    <Translate id="precepts.title"></Translate>
                                </h3>
                                <p>
                                    <span className="badge rounded-pill text-bg-danger">
                                        <Translate id="home.updata"></Translate>
                                    </span>
                                    <span className="badge rounded-pill text-bg-dark">
                                        v4
                                    </span>
                                </p>
                                <p>
                                    <Translate id="precepts.description"></Translate>
                                </p>
                                <Link href="/precepts/tags/precepts" className="icon-link">
                                    <Translate id="home.refer"></Translate>
                                </Link>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3 card">
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
                                <p>
                                    <Translate id="conduct.description"></Translate>
                                </p>
                                <Link href="/precepts/tags/conduct" className="icon-link">
                                    <Translate id="home.refer"></Translate>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Main Row E*/}

                <div className="container mb-5">
                    <div className="row row-cols-4 align-items-stretch">
                        <div className="d-flex w-2">
                            <div className="border rounded-4 feature bg-gradient p-3 card">
                                <h3 className="fs-2 text-body-emphasis">
                                    <Translate id="privacy-policy.title">隐私政策</Translate>
                                </h3>
                                <p>
                                    <Translate id="privacy-policy.description">保护您的隐私和个人数据对我们非常重要，向公众展示我们对隐私内容</Translate>
                                </p>
                            </div>
                        </div>
                        <div className="d-flex w-2">
                            <div className="border rounded-4 feature bg-gradient p-3 card">
                                <h3 className="fs-2 text-body-emphasis">
                                    <Translate id="exterior-design.title">设计规范</Translate>
                                </h3>
                                <p>
                                    <Translate id="exterior-design.description">公示我们对于图标用途，指导正确使用LOGO以及外链部件</Translate>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
