import { Body, Caption, Container, Title } from "../../router";
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from "react-icons/io";
import { commonClassNameOfInput } from "../../components/common/Design";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const ProductsDetailsPage = () => {
  const [activeTab, setActiveTab] = useState("description");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const images = [
    "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg",
    "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-13.jpg",
    "https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-12.jpg",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };


  return (
    <>
      <section className="pt-24 px-8">
        <Container>
          <div className="flex justify-between gap-8">
          <div className="w-1/2">
              <div className="relative h-[70vh] group">
                {/* Main Image */}
                <img src={images[currentImageIndex]} alt="" className="w-full h-full object-cover rounded-xl" />
                
                {/* Arrows (visible on hover) */}
                <button 
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                  onClick={handlePrevImage}
                >
                  <FaArrowLeft size={20} />
                </button>
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-900 bg-opacity-50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition"
                  onClick={handleNextImage}
                >
                  <FaArrowRight size={20} />
                </button>
              </div>

              {/* Thumbnail Images */}
              <div className="flex gap-2 mt-2 justify-center">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt=""
                    className={`w-[10vw] h-[15vh] object-cover rounded-md cursor-pointer border-2 ${
                      index === currentImageIndex ? "border-green-500" : "border-transparent"
                    }`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>

            <div className="w-1/2">
              <Title level={2} className="capitalize">
                Couple Wedding Ring
              </Title>
              <div className="flex gap-5">
                <div className="flex text-green ">
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStar size={20} />
                  <IoIosStarHalf size={20} />
                  <IoIosStarOutline size={20} />
                </div>
                <Caption>(2 customer reviews)</Caption>
              </div>
              <br />
              <Body>Korem ipsum dolor amet, consectetur adipiscing elit. Maece nas in pulvinar neque. Nulla finibus lobortis pulvinar. Donec a consectetur nulla.</Body>
              <br />
              <Caption>Item condition: New</Caption>
              <br />
              <Caption>Item Verifed: Yes</Caption>
              <br />
              <Caption>Time left:</Caption>
              <br />
              <div className="flex gap-8 text-center">
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>12</Title>
                  <Caption>Hours</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>36</Title>
                  <Caption>Minutes</Caption>
                </div>
                <div className="p-5 px-10 shadow-s1">
                  <Title level={4}>51</Title>
                  <Caption>Seconds</Caption>
                </div>
              </div>
              <br />
              <Title className="flex items-center gap-2">
                Auction ends:
                <Caption>December 31, 2024 12:00 am</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Timezone: <Caption>UTC 0</Caption>
              </Title>
              <Title className="flex items-center gap-2 my-5">
                Price:<Caption>$200 </Caption>
              </Title>
              <Title className="flex items-center gap-2">
                Current bid:<Caption className="text-3xl">$500 </Caption>
              </Title>
              <div className="p-5 px-10 shadow-s3 py-8">
                <form className="flex gap-3 justify-between">
                  <input className={commonClassNameOfInput} type="number" name="price" />
                  <button type="button" className="bg-gray-100 rounded-md px-5 py-3">
                    <AiOutlinePlus />
                  </button>
                  <button type="submit" className={`py-3 px-8 rounded-lg ${"bg-gray-400 text-gray-700 cursor-not-allowed"}`}>
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="details mt-8">
            <div className="flex items-center gap-5">
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "description" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("description")}>
                Description
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "auctionHistory" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("auctionHistory")}>
                Auction History
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "reviews" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("reviews")}>
                Reviews(2)
              </button>
              <button className={`rounded-md px-10 py-4 text-black shadow-s3 ${activeTab === "moreProducts" ? "bg-green text-white" : "bg-white"}`} onClick={() => handleTabClick("moreProducts")}>
                More Products
              </button>
            </div>

            <div className="tab-content mt-8">
              {activeTab === "description" && (
                <div className="description-tab shadow-s3 p-8 rounded-md">
                  <Title level={4}>Description</Title>
                  <br />
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
                    growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
                    create and capture value. The market is open for players in every kind of field. Are you a collector.
                  </Caption>
                  <Caption className="leading-7">
                    If you’ve been following the crypto space, you’ve likely heard of Non-Fungible Tokens (Biddings), more popularly referred to as ‘Crypto Collectibles.’ The world of Biddings is
                    growing rapidly. It seems there is no slowing down of these assets as they continue to go up in price. This growth comes with the opportunity for people to start new businesses to
                    create and capture value. The market is open for players in every kind of field. Are you a collector.
                  </Caption>
                  <br />
                  <Title level={4}>Product Overview</Title>
                  <div className="flex justify-between gap-5">
                  <div className="mt-4 capitalize w-1/2">
                  <div className="flex justify-between border-b py-3">
                    <Title>Make</Title>
                    <Caption>BMW</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Model</Title>
                    <Caption>X5</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Year</Title>
                    <Caption>2022</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Mileage</Title>
                    <Caption>15,000 km</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Fuel Type</Title>
                    <Caption>Diesel</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Transmission</Title>
                    <Caption>Automatic</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Engine</Title>
                    <Caption>3.0L Turbo</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Body Type</Title>
                    <Caption>SUV</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Seats</Title>
                    <Caption>5</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Color</Title>
                    <Caption>Metallic Blue</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Starting Bid</Title>
                    <Caption>$40,000</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Current Highest Bid</Title>
                    <Caption>$52,000</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Bidding Ends</Title>
                    <Caption>March 31, 2025 5:00 PM UTC</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Sold</Title>
                    <Caption>No</Caption>
                  </div>
                  <div className="flex justify-between border-b py-3">
                    <Title>Verified</Title>
                    <Caption>Yes</Caption>
                  </div>
                  <div className="flex justify-between py-3">
                    <Title>Last Updated</Title>
                    <Caption>March 20, 2025</Caption>
                  </div>
                </div>
                    <div className="w-1/2">
                      <div className="h-[60vh] p-2 bg-green rounded-xl">
                        <img src="https://bidout-wp.b-cdn.net/wp-content/uploads/2022/10/Image-14.jpg" alt="" className="w-full h-full object-cover rounded-xl" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "auctionHistory" && <AuctionHistory />}
              {activeTab === "reviews" && (
                <div className="reviews-tab shadow-s3 p-8 rounded-md">
                  <Title level={5} className=" font-normal">
                    Reviews
                  </Title>
                  <hr className="my-5" />
                  <Title level={5} className=" font-normal text-red-500">
                    Cooming Soon!
                  </Title>
                </div>
              )}
              {activeTab === "moreProducts" && (
                <div className="more-products-tab shadow-s3 p-8 rounded-md">
                  <h1>More Products</h1>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};
export const AuctionHistory = () => {
  return (
    <>
      <div className="shadow-s1 p-8 rounded-lg">
        <Title level={5} className=" font-normal">
          Auction History
        </Title>
        <hr className="my-5" />

        <div className="relative overflow-x-auto rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-5">
                  Time
                </th>
                <th scope="col" className="px-6 py-3">
                  Bid Amount(USD)
                </th>
                <th scope="col" className="px-6 py-3">
                  User
                </th>
                <th scope="col" className="px-6 py-3">
                  Auto
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b hover:bg-gray-50">
                <td className="px-6 py-4">12:00 am</td>
                <td className="px-6 py-4">$200</td>
                <td className="px-6 py-4">Sunil Pokhrel</td>
                <td className="px-6 py-4"> </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};
