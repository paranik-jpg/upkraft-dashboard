import React from 'react';
import { FiUsers, FiAward, FiBookOpen } from 'react-icons/fi';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import avatar from '../assets/avatar.png';
import referralImg from '../assets/referral-img.png'; 
import StatCard from './StatCard';
import PerformanceGauge from './PerformanceGauge';
import UpcomingLessons from './UpcomingLessons';

const Dashboard = () => {
  return (
    <main className="flex-1 bg-light-bg p-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <StatCard value="30" title="Total Active Students" />
              <StatCard value="80%" title="Tutor CSAT Score" />
              <StatCard value="15%" title="Assignment Completion Rate" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <StatCard value="30" title="Total Active Students" />
              <StatCard value="80%" title="Tutor CSAT Score" />
              <StatCard value="15%" title="Assignment Completion Rate" />
          </div>
          <UpcomingLessons />
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-accent-blue">
            <div className="flex items-center space-x-4">
              <img src={avatar} alt="Sherry Wolf" className="w-20 h-20 rounded-full" />
              <div>
                <h2 className="text-xl font-bold">Sherry Wolf</h2>
                <p className="text-gray-500">Piano Tutor</p>
              </div>
            </div>
            <div className="mt-6 space-y-4 text-gray-700">
              <div className="flex items-center"><FiUsers className="mr-3 text-primary-purple" /> Students <span className="ml-auto font-semibold text-gray-900">30</span></div>
              <div className="flex items-center"><FiBookOpen className="mr-3 text-primary-purple" /> Course <span className="ml-auto font-semibold text-gray-900">6</span></div>
              <div className="flex items-center"><FiAward className="mr-3 text-primary-purple" /> Reward <span className="ml-auto font-semibold text-gray-900">3</span></div>
            </div>
          </div>
          
          <div className="relative text-white p-6 rounded-xl shadow-md flex flex-col items-center text-center bg-primary-purple">
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-500 to-primary-purple opacity-50"></div>

              <div className="relative z-10">
                  <div className="bg-white p-4 rounded-full absolute -top-20 left-1/2 -translate-x-1/2 shadow-lg">
                      <img src={referralImg} alt="Refer and Earn" className="w-20 h-20 object-contain" />
                  </div>
                  <div className="mt-16 pt-2">
                      <h3 className="text-2xl font-bold">Refer and Earn</h3>
                      <p className="text-sm my-3 text-white/75">Invite friends and earn exclusive rewards for every successful referral.</p>
                      <button className="bg-white text-primary-purple font-bold py-3 px-6 rounded-lg mt-3 w-full hover:bg-gray-100 transform hover:scale-105 transition-transform duration-200 ease-in-out" onClick={() => alert('Refer Now button clicked!')}>
                          Refer Now &rarr;
                      </button>
                  </div>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
              <PerformanceGauge title="Overall Course Performance" value={7.6} color={'#FFB648'} />
              <PerformanceGauge title="Overall Student Performance" value={6.6} color={'#FFB648'} />
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md text-center">
              <h3 className="text-gray-500 font-semibold mb-4">Feedback Pending</h3>
              <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
              <CircularProgressbar
                  value={12}
                  maxValue={20}
                  styles={buildStyles({
                  pathColor: '#F761A1',
                  trailColor: '#fee2e2',
                  strokeLinecap: 'butt'
                  })}
              />
              <span className="absolute text-3xl font-bold text-gray-800">12</span>
              </div>
              <button className="bg-primary-purple text-white font-bold py-3 px-6 rounded-lg mt-6 w-full hover:bg-purple-700 transition" onClick={() => alert('Give Feedback button clicked!')}>
              Give Feedback
              </button>
          </div>
        </div>

      </div>
    </main>
  );
};

export default Dashboard;