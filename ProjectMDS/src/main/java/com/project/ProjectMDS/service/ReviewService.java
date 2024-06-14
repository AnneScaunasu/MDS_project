package com.project.ProjectMDS.service;

import com.project.ProjectMDS.model.Review;
import com.project.ProjectMDS.repository.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    // operatii crud pe review
    public List<Review> getAllReviews() {
        return reviewRepository.findAll();
    }

    public Review getReviewById(Long id) {
        return reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("Review not found"));
    }

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public Review updateReview(Long id, Review review) {
        Review existingReview = reviewRepository.findById(id).orElseThrow(() -> new RuntimeException("Review not found"));
        existingReview.setReview_text(review.getReview_text());
        existingReview.setRating(review.getRating());
        existingReview.setReview_date(review.getReview_date());
        existingReview.setBooking(review.getBooking());
        return reviewRepository.save(existingReview);
    }

    public void deleteReview(Long id) {
        reviewRepository.deleteById(id);
    }
}

