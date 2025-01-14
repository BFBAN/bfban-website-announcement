import React from 'react';

import TextColor from "@site/src/components/Color";
import "./index.css"

export default function Highlight({children}) {
    return (
        <span className="highlight">
            <TextColor backgroundColor={'rgba(248,230,171,0.3)'}
                       color={'auto'}>{children}</TextColor>
        </span>
    );
}
