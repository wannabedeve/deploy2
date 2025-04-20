'use client';

import { useState } from 'react';
import './style.scss';
import RichText from '@/components/RichText';
import Image from 'next/image';

const tabsData = [
    { id: 'tabs1', title: 'TABS 1', content: 'Tabs 1' },
    { id: 'tabs2', title: 'TABS 2', content: 'Tabs 2' },
    { id: 'tabs3', title: 'TABS 3', content: 'Tabs 3' },
    { id: 'tabs4', title: 'TABS 4', content: 'Tabs 4' },
];

const Tabs = ({ images }) => {
    const [activeTab, setActiveTab] = useState(tabsData[0].id);
    const [movingTabPosition, setMovingTabPosition] = useState(0);

    const handleTabClick = (tabId: string, index: number) => {
        setActiveTab(tabId);
        setMovingTabPosition(index * 25);
    };

    return (
        <main>
            <div className={"tabs"}>
                <ul className={"tabs--list"}>
                    {images.map((tab, index) => (
                        <li key={tab.id}>
                            <a
                                href="#"
                                title={tab.title}
                                data-content={tab.id}
                                className={activeTab === tab.id ? "actived" : ''}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleTabClick(tab.id, index);
                                }}
                            >
                                {/* {tab.title} */}
                                <RichText content={tab.richText} enableGutter={false} />

                            </a>
                        </li>
                    ))}
                    <li
                        className={`${"moving-tab"} ${"moving-tab--interaction"}`}
                        style={{ left: `${movingTabPosition}%` }}
                    ></li>
                </ul>
                <ul className={"tabs--content"}>
                    {images.map((tab, index) => (
                        <li
                            key={index}
                            data-content={tab.id}
                            className={activeTab === tab.id ? "actived" : ''}
                        >

                            {tab.subImages.map((img, idx) => (
                                <Image
                                    src={img.subImage.url}
                                    alt='hey'
                                    height={303}
                                    width={303}
                                />
                            ))}

                            {/* {tab.content} */}
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
};

export default Tabs;
