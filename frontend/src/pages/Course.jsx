import React from 'react'
import Card from '../components/Card/Card'
import CoursesHeader from '../components/CoursesHeader/CoursesHeader'

const Course = () => {
  return (
    <div>
      <h1>Course Page</h1>
      <CoursesHeader
        score={88}
        cp={164}
        birdness={19}
        usefulness={86}
        enjoyability={62}
        averageGrade={71}
      />
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Course