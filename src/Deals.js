import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const dealsData = [
  // Existing 6 deals...
  { id: 1, /* existing deal info */ },
  { id: 2, /* existing deal info */ },
  // Add 18 placeholders
  ...Array.from({ length: 18 }, (_, i) => ({
    id: 1 + i, // Start IDs from 7
    foundBy: 'placeholderUser',
    daysAgo: 'just now',
    image: 'placeholder.png', // Placeholder image link
    label: `Placeholder Deal #${7 + i}`,
    oldPrice: '$100',
    price: '$50',
    brand: 'BrandPlaceholder',
    likes: 0,
    comments: 0,
  })),
];

const DealsGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: start;
  align-items: stretch; /* Ensures each item has the same height */
  width: 100%;
  padding: 16px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const DealCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #ddd;
  border-radius: 8px;
  width: 200px;
  padding: 16px;
  text-align: center;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  .image {
    height: 150px;
    margin-bottom: 8px;
    background-size: cover;
    background-position: center;
  }

  .label {
    font-weight: bold;
    margin-bottom: 4px;
  }

  .oldPrice {
    text-decoration: line-through;
    color: #ff6b6b;
    font-size: 0.9em;
  }

  .price {
    font-weight: bold;
    color: #333;
  }

  .meta {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    font-size: 0.8em;
  }
`;

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
      <DealsGrid>
        {displayedDeals.map((deal) => (
          <DealCard key={deal.id}>
            <div className="image" style={{ backgroundImage: `url(${deal.image})` }} />
            <div className="label">{deal.label}</div>
            <div className="price">
              {deal.price} <span className="oldPrice">{deal.oldPrice}</span>
            </div>
            <div className="meta">
              <span>{deal.likes} 👍</span>
              <span>{deal.comments} 💬</span>
            </div>
            <br /><br />
            </DealCard>
        ))}
      </DealsGrid>
    </div>
  );
};

export default Deals;