import React from "react";

const TabContent = (props) => {
    return (
        <div className="tab-content-wrapper">
            <section id="tab1" class="item active" data-title="Tab 1">
                <div class="item-content">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut dicta neque deleniti dignissimos doloribus asperiores vel velit recusandae quasi? Fugit?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo doloribus quibusdam ratione aliquid ut, dolorem illum velit ad sunt dolorum!</p>
                </div>
            </section>
            <section id="tab2" class="item" data-title="Tab 2">
                <div class="item-content">
                    Tab 2 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </div>
            </section>
            <section id="tab3" class="item" data-title="Tab 3">
                <div class="item-content">
                    Tab 3 content. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper suscipit, posuere a, pede.
                </div>
            </section>
        </div>
    )
}

export default TabContent;