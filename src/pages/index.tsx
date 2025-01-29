import React from "react";

import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Translate, {translate} from "@docusaurus/Translate";
import FWidget from "@site/src/components/_FWidget";
import GithubContributorsWidget from "@site/src/components/GithubContributorsWidget";
import SpotlightCard from "@site/src/components/_SpotlightCard/index";
import SplitText from "@site/src/components/SplitText";

export default function Home(): React.ReactElement {
    return (
        <Layout>
            <main className="mt-5">
                <div className="mt-5 container">
                    <div className="px-4 py-5 my-5 text-center rounded-3" style={{position: 'relative'}}>
                        <FWidget></FWidget>

                        <h1 className="display-2 fw-bold text-body-emphasis">
                            <SplitText
                                text={translate({id: 'home.title'})}
                                className="text-2xl font-semibold text-center"
                                delay={150}
                                animationFrom={{opacity: 0, transform: 'translate3d(0,50px,0)'}}
                                animationTo={{opacity: 1, transform: 'translate3d(0,0,0)'}}
                                easing="easeOutCubic"
                                threshold={0.2}
                                rootMargin="-50px"/>
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
                        {
                            [{
                                value: 'personnel',
                                isFirstEdition: true
                            }, {
                                value: 'precepts',
                                updata: {
                                    title: 'v4'
                                },
                            }, {
                                value: 'conduct',
                                isFirstEdition: true
                            }].map((i) => (
                                <div className="col" key={i.value}>
                                    <div className="rounded-4 feature card h-100">
                                        <SpotlightCard className="custom-spotlight-card h-100"
                                                       spotlightColor="rgb(from var(--ifm-color-primary) r g b / .3)">
                                            <div className="card-body">
                                                <div
                                                    className="feature-icon d-inline-flex align-items-center justify-content-start fs-1 mb-3">
                                                    <i className="bi bi-book"></i>
                                                </div>
                                                <h3 className="fs-2 text-body-emphasis">
                                                    <Link href={`/precepts/tags/${i.value}`} className="card-link">
                                                        <Translate id={`${i.value}.title`}></Translate>
                                                    </Link>
                                                </h3>
                                                <p>
                                                    {i.isFirstEdition ? (
                                                        <span className="badge rounded-pill text-bg-dark">
                                                        <Translate id="home.firstEdition"></Translate>
                                                    </span>
                                                    ) : null}
                                                    {i.updata ? (
                                                        <span className="badge rounded-pill text-bg-danger"><Translate
                                                            id="home.updata"></Translate></span>
                                                    ) : null}
                                                    {i["text"] ? (
                                                        <span className="badge rounded-pill text-bg-dark">{i['text'].value}</span>
                                                    ) : null}
                                                </p>
                                                <p className="card-text">
                                                    <Translate id={`${i.value}.description`}></Translate>
                                                </p>
                                            </div>
                                            <div className="card-footer">
                                                <Link href={`/precepts/tags/${i.value}`} className="card-link">
                                                    <Translate id="home.refer"></Translate>
                                                    <i className="bi bi-arrow-right"></i>
                                                </Link>
                                            </div>
                                        </SpotlightCard>
                                    </div>
                                </div>
                            ))}
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
                            <div className="col-12 col-sm-12 col-lg-6 mb-3" key={i.value}>
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
