import { Viewer } from '@/types'
import type { NextApiRequest, NextApiResponse } from 'next'

type ResponseData = {
  viewers: Viewer[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  res.status(200).json({
    viewers: [{
      id: 1,
      name: 'alesha',
      tableNumber: 23,
      seatNumber: 1
    },
    {
      id: 2,
      name: 'popovich',
      tableNumber: 23,
      seatNumber: 2
    }]
  })
}