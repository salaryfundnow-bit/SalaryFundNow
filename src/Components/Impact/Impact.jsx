import React, { useEffect, useState } from 'react'
import '../Impact/impact.css'
import { FaBuilding, FaUserFriends, FaMapMarkerAlt, FaUsers, FaMoneyBillWave } from 'react-icons/fa'

const statsData = [
  { label: 'Branches', value: 20, icon: <FaBuilding /> },
  { label: 'Employees', value: 100, icon: <FaUserFriends /> },
  { label: 'States', value: 4, icon: <FaMapMarkerAlt /> },
  { label: 'Clients', value: 3200, icon: <FaUsers /> },
  { label: 'AUM (Cr)', value: 15, icon: <FaMoneyBillWave /> },
]

const Impact = () => {
  const [counts, setCounts] = useState(statsData.map(() => 0))

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev =>
        prev.map((count, idx) => {
          const target = statsData[idx].value
          const increment = Math.ceil(target / 100)
          if (count < target) {
            return count + increment > target ? target : count + increment
          }
          return count
        })
      )
    }, 30)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="impact">
      <h2 className="impact-title">Our Impact Overview</h2>
      <div className="impact-stats">
        {statsData.map((stat, idx) => (
          <div className="impact-card" key={idx}>
            <div className="impact-icon">{stat.icon}</div>
            <h3>{counts[idx]}+</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Impact
