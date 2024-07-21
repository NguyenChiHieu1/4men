import Categories from "../../components/home/Categories";
import HomeProduct from "../../components/home/HomeProduct";
import Nav from "../../components/home/Nav";
import Slider from "../../components/home/Slider";
import Footer from "../../components/Footer.js";
import { useRandomCategoriesQuery } from "../../store/services/categoryService";
import AdvertisementDialog from '../../components/home/AdvertisementDialog';
import React, { useState } from 'react';
const Home = () => {
  const { data, isFetching } = useRandomCategoriesQuery();
  const [showDialog, setShowDialog] = useState(true);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <>
      {showDialog && <AdvertisementDialog onClose={handleClose} />}
      <Nav />
      <div className="mt-[70px]">
        <Slider />
      </div>
      <div className="my-container mt-10">
        <Categories />
        {!isFetching &&
          data?.categories?.length > 0 &&
          data?.categories.map((category) => (
            <HomeProduct category={category} key={category._id} />
          ))}
      </div>
      <Footer />
    </>
  );
};
export default Home;
