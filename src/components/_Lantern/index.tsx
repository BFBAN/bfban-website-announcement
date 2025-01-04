import React from 'react';

import './index.css';

export default function Index({}) {
    return (
        <div className="lantern-widget-box"
             v-if="nowTime >= new Date('2024 12-31').getTime() && nowTime <= new Date('2025 2-4').getTime()">
            <div className="lantern-box">
                {['left', 'right'].map(i => (
                    <div className={`lantern ${i}-lantern`}>
                        <div className="lantern-rope lantern-top-rope "></div>
                        <div className="lantern-handle lantern-top-handle"></div>
                        <div className="lantern-center">新年</div>
                        <div className="lantern-handle lantern-bottom-handle"></div>
                        <div className="lantern-bottom">
                            <div className="lantern-rope lantern-bottom-rope"></div>
                            <div className="lantern-panicle"></div>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}
