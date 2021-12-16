import React from 'react';
import './Package.css';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

const Package = () => {
    return (
        <>
            <div id="generic_price_table">
                <div class="container">
                    <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                        CHOOSE A PACKAGE                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                        Our Best Packages
                    </Typography>
                    <div>

                        {/*BLOCK ROW START*/}
                        <div class="row mt-5">
                            <div class="col-md-4">

                                {/*PRICE CONTENT START*/}
                                <div class="generic_content clearfix">

                                    {/*HEAD PRICE DETAIL START*/}
                                    <div class="generic_head_price clearfix">

                                        {/*HEAD CONTENT START*/}
                                        <div class="generic_head_content clearfix">

                                            {/*HEAD START*/}
                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Small</span>
                                            </div>
                                            {/*HEAD END*/}

                                        </div>
                                        {/*HEAD CONTENT END*/}

                                        {/*PRICE START*/}
                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">৳</span>
                                                <span class="currency">99</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>
                                        {/*PRICE END*/}

                                    </div>
                                    {/*HEAD PRICE DETAIL END*/}

                                    {/*FEATURE LIST START*/}
                                    <div class="generic_feature_list">
                                        <ul>
                                            <li><span>Ceiling</span>  & Bath Fans</li>
                                            <li><span>Garbage</span> Disposal</li>
                                            <li><span>Electrical</span> Service</li>
                                            <li><span>Outlet</span> Installation</li>
                                            <li><span>24/7</span> Support</li>
                                        </ul>
                                    </div>
                                    {/*FEATURE LIST END*/}

                                    {/*BUTTON START*/}
                                    <div class="generic_price_btn clearfix">
                                        <Link to='/contact' class="" >Contact</Link>
                                    </div>
                                    {/*BUTTON END*/}

                                </div>
                                {/*PRICE CONTENT END*/}

                            </div>

                            <div class="col-md-4">

                                {/*PRICE CONTENT START*/}
                                <div class="generic_content active clearfix">

                                    {/*HEAD PRICE DETAIL START*/}
                                    <div class="generic_head_price clearfix">

                                        {/*HEAD CONTENT START*/}
                                        <div class="generic_head_content clearfix">

                                            {/*HEAD START*/}
                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Medium</span>
                                            </div>
                                            {/*HEAD END*/}

                                        </div>
                                        {/*HEAD CONTENT END*/}

                                        {/*PRICE START*/}
                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">৳</span>
                                                <span class="currency">999</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>
                                        {/*PRICE END*/}

                                    </div>
                                    {/*HEAD PRICE DETAIL END*/}

                                    {/*FEATURE LIST START*/}
                                    <div class="generic_feature_list">
                                        <ul>
                                            <li><span>Baseboard</span> Painting</li>
                                            <li><span>Doorframe</span> Painting</li>
                                            <li><span>Interior</span> Painting</li>
                                            <li><span>Bedroom</span> Painting</li>
                                            <li><span>24/7</span> Support</li>
                                        </ul>
                                    </div>
                                    {/*FEATURE LIST END*/}

                                    {/*BUTTON START*/}
                                    <div class="generic_price_btn clearfix">
                                        <Link to='/contact' class="" >Contact</Link>
                                    </div>
                                    {/*BUTTON END*/}

                                </div>
                                {/*PRICE CONTENT END*/}

                            </div>
                            <div class="col-md-4">

                                {/*PRICE CONTENT START*/}
                                <div class="generic_content clearfix">

                                    {/*HEAD PRICE DETAIL START*/}
                                    <div class="generic_head_price clearfix">

                                        {/*HEAD CONTENT START*/}
                                        <div class="generic_head_content clearfix">

                                            {/*HEAD START*/}
                                            <div class="head_bg"></div>
                                            <div class="head">
                                                <span>Enterprise</span>
                                            </div>
                                            {/*HEAD END*/}

                                        </div>
                                        {/*HEAD CONTENT END*/}

                                        {/*PRICE START*/}
                                        <div class="generic_price_tag clearfix">
                                            <span class="price">
                                                <span class="sign">৳</span>
                                                <span class="currency">9999</span>
                                                <span class="cent">.99</span>
                                                <span class="month">/MON</span>
                                            </span>
                                        </div>
                                        {/*PRICE END*/}

                                    </div>
                                    {/*HEAD PRICE DETAIL END*/}

                                    {/*FEATURE LIST START*/}
                                    <div class="generic_feature_list">
                                        <ul>
                                            <li><span>Crown</span> Molding Painting</li>
                                            <li><span>
                                                Accent</span> Wall Painting</li>
                                            <li><span>Smart</span> Lock Installation</li>
                                            <li><span>Smart</span>Hub Setup</li>
                                            <li><span>24/7</span> Support</li>
                                        </ul>
                                    </div>
                                    {/*FEATURE LIST END*/}

                                    {/*BUTTON START*/}
                                    <div class="generic_price_btn clearfix">
                                        <Link to='/contact' class="" >Contact</Link>
                                    </div>
                                    {/*BUTTON END*/}

                                </div>
                                {/*PRICE CONTENT END*/}

                            </div>
                        </div>
                        {/*BLOCK ROW END*/}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Package;