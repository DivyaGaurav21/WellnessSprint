
import React, { useState } from 'react';
import './YogaChallenges.css'; 

const ExcerciseChallenges = ({ completeChallenge }) => {
    const [completedVideos, setCompletedVideos] = useState([]);
    const [points, setPoints] = useState(0);

    const yogaVideos = [
        {
            title: 'Beginner Excercise - 1',
            videoId: 'bO6NNfX_1ns',
        },
        {
            title: 'Beginner Exercise - 2',
            videoId: 'Ir5hQvakCww',
        },
        {
            title: 'Intermediate Excercise',
            videoId: 'F1BBM5ZBILE',
        },
    ];

    const handleVideoCompletion = (videoId, pointsToAdd) => {
        if (!completedVideos.includes(videoId)) {
            setCompletedVideos([...completedVideos, videoId]);
            setPoints(points + pointsToAdd);
            completeChallenge(pointsToAdd);
        }
    };

    return (
        <div className="yoga-container">
            <h2>Excercise Videos</h2>
            <p>Points earned: {points}</p>
            <div className="yoga-video-list">
                {yogaVideos.map((video, index) => (
                    <div key={index} className="yoga-video">
                        <h3>{video.title}</h3>
                        <iframe
                            title={video.title}
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${video.videoId}`}
                            allowFullScreen
                        ></iframe>
                        <button
                            className="complete-button"
                            onClick={() => handleVideoCompletion(video.videoId, 10)}
                            disabled={completedVideos.includes(video.videoId)}
                        >
                            {completedVideos.includes(video.videoId) ? 'Completed' : 'Complete'}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ExcerciseChallenges;
