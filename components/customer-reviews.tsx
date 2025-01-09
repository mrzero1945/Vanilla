import { Star, StarHalf } from 'lucide-react'

interface Review {
  author: string
  rating: number
  comment: string
}

interface CustomerReviewsProps {
  reviews: Review[]
}

export function CustomerReviews({ reviews }: CustomerReviewsProps) {
  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>
      <div className="flex items-center mb-4">
        <div className="flex mr-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <span key={star}>
              {star <= averageRating ? (
                <Star className="text-yellow-400 fill-current" />
              ) : star - 0.5 <= averageRating ? (
                <StarHalf className="text-yellow-400 fill-current" />
              ) : (
                <Star className="text-gray-300" />
              )}
            </span>
          ))}
        </div>
        <span className="text-muted-foreground">
          {averageRating.toFixed(1)} out of 5
        </span>
      </div>
      <div className="space-y-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b pb-4">
            <div className="flex items-center mb-2">
              <span className="font-semibold mr-2">{review.author}</span>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={star <= review.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                  />
                ))}
              </div>
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

