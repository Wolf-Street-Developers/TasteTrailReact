import React, { useState, useEffect, useCallback } from 'react';
import Menu from "../Menu/Menu";
import FeedbackItem from "../FeedbackItem/FeedbackItem";
import FeedbackForm from "../FeedbackForm/FeedbackForm";
import { getFeedbacksByVenue, getMenuesById } from "../../api/menuService";
import './TabComponent.css'
import Pagination from '../Pagination/Pagination';

const TabComponent = ( { isOwner, venueId }) => {
  const [activeTab, setActiveTab] = useState('menu');
  const [feedbacks, setFeedbacks] = useState([])
  const [menues, setMenues] = useState([])

  const [page, setPage] = useState(1)
  const [feedbackPage, setFeedbackPage] = useState(1)

  const countOnPage = 1
  const countOnFeedbackPage = 1

  const switchTab = (tab) => {
    setActiveTab(tab);
    handleUpdate()
  };

    const handleUpdate = useCallback(() => {
      getMenuesById(venueId, page, countOnPage)
            .then((res) => {
                setMenues(res.data.entities)
            })
            console.log(countOnFeedbackPage)
        getFeedbacksByVenue(venueId, 0, feedbackPage, countOnFeedbackPage)
            .then((res) => {
                setFeedbacks(res.data.entities);
            })
    }, [venueId, page, feedbackPage])
    useEffect(() => {
        handleUpdate()
    }, [venueId, page, feedbackPage, handleUpdate])

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
            {menues.map((item)=><Menu menu={item} key={item.id}/>)}
            <Pagination type="Menues" setPage={setPage} page={page} count={countOnPage} id={venueId}/>
            </div>
        )}
        {activeTab === 'review' && (
            <div className="venue-feedbacks">
                <FeedbackForm venueId = {venueId} updateFeedbacks={() => {
                    getFeedbacksByVenue(venueId, 0, feedbackPage, countOnFeedbackPage).then((res) => {
                        setFeedbacks(res.data.entities)
                    })}
                }/>

                {feedbacks.map((item)=><FeedbackItem feedback={item} key={item.id}/>)}
                <Pagination type="Feedbacks" setPage={setFeedbackPage} page={feedbackPage} count={countOnFeedbackPage} id={venueId}/>
            </div>
        )}
      </div>
    </div>
  );
};

export default TabComponent;
