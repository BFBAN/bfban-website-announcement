import React from 'react';

import TextColor from "@site/src/components/Color";

export default function Highlight({children, color}) {
    return (
        <TextColor backgroundColor={color || 'rgba(248,230,171,0.38)'} color={color || 'auto'}>{children}</TextColor>
    );
}
