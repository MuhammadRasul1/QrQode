import StudentsIcon from "assets/img/icon/Students.svg";
import MentorsIcon from "assets/img/icon/Mentors.svg";
import CurrentCourse from "assets/img/icon/CurrentCourse.svg";
import NewCourse from "assets/img/icon/NewCourse.svg";

export const useDashbordProps = () => {
  const list = [
    {
      title: "Студенты",
      count: 20,
      src: StudentsIcon,
      alt: "студенты",
    },
    {
      title: "Менторы",
      count: 10,
      src: MentorsIcon,
      alt: "менторы",
    },
    {
      title: "Нынешные курсы",
      count: 30,
      src: CurrentCourse,
      alt: "Нынешние курсы",
    },
    {
      title: "Новые курсы",
      count: 30,
      src: NewCourse,
      alt: "Новые курсы",
    },
  ]

const lineData =[
  {
    "id": "japan",
    "color": "hsl(99, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 258
      },
      {
        "x": "helicopter",
        "y": 285
      },
      {
        "x": "boat",
        "y": 26
      },
      {
        "x": "train",
        "y": 139
      },
      {
        "x": "subway",
        "y": 282
      },
      {
        "x": "bus",
        "y": 273
      },
      {
        "x": "car",
        "y": 106
      },
      {
        "x": "moto",
        "y": 108
      },
      {
        "x": "bicycle",
        "y": 156
      },
      {
        "x": "horse",
        "y": 284
      },
      {
        "x": "skateboard",
        "y": 182
      },
      {
        "x": "others",
        "y": 280
      }
    ]
  },
  {
    "id": "france",
    "color": "hsl(62, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 172
      },
      {
        "x": "helicopter",
        "y": 242
      },
      {
        "x": "boat",
        "y": 191
      },
      {
        "x": "train",
        "y": 146
      },
      {
        "x": "subway",
        "y": 26
      },
      {
        "x": "bus",
        "y": 286
      },
      {
        "x": "car",
        "y": 282
      },
      {
        "x": "moto",
        "y": 104
      },
      {
        "x": "bicycle",
        "y": 90
      },
      {
        "x": "horse",
        "y": 151
      },
      {
        "x": "skateboard",
        "y": 0
      },
      {
        "x": "others",
        "y": 252
      }
    ]
  },
  {
    "id": "us",
    "color": "hsl(296, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 26
      },
      {
        "x": "helicopter",
        "y": 264
      },
      {
        "x": "boat",
        "y": 29
      },
      {
        "x": "train",
        "y": 22
      },
      {
        "x": "subway",
        "y": 217
      },
      {
        "x": "bus",
        "y": 14
      },
      {
        "x": "car",
        "y": 122
      },
      {
        "x": "moto",
        "y": 176
      },
      {
        "x": "bicycle",
        "y": 258
      },
      {
        "x": "horse",
        "y": 13
      },
      {
        "x": "skateboard",
        "y": 202
      },
      {
        "x": "others",
        "y": 42
      }
    ]
  },
  {
    "id": "germany",
    "color": "hsl(175, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 144
      },
      {
        "x": "helicopter",
        "y": 53
      },
      {
        "x": "boat",
        "y": 272
      },
      {
        "x": "train",
        "y": 279
      },
      {
        "x": "subway",
        "y": 209
      },
      {
        "x": "bus",
        "y": 261
      },
      {
        "x": "car",
        "y": 44
      },
      {
        "x": "moto",
        "y": 260
      },
      {
        "x": "bicycle",
        "y": 289
      },
      {
        "x": "horse",
        "y": 188
      },
      {
        "x": "skateboard",
        "y": 270
      },
      {
        "x": "others",
        "y": 5
      }
    ]
  },
  {
    "id": "norway",
    "color": "hsl(108, 70%, 50%)",
    "data": [
      {
        "x": "plane",
        "y": 270
      },
      {
        "x": "helicopter",
        "y": 231
      },
      {
        "x": "boat",
        "y": 146
      },
      {
        "x": "train",
        "y": 281
      },
      {
        "x": "subway",
        "y": 89
      },
      {
        "x": "bus",
        "y": 260
      },
      {
        "x": "car",
        "y": 71
      },
      {
        "x": "moto",
        "y": 166
      },
      {
        "x": "bicycle",
        "y": 284
      },
      {
        "x": "horse",
        "y": 66
      },
      {
        "x": "skateboard",
        "y": 189
      },
      {
        "x": "others",
        "y": 103
      }
    ]
  }
]
  
const data = [
  {
    "country": "AD",
    "hot dog": 70,
    "hot dogColor": "hsl(255, 70%, 50%)",
    "burger": 76,
    "burgerColor": "hsl(190, 70%, 50%)",
    "sandwich": 179,
    "sandwichColor": "hsl(132, 70%, 50%)",
    "kebab": 200,
    "kebabColor": "hsl(306, 70%, 50%)",
    "fries": 193,
    "friesColor": "hsl(196, 70%, 50%)",
    "donut": 94,
    "donutColor": "hsl(354, 70%, 50%)"
  },
  {
    "country": "AE",
    "hot dog": 161,
    "hot dogColor": "hsl(301, 70%, 50%)",
    "burger": 78,
    "burgerColor": "hsl(266, 70%, 50%)",
    "sandwich": 173,
    "sandwichColor": "hsl(171, 70%, 50%)",
    "kebab": 11,
    "kebabColor": "hsl(300, 70%, 50%)",
    "fries": 128,
    "friesColor": "hsl(6, 70%, 50%)",
    "donut": 135,
    "donutColor": "hsl(34, 70%, 50%)"
  },
  {
    "country": "AF",
    "hot dog": 89,
    "hot dogColor": "hsl(141, 70%, 50%)",
    "burger": 10,
    "burgerColor": "hsl(230, 70%, 50%)",
    "sandwich": 171,
    "sandwichColor": "hsl(137, 70%, 50%)",
    "kebab": 161,
    "kebabColor": "hsl(132, 70%, 50%)",
    "fries": 103,
    "friesColor": "hsl(291, 70%, 50%)",
    "donut": 29,
    "donutColor": "hsl(229, 70%, 50%)"
  },
  {
    "country": "AG",
    "hot dog": 21,
    "hot dogColor": "hsl(101, 70%, 50%)",
    "burger": 94,
    "burgerColor": "hsl(355, 70%, 50%)",
    "sandwich": 54,
    "sandwichColor": "hsl(227, 70%, 50%)",
    "kebab": 47,
    "kebabColor": "hsl(217, 70%, 50%)",
    "fries": 133,
    "friesColor": "hsl(36, 70%, 50%)",
    "donut": 144,
    "donutColor": "hsl(251, 70%, 50%)"
  },
  {
    "country": "AI",
    "hot dog": 191,
    "hot dogColor": "hsl(124, 70%, 50%)",
    "burger": 109,
    "burgerColor": "hsl(25, 70%, 50%)",
    "sandwich": 11,
    "sandwichColor": "hsl(266, 70%, 50%)",
    "kebab": 51,
    "kebabColor": "hsl(265, 70%, 50%)",
    "fries": 3,
    "friesColor": "hsl(287, 70%, 50%)",
    "donut": 52,
    "donutColor": "hsl(309, 70%, 50%)"
  },
  {
    "country": "AL",
    "hot dog": 191,
    "hot dogColor": "hsl(94, 70%, 50%)",
    "burger": 187,
    "burgerColor": "hsl(273, 70%, 50%)",
    "sandwich": 141,
    "sandwichColor": "hsl(158, 70%, 50%)",
    "kebab": 100,
    "kebabColor": "hsl(302, 70%, 50%)",
    "fries": 64,
    "friesColor": "hsl(78, 70%, 50%)",
    "donut": 72,
    "donutColor": "hsl(204, 70%, 50%)"
  },
  {
    "country": "AM",
    "hot dog": 44,
    "hot dogColor": "hsl(269, 70%, 50%)",
    "burger": 126,
    "burgerColor": "hsl(338, 70%, 50%)",
    "sandwich": 112,
    "sandwichColor": "hsl(148, 70%, 50%)",
    "kebab": 31,
    "kebabColor": "hsl(37, 70%, 50%)",
    "fries": 191,
    "friesColor": "hsl(120, 70%, 50%)",
    "donut": 142,
    "donutColor": "hsl(356, 70%, 50%)"
  }    
]
  return {
    lineData,
    data,
    list
  }
}