import React, { useContext} from 'react';
import { DataContext } from "../../data/pageData";

import bannerImage from "../../img/bannerImage.png"
import bannerImageMob from "../../img/bannerImageMob.png"
import wolf from "../../img/wolf.png"

export default function BannerImage() {

    const lang = useContext(DataContext).lang;

    return (
        <>
            <div className="wolf-feat">
                <img className="wolficon" alt="wolficon" src={wolf}></img>
            </div>
            <section id="sobre" className="s-banner-image">
                <div className="container-fluid">

                    <div className="container">
                        <h2 className="title-featured">
                            {lang.banner}
                        </h2>
                    </div>

                    <img className="banner" alt="banner" src={bannerImage}></img>
                    <img className="bannerMob" alt="bannerMob" src={bannerImageMob}></img>
                </div>
            </section>
        </>
    )
}