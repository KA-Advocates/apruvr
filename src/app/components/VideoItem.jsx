import React, { PropTypes } from 'react';
import { STATUSES } from '../consts';
import StatusPicker from '../containers/StatusPicker';

const VideoItem = ({ content }) => {
    const { slug, title, subbed, dubbed } = content;

    const className = dubbed
        ? 'success'
        : subbed
            ? 'info'
            : 'danger';

    return (
        <tr className={className}>
            <td>
                <a
                    className="btn btn-link"
                    href={`https://www.khanacademy.org/v/${slug}`}
                    target="_blank">
                        {title}
                </a>
            </td>

            <td>
                <StatusPicker
                    slug={slug}
                    statuses={STATUSES.video} />
            </td>

            <td>
                <a
                    className="btn btn-default"
                    href={`https://translate.khanacademy.org/v/${slug}`}
                    target="_blank">
                        sub
                        {' '}
                        <span className="badge">
                            {subbed ? 'yes' : 'no'}
                        </span>
                </a>
            </td>

            <td>
                <a
                    className="btn btn-default"
                    href={`v/${slug}`}
                    target="_blank">
                        dub
                        {' '}
                        <span className="badge">
                            {dubbed ? 'yes' : 'no'}
                        </span>
                </a>
            </td>
        </tr>
    );
};

VideoItem.propTypes = {
    content:    PropTypes.shape({
        slug:       PropTypes.string.isRequired,
        title:      PropTypes.string.isRequired,
        subbed:     PropTypes.bool.isRequired,
        dubbed:     PropTypes.bool.isRequired,
    }).isRequired,
};

export default VideoItem;
