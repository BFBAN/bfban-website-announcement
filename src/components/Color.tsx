import React from 'react';

export default function TextColor({children, backgroundColor, color}: {
    children: any,
    backgroundColor?: string,
    color: string
}) {
    return (
        <span
            style={{
                backgroundColor: backgroundColor,
                color: color,
            }}>
      {children}
    </span>
    );
}
