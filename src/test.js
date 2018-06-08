import React from 'react';
import ReactDOM from 'react-dom';
import '../styles/styles.scss';
import staticImgSrc from '../assets/images/love.jpg';

class App extends React.Component {
    render() {
        const { port } = window.location;
        const hardURL = (port === '4000') ? './assets/images/love.jpg' : '../../love.jpg';
        console.log('>>> URL >', hardURL)
        // ref: https://medium.com/a-beginners-guide-for-webpack-2/handling-images-e1a2a2c28f8d
        // ref: https://github.com/reactjs/react-rails/issues/211

        return (
            <div>
                <div>
                    Image Test...!!, Static image Source, src changed base64 at webpack (url-loader)
                </div>
                    <img src={staticImgSrc}/>
                <br/>
                <br/>

                <div>
                    Image Test...!!, src for build(deploy) real image file must exists in relate path
                </div>
                <div>in this case, webpack build's copy logic</div>
                    <img src={hardURL} />
                <br/>
                <br/>

                <div>
                    Test using scss~!~!
                </div>
                    <div className='myImageTest'></div>
            </div>
        );
    }
}

const appRoot = document.getElementById('root');
ReactDOM.render(<App />, appRoot);
