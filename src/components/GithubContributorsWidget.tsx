import React, {useEffect, useState} from "react";

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
            {data.length >= 0 ? data.map(item => (
                <img className="border rounded-5 mr-3" style={{width: 40, height: 40}} src={item.avatar_url}
                     key={item.id}/>
            )) : null}
        </div>
    );
}

export default  GithubContributorsWidget;
