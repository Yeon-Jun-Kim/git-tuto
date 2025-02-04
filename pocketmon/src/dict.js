let dict = [
    {
       "id":1,
       "num":"001",
       "name":"이상해씨",
       "img":"http://www.serebii.net/pokemongo/pokemon/001.png",
       "type":"풀 / 독",
       "height":"0.71 m",
       "weight":"6.9 kg",
       "candy":"25 이상해씨 캔디",
       "egg":"2 km",
       "multipliers":1.58,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"002",
             "name":"이상해풀"
          },
          {
             "num":"003",
             "name":"이상해꽃"
          }
       ]
    },
    {
       "id":2,
       "num":"002",
       "name":"이상해풀",
       "img":"http://www.serebii.net/pokemongo/pokemon/002.png",
       "type":"풀 / 독",
       "height":"0.99 m",
       "weight":"13.0 kg",
       "candy":"100 이상해씨 캔디",
       "egg":null,
       "multipliers":[
          1.2,
          1.6
       ],
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"001",
             "name":"이상해씨"
          }
       ],
       "next_evolution":[
          {
             "num":"003",
             "name":"이상해꽃"
          }
       ]
    },
    {
       "id":3,
       "num":"003",
       "name":"이상해꽃",
       "img":"http://www.serebii.net/pokemongo/pokemon/003.png",
       "type":"풀 / 독",
       "height":"2.01 m",
       "weight":"100.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"001",
             "name":"이상해씨"
          },
          {
             "num":"002",
             "name":"이상해풀"
          }
       ]
    },
    {
       "id":4,
       "num":"004",
       "name":"파이리",
       "img":"http://www.serebii.net/pokemongo/pokemon/004.png",
       "type":"불꽃",
       "height":"0.61 m",
       "weight":"8.5 kg",
       "candy":"25 파이리 캔디",
       "egg":"2 km",
       "multipliers":1.65,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"005",
             "name":"리자드"
          },
          {
             "num":"006",
             "name":"리자몽"
          }
       ]
    },
    {
       "id":5,
       "num":"005",
       "name":"리자드",
       "img":"http://www.serebii.net/pokemongo/pokemon/005.png",
       "type":"불꽃",
       "height":"1.09 m",
       "weight":"19.0 kg",
       "candy":"100 파이리 캔디",
       "egg":null,
       "multipliers":1.79,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"004",
             "name":"파이리"
          }
       ],
       "next_evolution":[
          {
             "num":"006",
             "name":"리자몽"
          }
       ]
    },
    {
       "id":6,
       "num":"006",
       "name":"리자몽",
       "img":"http://www.serebii.net/pokemongo/pokemon/006.png",
       "type":"불꽃 / 비행",
       "height":"1.70 m",
       "weight":"90.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"004",
             "name":"파이리"
          },
          {
             "num":"005",
             "name":"리자드"
          }
       ]
    },
    {
       "id":7,
       "num":"007",
       "name":"꼬부기",
       "img":"http://www.serebii.net/pokemongo/pokemon/007.png",
       "type":"물",
       "height":"0.51 m",
       "weight":"9.0 kg",
       "candy":"25 꼬부기 캔디",
       "egg":"2 km",
       "multipliers":2.1,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"008",
             "name":"어니부기"
          },
          {
             "num":"009",
             "name":"거북왕"
          }
       ]
    },
    {
       "id":8,
       "num":"008",
       "name":"어니부기",
       "img":"http://www.serebii.net/pokemongo/pokemon/008.png",
       "type":"물",
       "height":"0.99 m",
       "weight":"22.5 kg",
       "candy":"100 꼬부기 캔디",
       "egg":null,
       "multipliers":1.4,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"007",
             "name":"꼬부기"
          }
       ],
       "next_evolution":[
          {
             "num":"009",
             "name":"거북왕"
          }
       ]
    },
    {
       "id":9,
       "num":"009",
       "name":"거북왕",
       "img":"http://www.serebii.net/pokemongo/pokemon/009.png",
       "type":"물",
       "height":"1.60 m",
       "weight":"85.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"007",
             "name":"꼬부기"
          },
          {
             "num":"008",
             "name":"어니부기"
          }
       ]
    },
    {
       "id":10,
       "num":"010",
       "name":"캐터피",
       "img":"http://www.serebii.net/pokemongo/pokemon/010.png",
       "type":"벌레",
       "height":"0.30 m",
       "weight":"2.9 kg",
       "candy":"12 캐터피 캔디",
       "egg":"2 km",
       "multipliers":1.05,
       "weaknesses":[
          "불꽃",
          "비행",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"011",
             "name":"단데기"
          },
          {
             "num":"012",
             "name":"버터플"
          }
       ]
    },
    {
       "id":11,
       "num":"011",
       "name":"단데기",
       "img":"http://www.serebii.net/pokemongo/pokemon/011.png",
       "type":"벌레",
       "height":"0.71 m",
       "weight":"9.9 kg",
       "candy":"50 캐터피 캔디",
       "egg":null,
       "multipliers":[
          3.55,
          3.79
       ],
       "weaknesses":[
          "불꽃",
          "비행",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"010",
             "name":"캐터피"
          }
       ],
       "next_evolution":[
          {
             "num":"012",
             "name":"버터플"
          }
       ]
    },
    {
       "id":12,
       "num":"012",
       "name":"버터플",
       "img":"http://www.serebii.net/pokemongo/pokemon/012.png",
       "type":"벌레 / 비행",
       "height":"1.09 m",
       "weight":"32.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "전기",
          "얼음",
          "비행",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"010",
             "name":"캐터피"
          },
          {
             "num":"011",
             "name":"단데기"
          }
       ]
    },
    {
       "id":13,
       "num":"013",
       "name":"뿔충이",
       "img":"http://www.serebii.net/pokemongo/pokemon/013.png",
       "type":"벌레 / 독",
       "height":"0.30 m",
       "weight":"3.2 kg",
       "candy":"12 뿔충이 캔디",
       "egg":"2 km",
       "multipliers":[
          1.01,
          1.09
       ],
       "weaknesses":[
          "불꽃",
          "비행",
          "에스퍼",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"014",
             "name":"딱충이"
          },
          {
             "num":"015",
             "name":"독침붕"
          }
       ]
    },
    {
       "id":14,
       "num":"014",
       "name":"딱충이",
       "img":"http://www.serebii.net/pokemongo/pokemon/014.png",
       "type":"벌레 / 독",
       "height":"0.61 m",
       "weight":"10.0 kg",
       "candy":"50 뿔충이 캔디",
       "egg":null,
       "multipliers":[
          3.01,
          3.41
       ],
       "weaknesses":[
          "불꽃",
          "비행",
          "에스퍼",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"013",
             "name":"뿔충이"
          }
       ],
       "next_evolution":[
          {
             "num":"015",
             "name":"독침붕"
          }
       ]
    },
    {
       "id":15,
       "num":"015",
       "name":"독침붕",
       "img":"http://www.serebii.net/pokemongo/pokemon/015.png",
       "type":"벌레 / 독",
       "height":"0.99 m",
       "weight":"29.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "비행",
          "에스퍼",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"013",
             "name":"뿔충이"
          },
          {
             "num":"014",
             "name":"딱충이"
          }
       ]
    },
    {
       "id":16,
       "num":"016",
       "name":"구구",
       "img":"http://www.serebii.net/pokemongo/pokemon/016.png",
       "type":"노말 / 비행",
       "height":"0.30 m",
       "weight":"1.8 kg",
       "candy":"12 구구 캔디",
       "egg":"2 km",
       "multipliers":[
          1.71,
          1.92
       ],
       "weaknesses":[
          "전기",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"017",
             "name":"피죤"
          },
          {
             "num":"018",
             "name":"피죤투"
          }
       ]
    },
    {
       "id":17,
       "num":"017",
       "name":"피죤",
       "img":"http://www.serebii.net/pokemongo/pokemon/017.png",
       "type":"노말 / 비행",
       "height":"1.09 m",
       "weight":"30.0 kg",
       "candy":"50 구구 캔디",
       "egg":null,
       "multipliers":1.79,
       "weaknesses":[
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"016",
             "name":"구구"
          }
       ],
       "next_evolution":[
          {
             "num":"018",
             "name":"피죤투"
          }
       ]
    },
    {
       "id":18,
       "num":"018",
       "name":"피죤투",
       "img":"http://www.serebii.net/pokemongo/pokemon/018.png",
       "type":"노말 / 비행",
       "height":"1.50 m",
       "weight":"39.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"016",
             "name":"구구"
          },
          {
             "num":"017",
             "name":"피죤"
          }
       ]
    },
    {
       "id":19,
       "num":"019",
       "name":"꼬렛",
       "img":"http://www.serebii.net/pokemongo/pokemon/019.png",
       "type":"노말",
       "height":"0.30 m",
       "weight":"3.5 kg",
       "candy":"25 꼬렛 캔디",
       "egg":"2 km",
       "multipliers":[
          2.55,
          2.73
       ],
       "weaknesses":[
          "격투"
       ],
       "next_evolution":[
          {
             "num":"020",
             "name":"레트라"
          }
       ]
    },
    {
       "id":20,
       "num":"020",
       "name":"레트라",
       "img":"http://www.serebii.net/pokemongo/pokemon/020.png",
       "type":"노말",
       "height":"0.71 m",
       "weight":"18.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "격투"
       ],
       "prev_evolution":[
          {
             "num":"019",
             "name":"꼬렛"
          }
       ]
    },
    {
       "id":21,
       "num":"021",
       "name":"깨비참",
       "img":"http://www.serebii.net/pokemongo/pokemon/021.png",
       "type":"노말 / 비행",
       "height":"0.30 m",
       "weight":"2.0 kg",
       "candy":"50 깨비참 캔디",
       "egg":"2 km",
       "multipliers":[
          2.66,
          2.68
       ],
       "weaknesses":[
          "전기",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"022",
             "name":"깨비드릴조"
          }
       ]
    },
    {
       "id":22,
       "num":"022",
       "name":"깨비드릴조",
       "img":"http://www.serebii.net/pokemongo/pokemon/022.png",
       "type":"노말 / 비행",
       "height":"1.19 m",
       "weight":"38.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"021",
             "name":"깨비참"
          }
       ]
    },
    {
       "id":23,
       "num":"023",
       "name":"아보",
       "img":"http://www.serebii.net/pokemongo/pokemon/023.png",
       "type":"독",
       "height":"2.01 m",
       "weight":"6.9 kg",
       "candy":"50 아보 캔디",
       "egg":"5 km",
       "multipliers":[
          2.21,
          2.27
       ],
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"024",
             "name":"아보크"
          }
       ]
    },
    {
       "id":24,
       "num":"024",
       "name":"아보크",
       "img":"http://www.serebii.net/pokemongo/pokemon/024.png",
       "type":"독",
       "height":"3.51 m",
       "weight":"65.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"023",
             "name":"아보"
          }
       ]
    },
    {
       "id":25,
       "num":"025",
       "name":"피카츄",
       "img":"http://www.serebii.net/pokemongo/pokemon/025.png",
       "type":"전기",
       "height":"0.41 m",
       "weight":"6.0 kg",
       "candy":"50 피카츄 캔디",
       "egg":"2 km",
       "multipliers":2.34,
       "weaknesses":[
          "땅"
       ],
       "next_evolution":[
          {
             "num":"026",
             "name":"라이츄"
          }
       ]
    },
    {
       "id":26,
       "num":"026",
       "name":"라이츄",
       "img":"http://www.serebii.net/pokemongo/pokemon/026.png",
       "type":"전기",
       "height":"0.79 m",
       "weight":"30.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"025",
             "name":"피카츄"
          }
       ]
    },
    {
       "id":27,
       "num":"027",
       "name":"모래두지",
       "img":"http://www.serebii.net/pokemongo/pokemon/027.png",
       "type":"땅",
       "height":"0.61 m",
       "weight":"12.0 kg",
       "candy":"50 모래두지 캔디",
       "egg":"5 km",
       "multipliers":2.45,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "next_evolution":[
          {
             "num":"028",
             "name":"고지"
          }
       ]
    },
    {
       "id":28,
       "num":"028",
       "name":"고지",
       "img":"http://www.serebii.net/pokemongo/pokemon/028.png",
       "type":"땅",
       "height":"0.99 m",
       "weight":"29.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "prev_evolution":[
          {
             "num":"027",
             "name":"모래두지"
          }
       ]
    },
    {
       "id":29,
       "num":"029",
       "name":"니드런♀",
       "img":"http://www.serebii.net/pokemongo/pokemon/029.png",
       "type":"독",
       "height":"0.41 m",
       "weight":"7.0 kg",
       "candy":"25 니드런♀ 캔디",
       "egg":"5 km",
       "multipliers":[
          1.63,
          2.48
       ],
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"030",
             "name":"니드리나"
          },
          {
             "num":"031",
             "name":"니드퀸"
          }
       ]
    },
    {
       "id":30,
       "num":"030",
       "name":"니드리나",
       "img":"http://www.serebii.net/pokemongo/pokemon/030.png",
       "type":"독",
       "height":"0.79 m",
       "weight":"20.0 kg",
       "candy":"100 Nidoran ♀ 캔디",
       "egg":null,
       "multipliers":[
          1.83,
          2.48
       ],
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"029",
             "name":"니드런♀"
          }
       ],
       "next_evolution":[
          {
             "num":"031",
             "name":"니드퀸"
          }
       ]
    },
    {
       "id":31,
       "num":"031",
       "name":"니드퀸",
       "img":"http://www.serebii.net/pokemongo/pokemon/031.png",
       "type":"독 / 땅",
       "height":"1.30 m",
       "weight":"60.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "얼음",
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"029",
             "name":"니드런♀"
          },
          {
             "num":"030",
             "name":"니드리나"
          }
       ]
    },
    {
       "id":32,
       "num":"032",
       "name":"니드런♂",
       "img":"http://www.serebii.net/pokemongo/pokemon/032.png",
       "type":"독",
       "height":"0.51 m",
       "weight":"9.0 kg",
       "candy":"25 니드런♂ 캔디",
       "egg":"5 km",
       "multipliers":[
          1.64,
          1.7
       ],
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"033",
             "name":"니드리노"
          },
          {
             "num":"034",
             "name":"니드킹"
          }
       ]
    },
    {
       "id":33,
       "num":"033",
       "name":"니드리노",
       "img":"http://www.serebii.net/pokemongo/pokemon/033.png",
       "type":"독",
       "height":"0.89 m",
       "weight":"19.5 kg",
       "candy":"100 Nidoran ♂ 캔디",
       "egg":null,
       "multipliers":1.83,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"032",
             "name":"니드런♂"
          }
       ],
       "next_evolution":[
          {
             "num":"034",
             "name":"니드킹"
          }
       ]
    },
    {
       "id":34,
       "num":"034",
       "name":"니드킹",
       "img":"http://www.serebii.net/pokemongo/pokemon/034.png",
       "type":"독 / 땅",
       "height":"1.40 m",
       "weight":"62.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "얼음",
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"032",
             "name":"니드런♂"
          },
          {
             "num":"033",
             "name":"니드리노"
          }
       ]
    },
    {
       "id":35,
       "num":"035",
       "name":"삐삐",
       "img":"http://www.serebii.net/pokemongo/pokemon/035.png",
       "type":"노말",
       "height":"0.61 m",
       "weight":"7.5 kg",
       "candy":"50 삐삐 캔디",
       "egg":"2 km",
       "multipliers":[
          2.03,
          2.14
       ],
       "weaknesses":[
          "격투"
       ],
       "next_evolution":[
          {
             "num":"036",
             "name":"픽시"
          }
       ]
    },
    {
       "id":36,
       "num":"036",
       "name":"픽시",
       "img":"http://www.serebii.net/pokemongo/pokemon/036.png",
       "type":"노말",
       "height":"1.30 m",
       "weight":"40.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "격투"
       ],
       "prev_evolution":[
          {
             "num":"035",
             "name":"삐삐"
          }
       ]
    },
    {
       "id":37,
       "num":"037",
       "name":"식스테일",
       "img":"http://www.serebii.net/pokemongo/pokemon/037.png",
       "type":"불꽃",
       "height":"0.61 m",
       "weight":"9.9 kg",
       "candy":"50 식스테일 캔디",
       "egg":"5 km",
       "multipliers":[
          2.74,
          2.81
       ],
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"038",
             "name":"나인테일"
          }
       ]
    },
    {
       "id":38,
       "num":"038",
       "name":"나인테일",
       "img":"http://www.serebii.net/pokemongo/pokemon/038.png",
       "type":"불꽃",
       "height":"1.09 m",
       "weight":"19.9 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"037",
             "name":"식스테일"
          }
       ]
    },
    {
       "id":39,
       "num":"039",
       "name":"푸린",
       "img":"http://www.serebii.net/pokemongo/pokemon/039.png",
       "type":"노말",
       "height":"0.51 m",
       "weight":"5.5 kg",
       "candy":"50 푸린 캔디",
       "egg":"2 km",
       "multipliers":1.85,
       "weaknesses":[
          "격투"
       ],
       "next_evolution":[
          {
             "num":"040",
             "name":"푸크린"
          }
       ]
    },
    {
       "id":40,
       "num":"040",
       "name":"푸크린",
       "img":"http://www.serebii.net/pokemongo/pokemon/040.png",
       "type":"노말",
       "height":"0.99 m",
       "weight":"12.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "격투"
       ],
       "prev_evolution":[
          {
             "num":"039",
             "name":"푸린"
          }
       ]
    },
    {
       "id":41,
       "num":"041",
       "name":"주뱃",
       "img":"http://www.serebii.net/pokemongo/pokemon/041.png",
       "type":"독 / 비행",
       "height":"0.79 m",
       "weight":"7.5 kg",
       "candy":"50 주뱃 캔디",
       "egg":"2 km",
       "multipliers":[
          2.6,
          3.67
       ],
       "weaknesses":[
          "전기",
          "얼음",
          "에스퍼",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"042",
             "name":"골뱃"
          }
       ]
    },
    {
       "id":42,
       "num":"042",
       "name":"골뱃",
       "img":"http://www.serebii.net/pokemongo/pokemon/042.png",
       "type":"독 / 비행",
       "height":"1.60 m",
       "weight":"55.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "얼음",
          "에스퍼",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"041",
             "name":"주뱃"
          }
       ]
    },
    {
       "id":43,
       "num":"043",
       "name":"뚜벅쵸",
       "img":"http://www.serebii.net/pokemongo/pokemon/043.png",
       "type":"풀 / 독",
       "height":"0.51 m",
       "weight":"5.4 kg",
       "candy":"25 뚜벅쵸 캔디",
       "egg":"5 km",
       "multipliers":1.5,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"044",
             "name":"냄새꼬"
          },
          {
             "num":"045",
             "name":"라플레시아"
          }
       ]
    },
    {
       "id":44,
       "num":"044",
       "name":"냄새꼬",
       "img":"http://www.serebii.net/pokemongo/pokemon/044.png",
       "type":"풀 / 독",
       "height":"0.79 m",
       "weight":"8.6 kg",
       "candy":"100 뚜벅쵸 캔디",
       "egg":null,
       "multipliers":1.49,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"043",
             "name":"뚜벅쵸"
          }
       ],
       "next_evolution":[
          {
             "num":"045",
             "name":"라플레시아"
          }
       ]
    },
    {
       "id":45,
       "num":"045",
       "name":"라플레시아",
       "img":"http://www.serebii.net/pokemongo/pokemon/045.png",
       "type":"풀 / 독",
       "height":"1.19 m",
       "weight":"18.6 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"043",
             "name":"뚜벅쵸"
          },
          {
             "num":"044",
             "name":"냄새꼬"
          }
       ]
    },
    {
       "id":46,
       "num":"046",
       "name":"파라스",
       "img":"http://www.serebii.net/pokemongo/pokemon/046.png",
       "type":"벌레 / 풀",
       "height":"0.30 m",
       "weight":"5.4 kg",
       "candy":"50 파라스 캔디",
       "egg":"5 km",
       "multipliers":2.02,
       "weaknesses":[
          "불꽃",
          "얼음",
          "독",
          "비행",
          "벌레",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"047",
             "name":"파라섹트"
          }
       ]
    },
    {
       "id":47,
       "num":"047",
       "name":"파라섹트",
       "img":"http://www.serebii.net/pokemongo/pokemon/047.png",
       "type":"벌레 / 풀",
       "height":"0.99 m",
       "weight":"29.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "독",
          "비행",
          "벌레",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"046",
             "name":"파라스"
          }
       ]
    },
    {
       "id":48,
       "num":"048",
       "name":"콘팡",
       "img":"http://www.serebii.net/pokemongo/pokemon/048.png",
       "type":"벌레 / 독",
       "height":"0.99 m",
       "weight":"30.0 kg",
       "candy":"50 콘팡 캔디",
       "egg":"5 km",
       "multipliers":[
          1.86,
          1.9
       ],
       "weaknesses":[
          "불꽃",
          "비행",
          "에스퍼",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"049",
             "name":"도나리"
          }
       ]
    },
    {
       "id":49,
       "num":"049",
       "name":"도나리",
       "img":"http://www.serebii.net/pokemongo/pokemon/049.png",
       "type":"벌레 / 독",
       "height":"1.50 m",
       "weight":"12.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "비행",
          "에스퍼",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"048",
             "name":"콘팡"
          }
       ]
    },
    {
       "id":50,
       "num":"050",
       "name":"디그다",
       "img":"http://www.serebii.net/pokemongo/pokemon/050.png",
       "type":"땅",
       "height":"0.20 m",
       "weight":"0.8 kg",
       "candy":"50 디그다 캔디",
       "egg":"5 km",
       "multipliers":2.69,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "next_evolution":[
          {
             "num":"051",
             "name":"닥트리오"
          }
       ]
    },
    {
       "id":51,
       "num":"051",
       "name":"닥트리오",
       "img":"http://www.serebii.net/pokemongo/pokemon/051.png",
       "type":"땅",
       "height":"0.71 m",
       "weight":"33.3 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "prev_evolution":[
          {
             "num":"050",
             "name":"디그다"
          }
       ]
    },
    {
       "id":52,
       "num":"052",
       "name":"나옹",
       "img":"http://www.serebii.net/pokemongo/pokemon/052.png",
       "type":"노말",
       "height":"0.41 m",
       "weight":"4.2 kg",
       "candy":"50 나옹 캔디",
       "egg":"5 km",
       "multipliers":1.98,
       "weaknesses":[
          "격투"
       ],
       "next_evolution":[
          {
             "num":"053",
             "name":"페르시온"
          }
       ]
    },
    {
       "id":53,
       "num":"053",
       "name":"페르시온",
       "img":"http://www.serebii.net/pokemongo/pokemon/053.png",
       "type":"노말",
       "height":"0.99 m",
       "weight":"32.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "격투"
       ],
       "prev_evolution":[
          {
             "num":"052",
             "name":"나옹"
          }
       ]
    },
    {
       "id":54,
       "num":"054",
       "name":"고라파덕",
       "img":"http://www.serebii.net/pokemongo/pokemon/054.png",
       "type":"물",
       "height":"0.79 m",
       "weight":"19.6 kg",
       "candy":"50 고라파덕 캔디",
       "egg":"5 km",
       "multipliers":2.27,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"055",
             "name":"골덕"
          }
       ]
    },
    {
       "id":55,
       "num":"055",
       "name":"골덕",
       "img":"http://www.serebii.net/pokemongo/pokemon/055.png",
       "type":"물",
       "height":"1.70 m",
       "weight":"76.6 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"054",
             "name":"고라파덕"
          }
       ]
    },
    {
       "id":56,
       "num":"056",
       "name":"망키",
       "img":"http://www.serebii.net/pokemongo/pokemon/056.png",
       "type":"격투",
       "height":"0.51 m",
       "weight":"28.0 kg",
       "candy":"50 망키 캔디",
       "egg":"5 km",
       "multipliers":[
          2.17,
          2.28
       ],
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ],
       "next_evolution":[
          {
             "num":"057",
             "name":"성원숭"
          }
       ]
    },
    {
       "id":57,
       "num":"057",
       "name":"성원숭",
       "img":"http://www.serebii.net/pokemongo/pokemon/057.png",
       "type":"격투",
       "height":"0.99 m",
       "weight":"32.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ],
       "prev_evolution":[
          {
             "num":"056",
             "name":"망키"
          }
       ]
    },
    {
       "id":58,
       "num":"058",
       "name":"가디",
       "img":"http://www.serebii.net/pokemongo/pokemon/058.png",
       "type":"불꽃",
       "height":"0.71 m",
       "weight":"19.0 kg",
       "candy":"50 가디 캔디",
       "egg":"5 km",
       "multipliers":[
          2.31,
          2.36
       ],
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"059",
             "name":"윈디"
          }
       ]
    },
    {
       "id":59,
       "num":"059",
       "name":"윈디",
       "img":"http://www.serebii.net/pokemongo/pokemon/059.png",
       "type":"불꽃",
       "height":"1.91 m",
       "weight":"155.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"058",
             "name":"가디"
          }
       ]
    },
    {
       "id":60,
       "num":"060",
       "name":"발챙이",
       "img":"http://www.serebii.net/pokemongo/pokemon/060.png",
       "type":"물",
       "height":"0.61 m",
       "weight":"12.4 kg",
       "candy":"25 발챙이 캔디",
       "egg":"5 km",
       "multipliers":[
          1.72,
          1.73
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"061",
             "name":"슈륙챙이"
          },
          {
             "num":"062",
             "name":"강챙이"
          }
       ]
    },
    {
       "id":61,
       "num":"061",
       "name":"슈륙챙이",
       "img":"http://www.serebii.net/pokemongo/pokemon/061.png",
       "type":"물",
       "height":"0.99 m",
       "weight":"20.0 kg",
       "candy":"100 발챙이 캔디",
       "egg":null,
       "multipliers":1.95,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"060",
             "name":"발챙이"
          }
       ],
       "next_evolution":[
          {
             "num":"062",
             "name":"강챙이"
          }
       ]
    },
    {
       "id":62,
       "num":"062",
       "name":"강챙이",
       "img":"http://www.serebii.net/pokemongo/pokemon/062.png",
       "type":"물 / 격투",
       "height":"1.30 m",
       "weight":"54.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "비행",
          "에스퍼",
          "페어리"
       ],
       "prev_evolution":[
          {
             "num":"060",
             "name":"발챙이"
          },
          {
             "num":"061",
             "name":"슈륙챙이"
          }
       ]
    },
    {
       "id":63,
       "num":"063",
       "name":"캐이시",
       "img":"http://www.serebii.net/pokemongo/pokemon/063.png",
       "type":"에스퍼",
       "height":"0.89 m",
       "weight":"19.5 kg",
       "candy":"25 캐이시 캔디",
       "egg":"5 km",
       "multipliers":[
          1.36,
          1.95
       ],
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ],
       "next_evolution":[
          {
             "num":"064",
             "name":"윤겔라"
          },
          {
             "num":"065",
             "name":"후딘"
          }
       ]
    },
    {
       "id":64,
       "num":"064",
       "name":"윤겔라",
       "img":"http://www.serebii.net/pokemongo/pokemon/064.png",
       "type":"에스퍼",
       "height":"1.30 m",
       "weight":"56.5 kg",
       "candy":"100 캐이시 캔디",
       "egg":null,
       "multipliers":1.4,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"063",
             "name":"캐이시"
          }
       ],
       "next_evolution":[
          {
             "num":"065",
             "name":"후딘"
          }
       ]
    },
    {
       "id":65,
       "num":"065",
       "name":"후딘",
       "img":"http://www.serebii.net/pokemongo/pokemon/065.png",
       "type":"에스퍼",
       "height":"1.50 m",
       "weight":"48.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"063",
             "name":"캐이시"
          },
          {
             "num":"064",
             "name":"윤겔라"
          }
       ]
    },
    {
       "id":66,
       "num":"066",
       "name":"알통몬",
       "img":"http://www.serebii.net/pokemongo/pokemon/066.png",
       "type":"격투",
       "height":"0.79 m",
       "weight":"19.5 kg",
       "candy":"25 알통몬 캔디",
       "egg":"5 km",
       "multipliers":[
          1.64,
          1.65
       ],
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ],
       "next_evolution":[
          {
             "num":"067",
             "name":"근육몬"
          },
          {
             "num":"068",
             "name":"괴력몬"
          }
       ]
    },
    {
       "id":67,
       "num":"067",
       "name":"근육몬",
       "img":"http://www.serebii.net/pokemongo/pokemon/067.png",
       "type":"격투",
       "height":"1.50 m",
       "weight":"70.5 kg",
       "candy":"100 알통몬 캔디",
       "egg":null,
       "multipliers":1.7,
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ],
       "prev_evolution":[
          {
             "num":"066",
             "name":"알통몬"
          }
       ],
       "next_evolution":[
          {
             "num":"068",
             "name":"괴력몬"
          }
       ]
    },
    {
       "id":68,
       "num":"068",
       "name":"괴력몬",
       "img":"http://www.serebii.net/pokemongo/pokemon/068.png",
       "type":"격투",
       "height":"1.60 m",
       "weight":"130.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ],
       "prev_evolution":[
          {
             "num":"066",
             "name":"알통몬"
          },
          {
             "num":"067",
             "name":"근육몬"
          }
       ]
    },
    {
       "id":69,
       "num":"069",
       "name":"모다피",
       "img":"http://www.serebii.net/pokemongo/pokemon/069.png",
       "type":"풀 / 독",
       "height":"0.71 m",
       "weight":"4.0 kg",
       "candy":"25 모다피 캔디",
       "egg":"5 km",
       "multipliers":1.57,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"070",
             "name":"우츠동"
          },
          {
             "num":"071",
             "name":"우츠보트"
          }
       ]
    },
    {
       "id":70,
       "num":"070",
       "name":"우츠동",
       "img":"http://www.serebii.net/pokemongo/pokemon/070.png",
       "type":"풀 / 독",
       "height":"0.99 m",
       "weight":"6.4 kg",
       "candy":"100 모다피 캔디",
       "egg":null,
       "multipliers":1.59,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"069",
             "name":"모다피"
          }
       ],
       "next_evolution":[
          {
             "num":"071",
             "name":"우츠보트"
          }
       ]
    },
    {
       "id":71,
       "num":"071",
       "name":"우츠보트",
       "img":"http://www.serebii.net/pokemongo/pokemon/071.png",
       "type":"풀 / 독",
       "height":"1.70 m",
       "weight":"15.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "비행",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"069",
             "name":"모다피"
          },
          {
             "num":"070",
             "name":"우츠동"
          }
       ]
    },
    {
       "id":72,
       "num":"072",
       "name":"왕눈해",
       "img":"http://www.serebii.net/pokemongo/pokemon/072.png",
       "type":"물 / 독",
       "height":"0.89 m",
       "weight":"45.5 kg",
       "candy":"50 왕눈해 캔디",
       "egg":"5 km",
       "multipliers":2.52,
       "weaknesses":[
          "전기",
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"073",
             "name":"독파리"
          }
       ]
    },
    {
       "id":73,
       "num":"073",
       "name":"독파리",
       "img":"http://www.serebii.net/pokemongo/pokemon/073.png",
       "type":"물 / 독",
       "height":"1.60 m",
       "weight":"55.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"072",
             "name":"왕눈해"
          }
       ]
    },
    {
       "id":74,
       "num":"074",
       "name":"꼬마돌",
       "img":"http://www.serebii.net/pokemongo/pokemon/074.png",
       "type":"바위 / 땅",
       "height":"0.41 m",
       "weight":"20.0 kg",
       "candy":"25 꼬마돌 캔디",
       "egg":"2 km",
       "multipliers":[
          1.75,
          1.76
       ],
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ],
       "next_evolution":[
          {
             "num":"075",
             "name":"데구리"
          },
          {
             "num":"076",
             "name":"딱구리"
          }
       ]
    },
    {
       "id":75,
       "num":"075",
       "name":"데구리",
       "img":"http://www.serebii.net/pokemongo/pokemon/075.png",
       "type":"바위 / 땅",
       "height":"0.99 m",
       "weight":"105.0 kg",
       "candy":"100 꼬마돌 캔디",
       "egg":null,
       "multipliers":[
          1.64,
          1.72
       ],
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ],
       "prev_evolution":[
          {
             "num":"074",
             "name":"꼬마돌"
          }
       ],
       "next_evolution":[
          {
             "num":"076",
             "name":"딱구리"
          }
       ]
    },
    {
       "id":76,
       "num":"076",
       "name":"딱구리",
       "img":"http://www.serebii.net/pokemongo/pokemon/076.png",
       "type":"바위 / 땅",
       "height":"1.40 m",
       "weight":"300.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ],
       "prev_evolution":[
          {
             "num":"074",
             "name":"꼬마돌"
          },
          {
             "num":"075",
             "name":"데구리"
          }
       ]
    },
    {
       "id":77,
       "num":"077",
       "name":"포니타",
       "img":"http://www.serebii.net/pokemongo/pokemon/077.png",
       "type":"불꽃",
       "height":"0.99 m",
       "weight":"30.0 kg",
       "candy":"50 포니타 캔디",
       "egg":"5 km",
       "multipliers":[
          1.48,
          1.5
       ],
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"078",
             "name":"날쌩마"
          }
       ]
    },
    {
       "id":78,
       "num":"078",
       "name":"날쌩마",
       "img":"http://www.serebii.net/pokemongo/pokemon/078.png",
       "type":"불꽃",
       "height":"1.70 m",
       "weight":"95.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"077",
             "name":"포니타"
          }
       ]
    },
    {
       "id":79,
       "num":"079",
       "name":"야돈",
       "img":"http://www.serebii.net/pokemongo/pokemon/079.png",
       "type":"물 / 에스퍼",
       "height":"1.19 m",
       "weight":"36.0 kg",
       "candy":"50 야돈 캔디",
       "egg":"5 km",
       "multipliers":2.21,
       "weaknesses":[
          "전기",
          "풀",
          "벌레",
          "고스트",
          "악"
       ],
       "next_evolution":[
          {
             "num":"080",
             "name":"야도란"
          }
       ]
    },
    {
       "id":80,
       "num":"080",
       "name":"야도란",
       "img":"http://www.serebii.net/pokemongo/pokemon/080.png",
       "type":"물 / 에스퍼",
       "height":"1.60 m",
       "weight":"78.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"079",
             "name":"야돈"
          }
       ]
    },
    {
       "id":81,
       "num":"081",
       "name":"코일",
       "img":"http://www.serebii.net/pokemongo/pokemon/081.png",
       "type":"전기",
       "height":"0.30 m",
       "weight":"6.0 kg",
       "candy":"50 코일 캔디",
       "egg":"5 km",
       "multipliers":[
          2.16,
          2.17
       ],
       "weaknesses":[
          "불꽃",
          "물",
          "땅"
       ],
       "next_evolution":[
          {
             "num":"082",
             "name":"레어코일"
          }
       ]
    },
    {
       "id":82,
       "num":"082",
       "name":"레어코일",
       "img":"http://www.serebii.net/pokemongo/pokemon/082.png",
       "type":"전기",
       "height":"0.99 m",
       "weight":"60.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "물",
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"081",
             "name":"코일"
          }
       ]
    },
    {
       "id":83,
       "num":"083",
       "name":"파오리",
       "img":"http://www.serebii.net/pokemongo/pokemon/083.png",
       "type":"노말 / 비행",
       "height":"0.79 m",
       "weight":"15.0 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "전기",
          "바위"
       ]
    },
    {
       "id":84,
       "num":"084",
       "name":"두두",
       "img":"http://www.serebii.net/pokemongo/pokemon/084.png",
       "type":"노말 / 비행",
       "height":"1.40 m",
       "weight":"39.2 kg",
       "candy":"50 두두 캔디",
       "egg":"5 km",
       "multipliers":[
          2.19,
          2.24
       ],
       "weaknesses":[
          "전기",
          "바위"
       ],
       "next_evolution":[
          {
             "num":"085",
             "name":"두트리오"
          }
       ]
    },
    {
       "id":85,
       "num":"085",
       "name":"두트리오",
       "img":"http://www.serebii.net/pokemongo/pokemon/085.png",
       "type":"노말 / 비행",
       "height":"1.80 m",
       "weight":"85.2 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"084",
             "name":"두두"
          }
       ]
    },
    {
       "id":86,
       "num":"086",
       "name":"쥬쥬",
       "img":"http://www.serebii.net/pokemongo/pokemon/086.png",
       "type":"물",
       "height":"1.09 m",
       "weight":"90.0 kg",
       "candy":"50 쥬쥬 캔디",
       "egg":"5 km",
       "multipliers":[
          1.04,
          1.96
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"087",
             "name":"쥬레곤"
          }
       ]
    },
    {
       "id":87,
       "num":"087",
       "name":"쥬레곤",
       "img":"http://www.serebii.net/pokemongo/pokemon/087.png",
       "type":"물 / 얼음",
       "height":"1.70 m",
       "weight":"120.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"086",
             "name":"쥬쥬"
          }
       ]
    },
    {
       "id":88,
       "num":"088",
       "name":"질퍽이",
       "img":"http://www.serebii.net/pokemongo/pokemon/088.png",
       "type":"독",
       "height":"0.89 m",
       "weight":"30.0 kg",
       "candy":"50 질퍽이 캔디",
       "egg":"5 km",
       "multipliers":2.44,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"089",
             "name":"질뻐기"
          }
       ]
    },
    {
       "id":89,
       "num":"089",
       "name":"질뻐기",
       "img":"http://www.serebii.net/pokemongo/pokemon/089.png",
       "type":"독",
       "height":"1.19 m",
       "weight":"30.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"088",
             "name":"질퍽이"
          }
       ]
    },
    {
       "id":90,
       "num":"090",
       "name":"셀러",
       "img":"http://www.serebii.net/pokemongo/pokemon/090.png",
       "type":"물",
       "height":"0.30 m",
       "weight":"4.0 kg",
       "candy":"50 셀러 캔디",
       "egg":"5 km",
       "multipliers":2.65,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"091",
             "name":"파르셀"
          }
       ]
    },
    {
       "id":91,
       "num":"091",
       "name":"파르셀",
       "img":"http://www.serebii.net/pokemongo/pokemon/091.png",
       "type":"물 / 얼음",
       "height":"1.50 m",
       "weight":"132.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"090",
             "name":"셀러"
          }
       ]
    },
    {
       "id":92,
       "num":"092",
       "name":"고오스",
       "img":"http://www.serebii.net/pokemongo/pokemon/092.png",
       "type":"고스트 / 독",
       "height":"1.30 m",
       "weight":"0.1 kg",
       "candy":"25 고오스 캔디",
       "egg":"5 km",
       "multipliers":1.78,
       "weaknesses":[
          "땅",
          "에스퍼",
          "고스트",
          "악"
       ],
       "next_evolution":[
          {
             "num":"093",
             "name":"고우스트"
          },
          {
             "num":"094",
             "name":"팬텀"
          }
       ]
    },
    {
       "id":93,
       "num":"093",
       "name":"고우스트",
       "img":"http://www.serebii.net/pokemongo/pokemon/093.png",
       "type":"고스트 / 독",
       "height":"1.60 m",
       "weight":"0.1 kg",
       "candy":"100 고오스 캔디",
       "egg":null,
       "multipliers":[
          1.56,
          1.8
       ],
       "weaknesses":[
          "땅",
          "에스퍼",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"092",
             "name":"고오스"
          }
       ],
       "next_evolution":[
          {
             "num":"094",
             "name":"팬텀"
          }
       ]
    },
    {
       "id":94,
       "num":"094",
       "name":"팬텀",
       "img":"http://www.serebii.net/pokemongo/pokemon/094.png",
       "type":"고스트 / 독",
       "height":"1.50 m",
       "weight":"40.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅",
          "에스퍼",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"092",
             "name":"고오스"
          },
          {
             "num":"093",
             "name":"고우스트"
          }
       ]
    },
    {
       "id":95,
       "num":"095",
       "name":"롱스톤",
       "img":"http://www.serebii.net/pokemongo/pokemon/095.png",
       "type":"바위 / 땅",
       "height":"8.79 m",
       "weight":"210.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ]
    },
    {
       "id":96,
       "num":"096",
       "name":"슬리프",
       "img":"http://www.serebii.net/pokemongo/pokemon/096.png",
       "type":"에스퍼",
       "height":"0.99 m",
       "weight":"32.4 kg",
       "candy":"50 슬리프 캔디",
       "egg":"5 km",
       "multipliers":[
          2.08,
          2.09
       ],
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ],
       "next_evolution":[
          {
             "num":"097",
             "name":"슬리퍼"
          }
       ]
    },
    {
       "id":97,
       "num":"097",
       "name":"슬리퍼",
       "img":"http://www.serebii.net/pokemongo/pokemon/097.png",
       "type":"에스퍼",
       "height":"1.60 m",
       "weight":"75.6 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"096",
             "name":"슬리프"
          }
       ]
    },
    {
       "id":98,
       "num":"098",
       "name":"크랩",
       "img":"http://www.serebii.net/pokemongo/pokemon/098.png",
       "type":"물",
       "height":"0.41 m",
       "weight":"6.5 kg",
       "candy":"50 크랩 캔디",
       "egg":"5 km",
       "multipliers":[
          2.36,
          2.4
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"099",
             "name":"킹크랩"
          }
       ]
    },
    {
       "id":99,
       "num":"099",
       "name":"킹크랩",
       "img":"http://www.serebii.net/pokemongo/pokemon/099.png",
       "type":"물",
       "height":"1.30 m",
       "weight":"60.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"098",
             "name":"크랩"
          }
       ]
    },
    {
       "id":100,
       "num":"100",
       "name":"찌리리공",
       "img":"http://www.serebii.net/pokemongo/pokemon/100.png",
       "type":"전기",
       "height":"0.51 m",
       "weight":"10.4 kg",
       "candy":"50 찌리리공 캔디",
       "egg":"5 km",
       "multipliers":[
          2.01,
          2.02
       ],
       "weaknesses":[
          "땅"
       ],
       "next_evolution":[
          {
             "num":"101",
             "name":"붐볼"
          }
       ]
    },
    {
       "id":101,
       "num":"101",
       "name":"붐볼",
       "img":"http://www.serebii.net/pokemongo/pokemon/101.png",
       "type":"전기",
       "height":"1.19 m",
       "weight":"66.6 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"100",
             "name":"찌리리공"
          }
       ]
    },
    {
       "id":102,
       "num":"102",
       "name":"아라리",
       "img":"http://www.serebii.net/pokemongo/pokemon/102.png",
       "type":"풀 / 에스퍼",
       "height":"0.41 m",
       "weight":"2.5 kg",
       "candy":"50 아라리 캔디",
       "egg":"5 km",
       "multipliers":[
          2.7,
          3.18
       ],
       "weaknesses":[
          "불꽃",
          "얼음",
          "독",
          "비행",
          "벌레",
          "고스트",
          "악"
       ],
       "next_evolution":[
          {
             "num":"103",
             "name":"나시"
          }
       ]
    },
    {
       "id":103,
       "num":"103",
       "name":"나시",
       "img":"http://www.serebii.net/pokemongo/pokemon/103.png",
       "type":"풀 / 에스퍼",
       "height":"2.01 m",
       "weight":"120.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "독",
          "비행",
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"102",
             "name":"아라리"
          }
       ]
    },
    {
       "id":104,
       "num":"104",
       "name":"탕구리",
       "img":"http://www.serebii.net/pokemongo/pokemon/104.png",
       "type":"땅",
       "height":"0.41 m",
       "weight":"6.5 kg",
       "candy":"50 탕구리 캔디",
       "egg":"5 km",
       "multipliers":1.67,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "next_evolution":[
          {
             "num":"105",
             "name":"텅구리"
          }
       ]
    },
    {
       "id":105,
       "num":"105",
       "name":"텅구리",
       "img":"http://www.serebii.net/pokemongo/pokemon/105.png",
       "type":"땅",
       "height":"0.99 m",
       "weight":"45.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음"
       ],
       "prev_evolution":[
          {
             "num":"104",
             "name":"탕구리"
          }
       ]
    },
    {
       "id":106,
       "num":"106",
       "name":"시라소몬",
       "img":"http://www.serebii.net/pokemongo/pokemon/106.png",
       "type":"격투",
       "height":"1.50 m",
       "weight":"49.8 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ]
    },
    {
       "id":107,
       "num":"107",
       "name":"홍수몬",
       "img":"http://www.serebii.net/pokemongo/pokemon/107.png",
       "type":"격투",
       "height":"1.40 m",
       "weight":"50.2 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "비행",
          "에스퍼",
          "페어리"
       ]
    },
    {
       "id":108,
       "num":"108",
       "name":"내루미",
       "img":"http://www.serebii.net/pokemongo/pokemon/108.png",
       "type":"노말",
       "height":"1.19 m",
       "weight":"65.5 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":109,
       "num":"109",
       "name":"또가스",
       "img":"http://www.serebii.net/pokemongo/pokemon/109.png",
       "type":"독",
       "height":"0.61 m",
       "weight":"1.0 kg",
       "candy":"50 또가스 캔디",
       "egg":"5 km",
       "multipliers":1.11,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "next_evolution":[
          {
             "num":"110",
             "name":"또도가스"
          }
       ]
    },
    {
       "id":110,
       "num":"110",
       "name":"또도가스",
       "img":"http://www.serebii.net/pokemongo/pokemon/110.png",
       "type":"독",
       "height":"1.19 m",
       "weight":"9.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅",
          "에스퍼"
       ],
       "prev_evolution":[
          {
             "num":"109",
             "name":"또가스"
          }
       ]
    },
    {
       "id":111,
       "num":"111",
       "name":"뿔카노",
       "img":"http://www.serebii.net/pokemongo/pokemon/111.png",
       "type":"땅 / 바위",
       "height":"0.99 m",
       "weight":"115.0 kg",
       "candy":"50 뿔카노 캔디",
       "egg":"5 km",
       "multipliers":1.91,
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ],
       "next_evolution":[
          {
             "num":"112",
             "name":"코뿌리"
          }
       ]
    },
    {
       "id":112,
       "num":"112",
       "name":"코뿌리",
       "img":"http://www.serebii.net/pokemongo/pokemon/112.png",
       "type":"땅 / 바위",
       "height":"1.91 m",
       "weight":"120.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "풀",
          "얼음",
          "격투",
          "땅",
          "강철"
       ],
       "prev_evolution":[
          {
             "num":"111",
             "name":"뿔카노"
          }
       ]
    },
    {
       "id":113,
       "num":"113",
       "name":"럭키",
       "img":"http://www.serebii.net/pokemongo/pokemon/113.png",
       "type":"노말",
       "height":"1.09 m",
       "weight":"34.6 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":114,
       "num":"114",
       "name":"덩쿠리",
       "img":"http://www.serebii.net/pokemongo/pokemon/114.png",
       "type":"풀",
       "height":"0.99 m",
       "weight":"35.0 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "얼음",
          "독",
          "비행",
          "벌레"
       ]
    },
    {
       "id":115,
       "num":"115",
       "name":"캥카",
       "img":"http://www.serebii.net/pokemongo/pokemon/115.png",
       "type":"노말",
       "height":"2.21 m",
       "weight":"80.0 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":116,
       "num":"116",
       "name":"쏘드라",
       "img":"http://www.serebii.net/pokemongo/pokemon/116.png",
       "type":"물",
       "height":"0.41 m",
       "weight":"8.0 kg",
       "candy":"50 쏘드라 캔디",
       "egg":"5 km",
       "multipliers":2.23,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"117",
             "name":"시드라"
          }
       ]
    },
    {
       "id":117,
       "num":"117",
       "name":"시드라",
       "img":"http://www.serebii.net/pokemongo/pokemon/117.png",
       "type":"물",
       "height":"1.19 m",
       "weight":"25.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"116",
             "name":"쏘드라"
          }
       ]
    },
    {
       "id":118,
       "num":"118",
       "name":"콘치",
       "img":"http://www.serebii.net/pokemongo/pokemon/118.png",
       "type":"물",
       "height":"0.61 m",
       "weight":"15.0 kg",
       "candy":"50 콘치 캔디",
       "egg":"5 km",
       "multipliers":[
          2.15,
          2.2
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"119",
             "name":"왕콘치"
          }
       ]
    },
    {
       "id":119,
       "num":"119",
       "name":"왕콘치",
       "img":"http://www.serebii.net/pokemongo/pokemon/119.png",
       "type":"물",
       "height":"1.30 m",
       "weight":"39.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"118",
             "name":"콘치"
          }
       ]
    },
    {
       "id":120,
       "num":"120",
       "name":"별가사리",
       "img":"http://www.serebii.net/pokemongo/pokemon/120.png",
       "type":"물",
       "height":"0.79 m",
       "weight":"34.5 kg",
       "candy":"50 별가사리 캔디",
       "egg":"5 km",
       "multipliers":[
          2.38,
          2.41
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"121",
             "name":"아쿠스타"
          }
       ]
    },
    {
       "id":121,
       "num":"121",
       "name":"아쿠스타",
       "img":"http://www.serebii.net/pokemongo/pokemon/121.png",
       "type":"물 / 에스퍼",
       "height":"1.09 m",
       "weight":"80.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "벌레",
          "고스트",
          "악"
       ],
       "prev_evolution":[
          {
             "num":"121",
             "name":"아쿠스타"
          }
       ]
    },
    {
       "id":122,
       "num":"122",
       "name":"마임맨",
       "img":"http://www.serebii.net/pokemongo/pokemon/122.png",
       "type":"에스퍼",
       "height":"1.30 m",
       "weight":"54.5 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ]
    },
    {
       "id":123,
       "num":"123",
       "name":"스라크",
       "img":"http://www.serebii.net/pokemongo/pokemon/123.png",
       "type":"벌레 / 비행",
       "height":"1.50 m",
       "weight":"56.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "전기",
          "얼음",
          "비행",
          "바위"
       ]
    },
    {
       "id":124,
       "num":"124",
       "name":"루주라",
       "img":"http://www.serebii.net/pokemongo/pokemon/124.png",
       "type":"얼음 / 에스퍼",
       "height":"1.40 m",
       "weight":"40.6 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "벌레",
          "바위",
          "고스트",
          "악",
          "강철"
       ]
    },
    {
       "id":125,
       "num":"125",
       "name":"에레브",
       "img":"http://www.serebii.net/pokemongo/pokemon/125.png",
       "type":"전기",
       "height":"1.09 m",
       "weight":"30.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "땅"
       ]
    },
    {
       "id":126,
       "num":"126",
       "name":"마그마",
       "img":"http://www.serebii.net/pokemongo/pokemon/126.png",
       "type":"불꽃",
       "height":"1.30 m",
       "weight":"44.5 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ]
    },
    {
       "id":127,
       "num":"127",
       "name":"쁘사이저",
       "img":"http://www.serebii.net/pokemongo/pokemon/127.png",
       "type":"벌레",
       "height":"1.50 m",
       "weight":"55.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "비행",
          "바위"
       ]
    },
    {
       "id":128,
       "num":"128",
       "name":"켄타로스",
       "img":"http://www.serebii.net/pokemongo/pokemon/128.png",
       "type":"노말",
       "height":"1.40 m",
       "weight":"88.4 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":129,
       "num":"129",
       "name":"잉어킹",
       "img":"http://www.serebii.net/pokemongo/pokemon/129.png",
       "type":"물",
       "height":"0.89 m",
       "weight":"10.0 kg",
       "candy":"400 잉어킹 캔디",
       "egg":"2 km",
       "multipliers":[
          10.1,
          11.8
       ],
       "weaknesses":[
          "전기",
          "풀"
       ],
       "next_evolution":[
          {
             "num":"130",
             "name":"갸라도스"
          }
       ]
    },
    {
       "id":130,
       "num":"130",
       "name":"갸라도스",
       "img":"http://www.serebii.net/pokemongo/pokemon/130.png",
       "type":"물 / 비행",
       "height":"6.50 m",
       "weight":"235.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"129",
             "name":"잉어킹"
          }
       ]
    },
    {
       "id":131,
       "num":"131",
       "name":"라프라스",
       "img":"http://www.serebii.net/pokemongo/pokemon/131.png",
       "type":"물 / 얼음",
       "height":"2.49 m",
       "weight":"220.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "바위"
       ]
    },
    {
       "id":132,
       "num":"132",
       "name":"메타몽",
       "img":"http://www.serebii.net/pokemongo/pokemon/132.png",
       "type":"노말",
       "height":"0.30 m",
       "weight":"4.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":133,
       "num":"133",
       "name":"이브이",
       "img":"http://www.serebii.net/pokemongo/pokemon/133.png",
       "type":"노말",
       "height":"0.30 m",
       "weight":"6.5 kg",
       "candy":"25 이브이 캔디 (Evolution decided at random. Or, for first evolution, rename Eevee: Rainer => Vaporeon, Sparky => Jolteon, Pyro => Flareon)",
       "egg":"10 km",
       "multipliers":[
          2.02,
          2.64
       ],
       "weaknesses":[
          "격투"
       ],
       "next_evolution":[
          {
             "num":"134",
             "name":"샤미드"
          },
          {
             "num":"135",
             "name":"쥬피썬더"
          },
          {
             "num":"136",
             "name":"부스터"
          }
       ]
    },
    {
       "id":134,
       "num":"134",
       "name":"샤미드",
       "img":"http://www.serebii.net/pokemongo/pokemon/134.png",
       "type":"물",
       "height":"0.99 m",
       "weight":"29.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀"
       ],
       "prev_evolution":[
          {
             "num":"133",
             "name":"이브이"
          }
       ]
    },
    {
       "id":135,
       "num":"135",
       "name":"쥬피썬더",
       "img":"http://www.serebii.net/pokemongo/pokemon/135.png",
       "type":"전기",
       "height":"0.79 m",
       "weight":"24.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"133",
             "name":"이브이"
          }
       ]
    },
    {
       "id":136,
       "num":"136",
       "name":"부스터",
       "img":"http://www.serebii.net/pokemongo/pokemon/136.png",
       "type":"불꽃",
       "height":"0.89 m",
       "weight":"25.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "땅",
          "바위"
       ],
       "prev_evolution":[
          {
             "num":"133",
             "name":"이브이"
          }
       ]
    },
    {
       "id":137,
       "num":"137",
       "name":"폴리곤",
       "img":"http://www.serebii.net/pokemongo/pokemon/137.png",
       "type":"노말",
       "height":"0.79 m",
       "weight":"36.5 kg",
       "candy":"없음",
       "egg":"5 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":138,
       "num":"138",
       "name":"암나이트",
       "img":"http://www.serebii.net/pokemongo/pokemon/138.png",
       "type":"바위 / 물",
       "height":"0.41 m",
       "weight":"7.5 kg",
       "candy":"50 암나이트 캔디",
       "egg":"10 km",
       "multipliers":2.12,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "땅"
       ],
       "next_evolution":[
          {
             "num":"139",
             "name":"암스타"
          }
       ]
    },
    {
       "id":139,
       "num":"139",
       "name":"암스타",
       "img":"http://www.serebii.net/pokemongo/pokemon/139.png",
       "type":"바위 / 물",
       "height":"0.99 m",
       "weight":"35.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"138",
             "name":"암나이트"
          }
       ]
    },
    {
       "id":140,
       "num":"140",
       "name":"투구",
       "img":"http://www.serebii.net/pokemongo/pokemon/140.png",
       "type":"바위 / 물",
       "height":"0.51 m",
       "weight":"11.5 kg",
       "candy":"50 투구 캔디",
       "egg":"10 km",
       "multipliers":[
          1.97,
          2.37
       ],
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "땅"
       ],
       "next_evolution":[
          {
             "num":"141",
             "name":"투구푸스"
          }
       ]
    },
    {
       "id":141,
       "num":"141",
       "name":"투구푸스",
       "img":"http://www.serebii.net/pokemongo/pokemon/141.png",
       "type":"바위 / 물",
       "height":"1.30 m",
       "weight":"40.5 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "전기",
          "풀",
          "격투",
          "땅"
       ],
       "prev_evolution":[
          {
             "num":"140",
             "name":"투구"
          }
       ]
    },
    {
       "id":142,
       "num":"142",
       "name":"프테라",
       "img":"http://www.serebii.net/pokemongo/pokemon/142.png",
       "type":"바위 / 비행",
       "height":"1.80 m",
       "weight":"59.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "물",
          "전기",
          "얼음",
          "바위",
          "강철"
       ]
    },
    {
       "id":143,
       "num":"143",
       "name":"잠만보",
       "img":"http://www.serebii.net/pokemongo/pokemon/143.png",
       "type":"노말",
       "height":"2.11 m",
       "weight":"460.0 kg",
       "candy":"없음",
       "egg":"10 km",
       "multipliers":null,
       "weaknesses":[
          "격투"
       ]
    },
    {
       "id":144,
       "num":"144",
       "name":"프리져",
       "img":"http://www.serebii.net/pokemongo/pokemon/144.png",
       "type":"얼음 / 비행",
       "height":"1.70 m",
       "weight":"55.4 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "불꽃",
          "전기",
          "바위",
          "강철"
       ]
    },
    {
       "id":145,
       "num":"145",
       "name":"썬더",
       "img":"http://www.serebii.net/pokemongo/pokemon/145.png",
       "type":"전기 / 비행",
       "height":"1.60 m",
       "weight":"52.6 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "얼음",
          "바위"
       ]
    },
    {
       "id":146,
       "num":"146",
       "name":"파이어",
       "img":"http://www.serebii.net/pokemongo/pokemon/146.png",
       "type":"불꽃 / 비행",
       "height":"2.01 m",
       "weight":"60.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "물",
          "전기",
          "바위"
       ]
    },
    {
       "id":147,
       "num":"147",
       "name":"미뇽",
       "img":"http://www.serebii.net/pokemongo/pokemon/147.png",
       "type":"드래곤",
       "height":"1.80 m",
       "weight":"3.3 kg",
       "candy":"25 미뇽 캔디",
       "egg":"10 km",
       "multipliers":[
          1.83,
          1.84
       ],
       "weaknesses":[
          "얼음",
          "드래곤",
          "페어리"
       ],
       "next_evolution":[
          {
             "num":"148",
             "name":"신뇽"
          },
          {
             "num":"149",
             "name":"망나뇽"
          }
       ]
    },
    {
       "id":148,
       "num":"148",
       "name":"신뇽",
       "img":"http://www.serebii.net/pokemongo/pokemon/148.png",
       "type":"드래곤",
       "height":"3.99 m",
       "weight":"16.5 kg",
       "candy":"100 Dratini 캔디",
       "egg":null,
       "multipliers":2.05,
       "weaknesses":[
          "얼음",
          "드래곤",
          "페어리"
       ],
       "next_evolution":[
          {
             "num":"149",
             "name":"망나뇽"
          }
       ]
    },
    {
       "id":149,
       "num":"149",
       "name":"망나뇽",
       "img":"http://www.serebii.net/pokemongo/pokemon/149.png",
       "type":"드래곤 / 비행",
       "height":"2.21 m",
       "weight":"210.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "얼음",
          "바위",
          "드래곤",
          "페어리"
       ],
       "prev_evolution":[
          {
             "num":"148",
             "name":"신뇽"
          }
       ]
    },
    {
       "id":150,
       "num":"150",
       "name":"뮤츠",
       "img":"http://www.serebii.net/pokemongo/pokemon/150.png",
       "type":"에스퍼",
       "height":"2.01 m",
       "weight":"122.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ]
    },
    {
       "id":151,
       "num":"151",
       "name":"뮤",
       "img":"http://www.serebii.net/pokemongo/pokemon/151.png",
       "type":"에스퍼",
       "height":"0.41 m",
       "weight":"4.0 kg",
       "candy":"없음",
       "egg":null,
       "multipliers":null,
       "weaknesses":[
          "벌레",
          "고스트",
          "악"
       ]
    }
 ]
 export {dict}