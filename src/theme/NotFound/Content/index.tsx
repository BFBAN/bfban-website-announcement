import React, {type ReactNode} from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import type {Props} from '@theme/NotFound/Content';
import Heading from '@theme/Heading';

export default function NotFoundContent({className}: Props): ReactNode {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row text-center">
        <div className="col col--6 col--offset-3">
          <i className="bi bi-info-circle-fill" style={{fontSize: '5rem'}}></i>
          <Heading as="h4" className="mt-1">
            <Translate
                id="theme.NotFound.title"
                description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
        </div>
      </div>
    </main>
  );
}
