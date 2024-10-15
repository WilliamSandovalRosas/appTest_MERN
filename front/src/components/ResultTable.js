import React from 'react'

export default function ResultTable() {
  return (
    <div className='container'>

        <table>
            <thead>
                
                    <th>Username</th>
                    <th>Attempts</th>
                    <th>Earn Points</th>
                    <th>Result</th>

            </thead>
            <tbody>
                <tr>
                    <td>william</td>
                    <td>10</td>
                    <td>100</td>
                    <td>Passed</td>
                </tr>

            </tbody>
        </table>
        
    </div>
  )
}
