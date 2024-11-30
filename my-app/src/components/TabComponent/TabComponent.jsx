import React, { useState, useEffect } from 'react';
import Menu from "../Menu/Menu";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { getFeedbacksByVenue, getMenuesById } from "../../api/menuService";
import './TabComponent.css'

const TabComponent = ( { isOwner, venueId }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const [feedbacks, setFeedbacks] = useState([])
  const [menues, setMenues] = useState([])

  const switchTab = (tab) => {
    setActiveTab(tab);
  };

    useEffect(() => {
        getMenuesById(venueId)
            .then((res) => {
                setMenues(res.data.entities)
            })
        getFeedbacksByVenue(venueId)
            .then((res) => {
                setFeedbacks(res.data.entities)
            })
    }, [venueId])

  return (
    <div>
      <div className="tabs">
        <button
          className={'tabBtn ' + (activeTab === 'menu' ? 'tabBtnActive' : '')}
          onClick={() => switchTab('menu')}
        >
          Menus
        </button>

        <button
          className={'tabBtn ' + (activeTab === 'review' ? 'tabBtnActive' : '')}
          onClick={() => switchTab('review')}
        >
          Feedbacks
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 'menu' && (
            <div className="venue-menues">
            {menues.map((item)=><Menu menu={item} isOwner={isOwner}/>)}
            </div>
        )}
        {activeTab === 'review' && (
            <div className="venue-feedbacks">
                <FeedbackForm venueId = {venueId} updateFeedbacks={() => {
                    getFeedbacksByVenue(venueId).then((res) => {
                        setFeedbacks(res.data.entities)
                    })}
                }/>

                {feedbacks.map((item)=><FeedbackItem feedback={item}/>)}
            </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
