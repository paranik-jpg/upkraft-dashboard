import React from 'react';

import { upcomingLessons } from '../data';

const LessonRow = ({ date, time, course, student }) => (
    <div className="grid grid-cols-4 gap-4 items-center py-3 border-b border-gray-200 text-sm text-gray-700">
        <span>{date}</span>
        <span>{time}</span>
        <span>{course}</span>
        <span>{student}</span>
    </div>
);


const UpcomingLessons = () => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md h-full">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">Upcoming Lessons</h3>
                <a href="#" className="text-primary-purple font-medium">View All</a>
            </div>
            <div>
                {upcomingLessons.map((lesson) => (
                    <LessonRow key={lesson.id} {...lesson} />
                ))}
            </div>
        </div>
    );
};

export default UpcomingLessons;