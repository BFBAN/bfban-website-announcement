import objectToGetParams from './utils/objectToGetParams';
import createShareButton from './hocs/createShareButton';

function weiboLink(url: string, { title, image }: { title?: string; image?: string }) {
    return (
        'https://t.bilibili.com' +
        objectToGetParams({
            url,
            title,
            pic: image,
        })
    );
}

const BiliBiliShareButton = createShareButton<{ title?: string; image?: string }>(
    'bilibili',
    weiboLink,
    props => ({
        title: props.title,
        image: props.image,
    }),
    {
        windowWidth: 1024,
        windowHeight: 550,
        windowPosition: 'screenCenter',
    },
);

export default BiliBiliShareButton;
