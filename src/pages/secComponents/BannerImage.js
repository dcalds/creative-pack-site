import React from 'react';

export default function BannerImage({ title, desc }) {
    return (
        <section className="s-BannerImage">
            <div className="container">

                <div className="box">
                    <h2> {title} </h2>
                    <p> {desc} </p>
                </div>

            </div>
        </section>
    )
}