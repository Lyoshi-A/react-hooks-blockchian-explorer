import React from 'react'
// import PropTypes from 'prop-types'
// import {setPageMetadata} from '../../util/meta-tags-generator'
import ErrorNotificationBlock from '../components/error-notification-block'

const NotFoundView = ({location, history}) => {
    return <div className="text-center">
        <ErrorNotificationBlock>
            404 PAGE NOT FOUND
        </ErrorNotificationBlock>
    </div>
}

export default NotFoundView
