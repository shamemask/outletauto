import React from 'react';
import Header from './header.js';
import Footer from './footer.js';
import RegModal from './reg_modal.js';
import AuthModal from './auth_modal.js';
import Catalog from '../catalog.js';
import BurgerNav from './burger_nav.js';
import MobileNav from './mobile_nav.js';




const BasePage = ({props, MainContent}) => {
    return (
        <html lang="en">

            <head>
                <meta charset="UTF-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Главная страница - OutletAuto</title>
                <link rel="icon" href="imgs/favicon.ico" />
                <link rel="stylesheet" href="css/style2.css" />
                <link rel="stylesheet" href="//cdn.datatables.net/1.13.6/css/jquery.dataTables.min.css" />
                <meta name="google-site-verification" content="nH6uS_83NnR5CMs1X97Ww8U7stcOcu0MUQHIIpIHnIs" />
                

                <script type="text/javascript" src="//code.jquery.com/jquery-1.11.0.min.js"></script>
                <script type="text/javascript" src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>
                <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
            </head>
            <body>
                <div class="wrapper">
                    <div class="offer">
                        <Header props={props} />
                        <MainContent props={props} />
                    </div>
                    {!props?.user?.is_authenticated && (
                        // Render React components for registration and authentication modals
                        <>
                            <RegModal props={props} />
                            <AuthModal props={props} />
                        </>
                    )}

                    <Catalog props={props} />

                    <BurgerNav props={props} />
                    {props?.user?.is_authenticated && <MobileNav props={props} />}
                    <Footer props={props} />

                </div>
            </body>


            <script src="js/dropped.js"></script>
            <script src="js/elem-shiow.js"></script>
            <script src="js/tabs.js"></script>
            <script src="js/registration.js"></script>
            <script src="js/index.js"></script>
        </html>
    );
};

export default BasePage;