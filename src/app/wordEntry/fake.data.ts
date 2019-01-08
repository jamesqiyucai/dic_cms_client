import {ItemFactoryImplementation} from '../abstractEntry/components/models/itemFactory/item-factory.implementation';
import {ItemFactory} from '../abstractEntry/components/models/itemFactory/item-factory.interface';
import {fromJS} from 'immutable';

const factory: ItemFactory = new ItemFactoryImplementation();

const data = fromJS([
  factory.getSenseGroup(
    1,
    1,
    [factory.getPhonetic(1, 'kɔːl'), factory.getPhonetic(2, 'kɔːl')],
    [
      factory.getBaseSense(
        2,
        'on telephone',
        ['通电话', '在电话上'],
        [
          factory.getSubSense(
            3,
            'also phone call',
            'the act of speaking to somebody on the telephone',
            ['和别人通电话的行为', '打电话的动作'],
            [],
            [
              factory.getExample(
                4,
                'to get/have/receive a call from somebody',
                ['接到某人的电话', '从某人处收到电话'],
                'some book',
                'page 2',
                []
              ),
              factory.getExample(
                5,
                'to give somebody/to make a call',
                ['给某人打电话', '致电某人'],
                'another book',
                'page 33',
                []
              ),
              factory.getExample(
                6,
                'Were there any calls for me while I was out?',
                ['我不在的时候有找我的电话吗？', '我有错过什么电话吗？'],
                'book3',
                'page 4',
                []
              ),
            ],
            [
              factory.getStory(7, 'phone / call / ring', 'In and is used mainly in British English.')
            ]
          ),
        ],
        [],
        []
      ),
      factory.getBaseSense(
        8,
        'loud sound',
        ['巨响', '大的声音'],
        [
          factory.getSubSense(
            10,
            'none',
            'a loud sound made by a bird or an animal, or by a person to attract attention',
            ['叫声', '喊叫'],
            [1, 2],
            [
              factory.getExample(
                11,
                'the distinctive call of the cuckoo',
                ['布谷鸟的独特叫声'],
                'book5',
                'page4',
                []
              ),
              factory.getExample(
                12,
                'a call for help',
                ['呼救的喊声'],
                'book6',
                'page 5',
                []
              )
            ],
            [])
        ],
        [],
        []
      ),
      factory.getBaseSense(
        9,
        'request/demand',
        ['要求', '请求', '需要'],
        [
          factory.getSubSense(
            13,
            'call (for something)',
            'a request, an order or a demand for somebody to do something or to go somewhere',
            ['让某人做某事的指令', '让某人去什么地方的指令', '要求某人做某事的话'],
            [1],
            [
              factory.getExample(
                14,
                'calls for the minister to resign',
                ['让部长下台的呼声', '让部长辞职的要求'],
                'book7',
                'page7',
                []
              ),
              factory.getExample(
                15,
                'calls for national unity',
                ['让国家统一的呼声', '让国家团结的要求'],
                'book8',
                'page8',
                []
              ),
              factory.getExample(
                16,
                'This is the last call for passengers travelling on British Airways flight 199 to Rome.',
                ['这是最后一次催登机', '登机不说第二遍'],
                'book9',
                'page9',
                []
              ),
            ],
            []
          ),
          factory.getSubSense(
            17,
            'no call for something | no call (for somebody) to do something',
            'no demand for something; no reason for somebody’s behaviour',
            [],
            [2],
            [
              factory.getExample(
                18,
                'There is not a lot of call for small specialist shops nowadays.',
                [],
                '',
                '',
                []
              )
            ],
            []
          ),
          factory.getSubSense(
            19,
            'call on somebody/something',
            'a demand or pressure placed on somebody/something',
            [],
            [1],
            [
              factory.getExample(
                20,
                'She is a busy woman with many calls on her time.',
                [],
                'book',
                'page',
                []
              )
            ],
            []
          )
        ],
        [],
        []
      )
    ],
    [],
    []
  ),
  factory.getSenseGroup(
    21,
    2,
    [
      factory.getPhonetic(1, 'kɔːl'),
      factory.getPhonetic(2, 'kɔːl')
    ],
    [
      factory.getBaseSense(
        22,
        'describe',
        ['描述', '形容'],
        [
          factory.getSubSense(
            27,
            '',
            'to describe somebody/something in a particular way; to consider somebody/something to be something',
            ['用一种特别方式描述人或者事'],
            [],
            [
              factory.getExample(
                29,
                'I wouldn\'t call German an easy language.',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                30,
                'I wouldn\'t call German an easy language.',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                31,
                'Are you calling me a liar?',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                32,
                'He was in the front room, or the lounge or whatever you want to call it.',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                33,
                'I make it ten pounds forty-three you owe me. Let\'s call it ten pounds.',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                34,
                'Would you call it blue or green?',
                [],
                'book',
                'page',
                []
              )
            ],
            []
          ),
          factory.getSubSense(
            28,
            'call yourself + noun',
            'to claim that you are a particular type of person, especially when other people question whether this is true',
            ['自称'],
            [],
            [
              factory.getExample(
                35,
                'Call yourself a friend? So why won\'t you help me, then?',
                [],
                'book',
                'page',
                []
              ),
              factory.getExample(
                36,
                'She\'s no right to call herself a feminist.',
                [],
                'book',
                'page',
                []
              )
            ],
            []
          )
        ],
        [],
        []
      ),
      factory.getBaseSense(
        23,
        'shout',
        [],
        [],
        [],
        []
      )
    ],
    [
      factory.getExample(
        24,
        'They decided to call the baby Mark.',
        ['他们决定给婴儿起名马克', '他们决定叫婴儿马克', '他们给婴儿命名马克'],
        'book',
        '111',
        []
      ),
      factory.getExample(
        25,
        'His name is Hiroshi but everyone calls him Hiro.',
        ['他叫hiroshi但别人都叫他hiro'],
        'book',
        '111',
        []
      ),
      factory.getExample(
        26,
        'What do they call that new fabric?',
        ['他们把新纤维叫啥', '新纤维称做什么'],
        'book',
        '111',
        []
      )
    ],
    []
  )
]);
