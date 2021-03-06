import React, { PropTypes } from 'react';
import { sprintf } from 'sprintf-js';
import { STATUSES } from '../consts';
import ApruvrTypes from '../types';
import StatusPicker from '../containers/StatusPicker';
import StatusAgent from '../containers/StatusAgent';

const CrowdinItem = ({ content, language, code }) => {
    const { slug, title, wordCount, translatedWordCount, approvedWordCount } = content;

    const trnsp = wordCount === 0 ? 0 : translatedWordCount / wordCount * 100;
    const apprp = wordCount === 0 ? 0 : approvedWordCount / wordCount * 100;

    const className = apprp === 100
        ? 'success'
        : trnsp === 100
            ? 'info'
            : trnsp > 0
                ? 'warning'
                : 'danger';

    return (
        <tr className={className}>
            <td>
                <a
                    className="btn btn-link"
                    href={`https://www.khanacademy.org/${code}/${slug}`}
                    target="_blank">
                        {title}
                        {' '}
                        <span className="badge">
                            {wordCount}
                        </span>
                </a>
            </td>

            <td>
                <StatusAgent
                    slug={slug} />
            </td>

            <td>
                <StatusPicker
                    slug={slug}
                    statuses={STATUSES.crowdin} />
            </td>

            <td>
                <a
                    className="btn btn-default"
                    href={`https://translate.khanacademy.org/${code}/${slug}`}
                    target="_blank">
                        go
                        {' '}
                        <span className="badge">
                            {translatedWordCount} ({sprintf('%.0f', trnsp)}%)
                        </span>
                </a>
            </td>

            <td>
                <a
                    className="btn btn-default"
                    href={`https://crowdin.com/proofread/khanacademy/all/enus-${language.code}#q=/${slug}`}
                    target="_blank">
                        go
                        {' '}
                        <span className="badge">
                            {approvedWordCount} ({sprintf('%.0f', apprp)}%)
                        </span>
                </a>
            </td>
        </tr>
    );
};

CrowdinItem.propTypes = {
    code:           PropTypes.string.isRequired,
    language:       ApruvrTypes.item.isRequired,
    content:        PropTypes.shape({
        slug:                   PropTypes.string.isRequired,
        title:                  PropTypes.string.isRequired,
        wordCount:              PropTypes.number.isRequired,
        translatedWordCount:    PropTypes.number.isRequired,
        approvedWordCount:      PropTypes.number.isRequired,
    }).isRequired,
};

export default CrowdinItem;
