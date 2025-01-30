import {useState} from "react";
import "LogoWall.css";

function UserWall({
                      items = [],
                      direction = "horizontal",
                      pauseOnHover = false,
                  }) {
    const [isPaused, setIsPaused] = useState(false);

    const wrapperClass = [
        "wrapper w-50",
        direction === "vertical" && "wrapper--vertical"
    ]
        .filter(Boolean)
        .join(" ");

    const marqueeClass = [
        "marquee",
        direction === "vertical" && "marquee--vertical",
        isPaused && "paused"
    ]
        .filter(Boolean)
        .join(" ");

    return (
        <article
            className={wrapperClass}>
            <div
                className={marqueeClass}
                onMouseEnter={() => pauseOnHover && setIsPaused(true)}
                onMouseLeave={() => pauseOnHover && setIsPaused(false)}>
                <div className="marquee__group">
                    {items.map((item, idx) => (
                        <img className="border rounded-5 mr-3" key={idx} src={item.imgUrl} alt={item.altText}/>
                    ))}
                </div>
                <div className="marquee__group" aria-hidden="true">
                    {items.map((item, idx) => (
                        <img className="border rounded-5 mr-3" key={`dup1-${idx}`} src={item.imgUrl}
                             alt={item.altText}/>
                    ))}
                </div>
            </div>

            {/*<div*/}
            {/*    className={`${marqueeClass} marquee--reverse`}*/}
            {/*    onMouseEnter={() => pauseOnHover && setIsPaused(true)}*/}
            {/*    onMouseLeave={() => pauseOnHover && setIsPaused(false)}*/}
            {/*>*/}
            {/*    <div className="marquee__group">*/}
            {/*        {items.map((item, idx) => (*/}
            {/*            <img className="border rounded-5 mr-3" key={`rev-${idx}`} src={item.imgUrl} alt={item.altText}/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*    <div className="marquee__group" aria-hidden="true">*/}
            {/*        {items.map((item, idx) => (*/}
            {/*            <img className="border rounded-5 mr-3" key={`dup2-${idx}`} src={item.imgUrl}*/}
            {/*                 alt={item.altText}/>*/}
            {/*        ))}*/}
            {/*    </div>*/}
            {/*</div>*/}
        </article>
    );
}

export default UserWall;
