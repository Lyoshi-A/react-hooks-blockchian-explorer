import React from 'react'
// import PropTypes from 'prop-types'
// import {setPageMetadata} from '../../util/meta-tags-generator'
import ErrorNotificationBlock from '../components/error-notification-block'

const NotFoundView = ({location, history}) => {
    // setPageMetadata({
    //     title: 'Page not found',
    //     description: 'Sorry, the page you are looking for was not found. Start over from the home page.',
    //     customMeta: {
    //         locator: 'name',
    //         tags: [
    //             {name: 'prerender-status-code', content: '404'}
    //         ]
    //     }
    // })

    return <div className="text-center">
        <ErrorNotificationBlock>
            404 PAGE NOT FOUND
        </ErrorNotificationBlock>
    </div>
}

// NotFoundView.propTypes = {
//     location: PropTypes.object.isRequired,
//     history: PropTypes.shape({
//         goBack: PropTypes.func.isRequired
//     })
// }

export default NotFoundView
