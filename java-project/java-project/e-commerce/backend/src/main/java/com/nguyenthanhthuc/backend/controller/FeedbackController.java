package com.nguyenthanhthuc.backend.controller;

import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.nguyenthanhthuc.backend.entity.Feedback;
import com.nguyenthanhthuc.backend.service.FeedbackService;
import java.util.List;
import org.springframework.http.HttpHeaders;
@RestController
@AllArgsConstructor
@RequestMapping("api/feedbacks")
@CrossOrigin(origins = {"http://localhost:3000","http://localhost:3001"},exposedHeaders = "Content-Range")

public class FeedbackController {
     private FeedbackService feedbackService;
    //Create Feedback REST API
    @PostMapping
    public ResponseEntity<Feedback> createFeedback(@RequestBody Feedback feedback){
        Feedback saveFeedback = feedbackService.createFeedback(feedback);
        return new ResponseEntity<>(saveFeedback,HttpStatus.CREATED);
    }

    //Get Feedback by id REST API
    // http://localhost:8000/api/Feedbacks/1
    @GetMapping("{id}")
    public ResponseEntity<Feedback> getFeedbackById(@PathVariable("id") Long feedbackId){
        Feedback Feedback=feedbackService.getFeedbackById(feedbackId);
        return new ResponseEntity<>(Feedback,HttpStatus.OK);
    }
    //Get Feedback REST API
    // http://localhost:8000/api/Feedbacks
    @GetMapping
    public ResponseEntity<List<Feedback>> getAllFeedbacks(){
        List<Feedback> Feedbacks = feedbackService.getAllFeedbacks();
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Range","item 0-" + Feedbacks.size() + "/" + Feedbacks.size());
        return  ResponseEntity.ok().headers(headers).body(Feedbacks);
    }
    //Update Feedback REST API
    @PutMapping("{id}")
    //http://localhost:8000/api/Feedbacks/1
    public ResponseEntity<Feedback> updateFeedback(@PathVariable("id") Long feedbackId,
    @RequestBody Feedback Feedback){
        Feedback.setId(feedbackId);
        Feedback updateFeedback = feedbackService.updateFeedback(Feedback);
        return new ResponseEntity<>(updateFeedback,HttpStatus.OK);
    }
    //Delete Feedback REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteFeedback(@PathVariable("id") Long feedbackId){
        feedbackService.deleteFeedback(feedbackId);
        return new ResponseEntity<>("Feedback successfully deleted!", HttpStatus.OK);
    }
}
