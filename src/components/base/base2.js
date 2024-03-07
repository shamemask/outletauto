import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import RegModal from './reg_modal.js';
import AuthModal from './auth_modal.js';

const BasePage2 = (props, MainContent) => {
    const devPanelStyle = {
        zIndex: 99999999,
        position: 'fixed',
        bottom: 0,
        left: 0,
        padding: '10px',
        display: 'flex',
        height: 'auto',
        backgroundColor: 'rgba(225, 225, 225, 0.87)',
    };

    const devPanelContentStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'start',
        flexDirection: 'column',
    };

    const flexStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const lifeStyle = {
        marginLeft: '20px',
        width: '10px',
        height: '10px',
        backgroundColor: 'red',
        borderRadius: '50%',
    };

    const lifeActiveStyle = {
        backgroundColor: 'green',
    };
    return (
        <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{props.page_title} - OutletAuto</title>
                <link rel="icon" href={require('../../assets/imgs/favicon.ico')} />
                <link rel="stylesheet" href={require('../../assets/css/style2.css')} />
                <link rel="stylesheet" href="//cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
                <meta name="google-site-verification" content="nH6uS_83NnR5CMs1X97Ww8U7stcOcu0MUQHIIpIHnIs" />

                <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
                <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
                <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            </head>

            <body>
                <div class="wrapper">
                    <div class="offer">
                        <Header />
                        { MainContent }
                    </div>
                    <Footer />
                </div>
                {!props.user.is_authenticated && (
                    // Render React components for registration and authentication modals
                    <>
                        <RegModal />
                        <AuthModal />
                    </>
                )}
            </body>

            <script src={require('../../assets/js/elem-shiow.js')}></script>
            <script src={require('../../assets/js/tabs.js')}></script>
            <script src={require('../../assets/js/registration.js')}></script>
            <script src={require('../../assets/js/index.js')}></script>

            <script src={require('../../assets/js/order.js')}></script>
            <script src={require('../../assets/js/validation.js')}></script>

            <style>
                {`
                        .DEV_PANEL {
                            ${Object.entries(devPanelStyle)
                        .map(([key, value]) => `${key}: ${value};`)
                        .join('\n')}
                        }

                        .DEV_PANEL-content {
                            ${Object.entries(devPanelContentStyle)
                        .map(([key, value]) => `${key}: ${value};`)
                        .join('\n')}
                        }

                        .DEV_PANEL .life {
                            ${Object.entries(lifeStyle)
                        .map(([key, value]) => `${key}: ${value};`)
                        .join('\n')}
                        }

                        .life-active {
                            ${Object.entries(lifeActiveStyle)
                        .map(([key, value]) => `${key}: ${value} !important;`)
                        .join('\n')}
                        }
                    `}
            </style>
        </html>
    )

}

export default BasePage2;
