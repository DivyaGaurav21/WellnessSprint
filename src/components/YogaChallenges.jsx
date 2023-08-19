
import React, { useState } from 'react';
import './YogaChallenges.css';

const YogaChallenges = () => {
    const [completedVideos, setCompletedVideos] = useState([]);
    const [points, setPoints] = useState(0);

    const yogaVideos = [
        {
            title: 'Beginner Yoga Routine',
            videoId: 'nQwKKCqkJxg',
        },
        {
            title: 'Yoga for stomach',
            videoId: '9MazN_6wdqI',
        },
        {
            title: 'Yoga for BackPain',
            videoId: '4E4hhHk8bLU',
        },
        // Add more video objects as needed
    ];

    const handleVideoCompletion = (videoId, pointsToAdd) => {
        if (!completedVideos.includes(videoId)) {
            setCompletedVideos([...completedVideos, videoId]);
            setPoints(points + pointsToAdd);
        }
    };

    return (
        <div className="yoga-container">
            <h2>Yoga Videos</h2>
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
                            onClick={() => handleVideoCompletion(video.videoId, 10)} // 10 points for completing a video
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

export default YogaChallenges;
