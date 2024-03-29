import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../../redux-toolkit/store";

import "./HomePage.scss";

import Header from "../../components/Header/Header";
import Hero from "../../components/Hero/Hero";
import CardsGallery from "../../components/CardsGallery/CardsGallery";
import IconsMeaning from "../../components/IconsMeaning/IconsMeaning";
import ChefOfTheWeek from "../../components/ChefOfTheWeek/ChefOfTheWeek";
import AboutUs from "../../components/AboutUs/AboutUs";
import Modal from "../../components/Modal/Modal";
import Footer from "../../components/Footer/Footer";
import SearchedCards from "../../components/SearchedCards/SearchedCards";

import { fetchHomePageData } from "../../redux-toolkit/thunks/homePageThunk";
import { CardType } from "../../models/types";
import IconsData from "../../constants/IconsData";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { popularRestaurants, signatureDishes, chefOfTheWeek, isModalOpen } = useSelector(
    (state: RootState) => state.homePage
  );

  const { isSearchActive } = useSelector((state: RootState) => state.search);

  useEffect(() => {
    dispatch(fetchHomePageData());
  }, [dispatch]);

  return (
    <>
      <Header />
      <div className='homepage-container'>
        <Hero />
        {isSearchActive ? (
          <SearchedCards />
        ) : (
          <>
            <div className='cards-gallery'>
              <CardsGallery cardsData={popularRestaurants} cardType={CardType.RestaurantType} />
              <CardsGallery cardsData={signatureDishes} cardType={CardType.DishType} />
            </div>
            <IconsMeaning icons={IconsData} />
            <div className='cards-gallery'>
              <ChefOfTheWeek chefData={chefOfTheWeek} />
            </div>
          </>
        )}
        <AboutUs />
      </div>
      <Footer />

      {isModalOpen && <Modal />}
    </>
  );
};

export default HomePage;
