package com.nguyenthanhthuc.backend.service;

import com.nguyenthanhthuc.backend.entity.Feedback;
import java.util.List;


public interface FeedbackService {
    public Feedback createFeedback(Feedback feedback);
    public Feedback getFeedbackById(Long feedbackId);
    public List<Feedback> getAllFeedbacks();
    public Feedback updateFeedback(Feedback feedback);
    public void deleteFeedback(Long feedbackId);
}
