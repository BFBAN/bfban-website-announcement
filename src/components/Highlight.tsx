import React from 'react';

import TextColor from "@site/src/components/Color";

export default function Highlight({children, color}) {
    return (
        <TextColor backgroundColor={color || '#f8e6ab'} color={color || 'auto'}>{children}</TextColor>
    );
}
