import React from 'react'
import '../impact/ImpactHero.css'
import ashishImg from '../../assets/ashish-n.jpg'
import ashutoshImg from '../../assets/Ashutosh_Mishra.jpg'


const ImpactHero = () => {
  const progress = 23.5 // Avg Increase Rate

  return (
    <section className="impact-hero">
      <div className="impact-hero-container">
        {/* Left: Big Number */}
        <div className="impact-number">
          <h1>Empowering <span>3000+</span></h1>
          <p>Lives and Counting</p>
        </div>

        {/* Center: Circular Graph */}
        <div className="impact-progress">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="progress-ring__bg"
              stroke="#eee"
              strokeWidth="10"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
            />
            <circle
              className="progress-ring__fill"
              stroke="#4285F4"
              strokeWidth="10"
              fill="transparent"
              r="50"
              cx="60"
              cy="60"
              strokeDasharray={2 * Math.PI * 50}
              strokeDashoffset={2 * Math.PI * 50 * (1 - progress / 100)}
            />
            <text x="50%" y="50%" textAnchor="middle" dy="0.3em" className="progress-text">
              {progress}%
            </text>
          </svg>
          <p>Avg. increase rate monthly</p>
        </div>

        {/* Right: Founders */}
        <div className="impact-founders">
          <div className="founder-card">
            <img src={ashishImg} alt="Ashish Kumar" />
            <div className="founder-info">
              <h4>MR. Ashish Kumar</h4>
              <p>Co-Founder and Director</p>
            </div>
          </div>
          <div className="founder-card">
            <img src={ashutoshImg} alt="Ashutosh Misher" />
            <div className="founder-info">
              <h4>MR. Ashutosh Misher</h4>
              <p>Co-Founder and Director</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactHero
