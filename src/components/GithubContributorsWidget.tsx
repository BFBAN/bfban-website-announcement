import React, {useEffect, useState} from "react";
import LogoWall from "@site/src/components/_UsersWrap";

async function getData() {
    return await fetch('https://api.github.com/repos/bfban/bfban-website-announcement/contributors').then(r => r.json())
}

function GithubContributorsWidget() {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData();
                setData(response);
            } catch (err) {
                setError('Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div className="container"></div>;
    }

    if (error) {
        return <div className="container">{error}</div>;
    }

    return (
        <div className="container mt-5 mb-5">
            <LogoWall
                items={data.map(i => ({
                    imgUrl: i.avatar_url,
                    altText: i.id,
                }))}
                direction='horizontal'
                pauseOnHover={true}></LogoWall>
        </div>
    );
}

export default  GithubContributorsWidget;
