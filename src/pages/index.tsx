import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

export default function Home(): JSX.Element {
    const {siteConfig} = useDocusaurusContext();
    return (
        <Layout>
            <main className="mt-5">
                <div className="mt-5 container">
                    <div className="px-4 py-5 my-5 text-center rounded-3">
                        <h1 className="display-5 fw-bold text-body-emphasis">准则</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="lead mb-4">这将是带领BFBAN不动摇基石，所有参与社区成员坚定维护最初目标</p>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-2 py-5">
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3">
                                <div
                                    className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <i className="bi bi-book"></i>
                                </div>
                                <h3 className="fs-2 text-body-emphasis">人事规则</h3>
                                <p>BFBAN团队的人事招新规则，成员的结构以及不同成员的权利和义务和要求说明 .</p>
                                <a href="#" className="icon-link">
                                    查阅
                                    <svg className="bi">
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3">
                                <div
                                    className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <i className="bi bi-book"></i>
                                </div>
                                <h3 className="fs-2 text-body-emphasis">反作弊规则</h3>
                                <p>BFBAN团队对不同案件的处理标准，按照最新的标准来对案件进行处理 .</p>
                                <a href="/precepts/tags/precepts" className="icon-link">
                                    查阅
                                    <svg className="bi">
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="col">
                            <div className="border rounded-4 feature bg-gradient p-3">
                                <div
                                    className="feature-icon d-inline-flex align-items-center justify-content-center fs-2 mb-3">
                                    <i className="bi bi-book"></i>
                                </div>
                                <h3 className="fs-2 text-body-emphasis">行为规则</h3>
                                <p>BFBAN团队的成员在日常工作中的行为规范 .</p>
                                <a href="#" className="icon-link">
                                    查阅
                                    <svg className="bi">
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    );
}
