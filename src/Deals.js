import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const mtgData = {
  id: 1, // Start IDs from 7
  foundBy: 'placeholderUser',
  foundWhen: '4 days ago',
  image: 'https://i5.walmartimages.com/seo/MTG-ASSASSINS-CREED-BUNDLE_080b565c-f7c8-4f35-98dc-b3c0c4350368.c7fb22db92edcf632ab81dc6eee2d453.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
  label: 'Tyranitar',
  oldPrice: '$40',
  price: '$20',
  retailer: 'Amazon',
  brand: 'MTG',
  likes: 0,
  comments: 0,
}

const dealsData = [
  // Existing 6 deals...
  { mtgData, /* existing deal info */ },
  { mtgData, /* existing deal info */ },
  // Add 18 placeholders
  ...Array.from({ length: 25 }, (_, i) => ({
    id: 1 + i, // Start IDs from 7
    foundBy: 'placeholderUser',
    foundWhen: '4 days ago',
    image: 'https://i5.walmartimages.com/seo/MTG-ASSASSINS-CREED-BUNDLE_080b565c-f7c8-4f35-98dc-b3c0c4350368.c7fb22db92edcf632ab81dc6eee2d453.jpeg?odnHeight=2000&odnWidth=2000&odnBg=FFFFFF',
    label: `Tyranitar Ex or Tsareena Ex Premium Collection Box #${7 + i}`,
    oldPrice: '$40',
    price: '$20',
    retailer: 'Amazon',
    brand: 'Pokemon',
    likes: 0,
    comments: 0,
  })),
];

const initialDeals = dealsData.slice(0, 12); // Show only 6 initially

const Deals = () => {
  const [displayedDeals, setDisplayedDeals] = useState(initialDeals);

  // Load more deals on scroll
  useEffect(() => {
    const loadMoreDeals = () => {
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // Load next batch of 6 deals
        console.log("Reached bottom, loading more deals...");
        setDisplayedDeals((prevDeals) => {
          const nextDeals = dealsData.slice(prevDeals.length, prevDeals.length + 6);
          return [...prevDeals, ...nextDeals];
        });
      }
    };

    window.addEventListener('scroll', loadMoreDeals);
    return () => window.removeEventListener('scroll', loadMoreDeals);
  }, []);

  return (
    <div>
      <h2>Just For You</h2>
      <div className="deal-grid">
        {displayedDeals.map((deal) => (
          <div className="deal-card" key={deal.id}>
            <div className="foundBy">found by {deal.foundBy}</div>
            <div className="foundWhen">{deal.foundWhen}</div>
            <div className="image" style={{ backgroundImage: `url(${deal.image})` }} />
            <div className="label">{deal.label}</div>
            <div className="price">
              {deal.price} <span className="oldPrice">{deal.oldPrice}</span>
            </div>
            <div className="retailer">{deal.retailer}</div>
            <div className="meta">
              <span>{deal.likes} 👍</span>
              <span>{deal.comments} 💬</span>
            </div>
            <br /><br />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Deals;