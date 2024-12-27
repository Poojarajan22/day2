import { TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'

const Tab = () => {
  return (
      <div>

          <TableContainer>
              <TableHead>
                  <TableRow>
                      <TableCell>si no</TableCell>
                      <TableCell>name</TableCell>
                      <TableCell>age</TableCell>
                      <TableCell>course</TableCell>
                  </TableRow>
              </TableHead>
              <TableBody>
                  <TableRow>
                      <TableCell>1</TableCell>
                      <TableCell>pooja</TableCell>
                      <TableCell>22</TableCell>
                      <TableCell>cs</TableCell>
                  </TableRow>
                  <TableRow>
                      <TableCell>2</TableCell>
                      <TableCell>sona</TableCell>
                      <TableCell>23</TableCell>
                      <TableCell>maths</TableCell>
                  </TableRow>
              </TableBody>
          </TableContainer>   
          
    </div>
  )
}

export default Tab