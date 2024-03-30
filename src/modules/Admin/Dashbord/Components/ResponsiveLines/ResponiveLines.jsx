const data = [
  {
    "id": "japan",
    "color": "hsl(42, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 47
      },
      {
        "x": "helicopter",
        "y": 51
      },
      {
        "x": "boat",
        "y": 45
      },
      {
        "x": "train",
        "y": 281
      },
      {
        "x": "subway",
        "y": 35
      },
      {
        "x": "bus",
        "y": 29
      },
      {
        "x": "car",
        "y": 160
      },
      {
        "x": "moto",
        "y": 39
      },
      {
        "x": "bicycle",
        "y": 184
      },
      {
        "x": "horse",
        "y": 186
      },
      {
        "x": "skateboard",
        "y": 71
      },
      {
        "x": "others",
        "y": 218
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(54, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 240
      },
      {
        "x": "helicopter",
        "y": 2
      },
      {
        "x": "boat",
        "y": 108
      },
      {
        "x": "train",
        "y": 22
      },
      {
        "x": "subway",
        "y": 143
      },
      {
        "x": "bus",
        "y": 41
      },
      {
        "x": "car",
        "y": 26
      },
      {
        "x": "moto",
        "y": 231
      },
      {
        "x": "bicycle",
        "y": 85
      },
      {
        "x": "horse",
        "y": 273
      },
      {
        "x": "skateboard",
        "y": 294
      },
      {
        "x": "others",
        "y": 216
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(340, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 41
      },
      {
        "x": "helicopter",
        "y": 175
      },
      {
        "x": "boat",
        "y": 177
      },
      {
        "x": "train",
        "y": 117
      },
      {
        "x": "subway",
        "y": 20
      },
      {
        "x": "bus",
        "y": 285
      },
      {
        "x": "car",
        "y": 64
      },
      {
        "x": "moto",
        "y": 157
      },
      {
        "x": "bicycle",
        "y": 238
      },
      {
        "x": "horse",
        "y": 193
      },
      {
        "x": "skateboard",
        "y": 291
      },
      {
        "x": "others",
        "y": 18
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(310, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 16
      },
      {
        "x": "helicopter",
        "y": 120
      },
      {
        "x": "boat",
        "y": 62
      },
      {
        "x": "train",
        "y": 11
      },
      {
        "x": "subway",
        "y": 19
      },
      {
        "x": "bus",
        "y": 94
      },
      {
        "x": "car",
        "y": 234
      },
      {
        "x": "moto",
        "y": 7
      },
      {
        "x": "bicycle",
        "y": 265
      },
      {
        "x": "horse",
        "y": 181
      },
      {
        "x": "skateboard",
        "y": 273
      },
      {
        "x": "others",
        "y": 75
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(288, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 81
      },
      {
        "x": "helicopter",
        "y": 116
      },
      {
        "x": "boat",
        "y": 227
      },
      {
        "x": "train",
        "y": 141
      },
      {
        "x": "subway",
        "y": 203
      },
      {
        "x": "bus",
        "y": 136
      },
      {
        "x": "car",
        "y": 120
      },
      {
        "x": "moto",
        "y": 18
      },
      {
        "x": "bicycle",
        "y": 195
      },
      {
        "x": "horse",
        "y": 299
      },
      {
        "x": "skateboard",
        "y": 58
      },
      {
        "x": "others",
        "y": 192
      }
    ]
  }
]
import { ResponsiveLine } from '@nivo/line';

export const ResponsiveLines = () => (
    <ResponsiveLine
        data={data}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }}
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: true,
            reverse: false
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation',
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count',
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
)