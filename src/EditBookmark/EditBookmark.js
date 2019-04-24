import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BookmarksContext from '../BookmarksContext';
import config from '../config';

const Required = () => (
    <span className='EditBookmark_Required'>*</span>
)

class EditBookmark extends Component {
    static PropTypes = {
        match: PropTypes.shape({
            params: PropTypes.object,
        }),
        history: PropTypes.shaoe({
            push: PropTypes.func
        }).isRequired,
    }
}