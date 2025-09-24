import { Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface Review {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
  role?: string;
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Elyaz Alzumairi',
    avatar: 'https://images.unsplash.com/photo-1652795385697-1e5e522c98d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdW5ueSUyMGJ1c2luZXNzJTIwcHJvZmVzc2lvbmFsJTIwYXZhdGFyfGVufDF8fHx8MTc1ODYyNjYwNXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: "I really like your ideas—this is an outstanding and inspiring project. The concept is not only creative but also practical, with the potential to create meaningful social impact.",
    role: 'Social Impact Consultant'
  },
  {
    id: '2',
    name: 'Hoque Ehsanul',
    avatar: 'https://images.unsplash.com/photo-1698006150156-3779d5c2306c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxxdWlya3klMjBvZmZpY2UlMjB3b3JrZXIlMjBoZWFkc2hvdHxlbnwxfHx8fDE3NTg2MjY2MDV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: "This is truly amazing, team! I would rate it 10/10. Your idea is strong enough to become a real-world project, and I highly recommend moving forward with its implementation.",
    role: 'Tech Innovation Specialist'
  },
  {
    id: '3',
    name: 'Hasnain Haider',
    avatar: 'https://images.unsplash.com/photo-1718433720653-59e72239e939?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjaGVlcmZ1bCUyMGJ1c2luZXNzJTIwcGVyc29uJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzU4NjI2NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5,
    review: "Excellent work! The project is innovative and well thought out. I especially appreciate the focus on sustainability and youth empowerment. One suggestion would be to further explore partnerships with local governments and tech companies to strengthen scalability and long-term support.",
    role: 'Strategic Partnership Advisor'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex items-center space-x-1" role="img" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating
              ? 'fill-yellow-400 text-yellow-400'
              : 'text-muted-foreground'
          }`}
        />
      ))}
    </div>
  );
};

export function Reviews() {
  return (
    <section 
      className="py-16 px-4 sm:px-6 lg:px-8 bg-background"
      aria-labelledby="reviews-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 
            id="reviews-heading"
            className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
          >
            💬 Reviews & Feedback
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            What our community and experts are saying about the Digital Empowerment Hub project
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <article
              key={review.id}
              className="bg-card rounded-lg p-6 shadow-lg border border-border hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <ImageWithFallback
                  src={review.avatar}
                  alt={`Profile picture of ${review.name}`}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary/20"
                />
                <div>
                  <h3 className="font-semibold text-card-foreground">
                    {review.name}
                  </h3>
                  {review.role && (
                    <p className="text-sm text-muted-foreground">
                      {review.role}
                    </p>
                  )}
                </div>
              </div>

              <StarRating rating={review.rating} />

              <blockquote className="mt-4 text-card-foreground italic">
                "{review.review}"
              </blockquote>

              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-primary">
                    Verified Review
                  </span>
                  <div className="flex items-center space-x-1">
                    <span className="text-sm text-muted-foreground">
                      {review.rating}/5
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-lg border border-primary/20">
            <div className="text-center">
              <div className="flex items-center justify-center mb-2">
                <StarRating rating={5} />
                <span className="ml-2 font-bold text-xl text-foreground">5.0</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Average rating from our community
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}