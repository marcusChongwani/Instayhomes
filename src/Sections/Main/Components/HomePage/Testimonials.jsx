
import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const SwipeReviews = () => {
  const [reviews, setReviews] = useState(reviewData);

  return (
    <div className=" h-[500px]">
      <p>hdjfjfndndn</p>
    <div className=" relative flex items-center justify-center bg-gray-50 ">
      {reviews.map((review) => (
        <ReviewCard key={review.id} {...review} setReviews={setReviews} reviews={reviews} />
      ))}
    </div>
      </div>
  );
};

const ReviewCard = ({ id, avatar, name, role, text, setReviews, reviews }) => {
  const x = useMotionValue(0);
  const rotateRaw = useTransform(x, [-150, 150], [-10, 10]);
  const opacity = useTransform(x, [-150, 0, 150], [0, 1, 0]);

  const isFront = reviews.length > 0 && id === reviews[reviews.length - 1]?.id;
  const rotate = useTransform(() => (isFront ? rotateRaw.get() : id % 2 ? 4 : -4) + "deg");

  const handleDragEnd = (_, info) => {
    if (Math.abs(info.point.x) > 100) {
      setReviews((prev) => prev.filter((review) => review.id !== id));
    }
  };

  return (
    <motion.div
      className=" absolute w-[350px] p-6 border border-gray-100 rounded-3xl bg-white shadow-xl"
      style={{
        x,
        opacity,
        rotate,
        boxShadow: isFront
          ? "0 20px 25px -5px rgb(0 0 0 / 0.5), 0 8px 10px -6px rgb(0 0 0 / 0.5)"
          : undefined,
      }}
      animate={{ scale: isFront ? 1 : 0.95 }}
      drag="x"
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.5}
      onDragEnd={handleDragEnd}
    >
      <div className="flex gap-4">
        <img className="w-12 h-12 rounded-full" src={avatar} alt={name} />
        <div>
          <h6 className="text-lg font-medium text-gray-700 ">{name}</h6>
          <p className="text-sm text-gray-500 ">{role}</p>
        </div>
      </div>
      <p className="mt-4 text-gray-600 ">{text}</p>
    </motion.div>
  );
};

const reviewData = [
  {
    id: 1,
    name: "Jane Doe",
    role: "Marketing",
    avatar: "https://randomuser.me/api/portraits/women/14.jpg",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vitae nisi id orci tempor feugiat.",
  },
  {
    id: 2,
    name: "John Smith",
    role: "Product Manager",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    text: "Great experience! The service was outstanding and I’d highly recommend it to anyone.",
  },
  {
    id: 3,
    name: "Sarah Connor",
    role: "Software Engineer",
    avatar: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Very intuitive and easy to use. The design is fantastic, and I love the smooth animations!",
  },
  {
    id: 4,
    name: "Michael Lee",
    role: "Entrepreneur",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    text: "I’ve used many similar products before, but this one stands out. Absolutely brilliant!",
  },
];

export default SwipeReviews;