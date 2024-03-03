import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Fade } from "react-awesome-reveal";

import "./RestaurantsPage.scss";
import { RootState, AppDispatch } from "../../redux-toolkit/store";
import { fetchRestaurantsPageData } from "../../redux-toolkit/thunks/restaurantsPageThunk";
import Card from "../../components/Card/Card";
import { CardProps } from "../../models/types";

const RestaurantsPage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { restaurants } = useSelector((state: RootState) => state.restaurantsPage);

  useEffect(() => {
    dispatch(fetchRestaurantsPageData());
  }, [dispatch]);

  return (
    <>
      <div className='restaurants-page-container'>
        <h2 className='title'>{restaurants.title}</h2>
        <div className='restaurants-container'>
          <Fade>
            {restaurants.cards.map((card: CardProps) => (
              <Card {...card} className='restaurants-page-card' key={card.title} />
            ))}
          </Fade>
        </div>
      </div>
    </>
  );
};

export default RestaurantsPage;
