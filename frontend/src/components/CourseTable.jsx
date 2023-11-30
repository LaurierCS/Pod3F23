import React from 'react'

const CourseTable = () => {
  return (
    <div>
      <div className="overflow-x-auto mt-20 mb-20">
  <table className="table">
    {/* head */}
    <thead>
      <tr className='text-lg text-blue-500'>
        <th></th>
        <th>Course Name</th>
        <th>Course Code</th>
        <th>Useful</th>
        <th>Birdness</th>
        <th>Enjoyability</th>
      </tr>
    </thead>

    <tbody>
      {/* row 1 */}
      <tr className='hover'>
        <th>1</th>
        <td>Introduction to Programming</td>
        <td>CP104</td>
        <td>Very</td>
        <td>yes</td>
        <td>no</td>
      </tr>
      {/* row 2 */}
      <tr className='hover'>
        <th>2</th>
        <td>Linear Algebra</td>
        <td>MA122</td>
        <td>very</td>
        <td>NO RUN</td>
        <td>ABSOLUTELY NOT</td>
      </tr>
      {/* row 3 */}
      <tr className='hover'>
        <th>3</th>
        <td>Calculus I</td>
        <td>MA103</td>
        <td>very</td>
        <td>yes</td>
        <td>no</td>
      </tr>

      {/* row 4 */}
      <tr className='hover'>
        <th>4</th>
        <td>Introduction to Differential Calculus</td>
        <td>MA102</td>
        <td>very</td>
        <td>yes</td>
        <td>no</td>
      </tr>

      
    </tbody>
  </table>
</div>
    </div>
  )
}

export default CourseTable