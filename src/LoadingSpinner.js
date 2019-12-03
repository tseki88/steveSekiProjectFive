import React, { Component }from 'react';
import { css } from '@emotion/core';
import { PacmanLoader } from 'react-spinners';

const override = css`
    display: block;
    margin: 100px auto;
    transform: translateX(-80px);
    border-color: red;
`;

class LoadingSpinner extends Component {
    render() {
        return (
            <div>
                <PacmanLoader
                    css={override}
                    sizeUnit={"px"}
                    size={80}
                    color={'#ff3366'}
                    loading={true}
                />
            </div>
        )
    }
}

export default LoadingSpinner;