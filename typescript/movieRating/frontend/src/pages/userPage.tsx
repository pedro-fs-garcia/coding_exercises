import React, { useState, useEffect } from "react";
import { Star } from "lucide-react";
import { getUserReviews, Review } from "../services/ratingServices";

const UserPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]|null>([]);
  const [selectedReview, setSelectedReview] = useState<Review | null>(null);
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const loadUserRatings = async () =>{
    let ratingList: Review[]|null = [];
    ratingList = await getUserReviews();
    setReviews(ratingList);
  }

  useEffect(() => {
    loadUserRatings();
  }, []);

  const handleEditReview = (review: Review) => {
    setSelectedReview(review);
    setRating(review.evaluation);
    setIsModalOpen(true);
  };

  const submitRating = () => {

  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Meu Perfil</h1>
      <div className="p-4 border rounded-lg shadow-lg bg-white">
        <h2 className="text-xl font-semibold mb-2">Minhas Avaliações</h2>
        <a href="/movies"><button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        todos os filmes
        </button></a>
        <div className="space-y-4">
          {reviews?.map((review) => (
            <div key={review.rating_id} className="flex items-center justify-between p-4 border rounded-lg shadow-sm">
              <img src={review.poster} alt={review.title} className="w-16 h-24 rounded" />
              <div>
                <h3 className="text-lg font-medium">{review.title}</h3>
                <p className="text-gray-600">Nota: {review.evaluation}</p>
              </div>
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                onClick={() => handleEditReview(review)}
              >
                Editar
              </button>
            </div>
          ))}
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Avaliar {selectedReview?.title}</h2>
            <div className="flex gap-2 mt-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`cursor-pointer w-6 h-6 ${rating >= star ? "text-yellow-500" : "text-gray-400"}`}
                  onClick={() => setRating(star)}
                />
              ))}
            </div>
            <button
              className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
              onClick={submitRating}
            >
              Enviar Avaliação
            </button>
            <button
              className="mt-2 w-full px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
              onClick={() => setIsModalOpen(false)}
            >
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserPage;
