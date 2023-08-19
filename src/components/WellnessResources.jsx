// WellnessResources.js
import React from 'react';
import './WellnessResources.css';
import { Link, Outlet } from 'react-router-dom';

function WellnessResources() {
    const resources = [
        { id: 1, title: 'Medi Remind', path: 'medicine', imgurl: 'https://plus.unsplash.com/premium_photo-1661768124354-af77effc81d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1lZGljaW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=700&q=60' },
        { id: 2, title: 'Yoga', path: 'yoga', imgurl: 'https://t3.ftcdn.net/jpg/04/17/45/48/360_F_417454891_gAre2t4yNiZrLc1f33namA26jlk0Kteq.jpg' },
        { id: 3, title: 'Meditation', path: 'meditation', imgurl: 'https://cdn.pixabay.com/photo/2016/05/10/21/50/meditation-1384758_1280.jpg' },
        { id: 4, title: 'Excercise', path: 'excercise', imgurl: 'https://media.istockphoto.com/id/1388547886/photo/i-feel-fresh-and-ready-for-the-day.jpg?s=612x612&w=0&k=20&c=uZTo76zlHuWwbBMs6fYT-jgplBlWrBKKivIW3pSKP0U=' },
        { id: 5, title: 'Walk', path: 'walk', imgurl: 'https://media.istockphoto.com/id/544600984/photo/choose-your-fitness-goals-and-get-going.jpg?s=612x612&w=0&k=20&c=4JWF7ho013JJVlhb9vZdTtfJ41ZfOfZmPllTUoX44i0=' },
        { id: 6, title: 'YourProgress', path: 'progress', imgurl: 'https://img.freepik.com/free-photo/new-life-emerges-wet-spring-season-generative-ai_188544-7963.jpg?size=626&ext=jpg&ga=GA1.2.2118196459.1692449452&semt=sph' },
        { id: 7, title: 'Treatment', path: 'treatment', imgurl: 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVkaWNpbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60' }
    ];

    return (
        <>
        <section className="wellness-resources">
                <div className='wellness-title'>
                    <h2><Link id='ct' to='/letstart'>Wellness Resources</Link></h2>
                    <h3><Link to='/' id='ct'>Home</Link></h3>
                </div>
            <div className="resource-list">
                {resources.map((resource) => (
                    <Link key={resource.id} to={resource.path} className="resource-card">
                        <p>{resource.title}</p>
                        <img src={resource.imgurl} alt={resource.title} />
                    </Link>
                ))}
            </div>
        </section>
            <section className='outlet-section'>
                <Outlet />
            </section>

        </>

    );
}

export default WellnessResources;


