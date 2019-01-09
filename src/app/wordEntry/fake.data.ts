import {ItemFactoryImplementation} from '../abstractEntry/components/models/itemFactory/item-factory.implementation';
import {ItemFactory} from '../abstractEntry/components/models/itemFactory/item-factory.interface';
import {List} from 'immutable';
import {Story} from '../abstractEntry/components/models/story.class';
import {Example} from '../abstractEntry/components/models/example.class';
import {BaseSense} from '../abstractEntry/components/models/baseSense.class';
import {SenseGroup} from '../abstractEntry/components/models/sense-group.class';

const factory: ItemFactory = new ItemFactoryImplementation();

export const data: List<SenseGroup> = List([
  factory.getSenseGroup(
    1,
    1,
    List([factory.getPhonetic(1, 'kɔːl'), factory.getPhonetic(2, 'kɔːl')]),
    List([
      factory.getBaseSense(
        2,
        'on telephone',
        List(['通电话', '在电话上']),
        List([
          factory.getSubSense(
            3,
            'also phone call',
            'the act of speaking to somebody on the telephone',
            List(['和别人通电话的行为', '打电话的动作']),
            List(),
            List([
              factory.getExample(
                4,
                'to get/have/receive a call from somebody',
                List(['接到某人的电话', '从某人处收到电话']),
                'some book',
                'page 2',
                List()
              ),
              factory.getExample(
                5,
                'to give somebody/to make a call',
                List(['给某人打电话', '致电某人']),
                'another book',
                'page 33',
                List()
              ),
              factory.getExample(
                6,
                'Were there any calls for me while I was out?',
                List(['我不在的时候有找我的电话吗？', '我有错过什么电话吗？']),
                'book3',
                'page 4',
                List()
              ),
            ]),
            List([
              factory.getStory(7, 'phone / call / ring', 'In and is used mainly in British English.')
            ])
          ),
        ]),
        List([]),
        List([])
      ),
      factory.getBaseSense(
        8,
        'loud sound',
        List(['巨响', '大的声音']),
        List([
          factory.getSubSense(
            10,
            'none',
            'a loud sound made by a bird or an animal, or by a person to attract attention',
            List(['叫声', '喊叫']),
            List([1, 2]),
            List([
              factory.getExample(
                11,
                'the distinctive call of the cuckoo',
                List(['布谷鸟的独特叫声']),
                'book5',
                'page4',
                List()
              ),
              factory.getExample(
                12,
                'a call for help',
                List(['呼救的喊声']),
                'book6',
                'page 5',
                List()
              )
            ]),
            List())
        ]),
        List(),
        List()
      ),
      factory.getBaseSense(
        9,
        'request/demand',
        List(['要求', '请求', '需要']),
        List([
          factory.getSubSense(
            13,
            'call (for something)',
            'a request, an order or a demand for somebody to do something or to go somewhere',
            List(['让某人做某事的指令', '让某人去什么地方的指令', '要求某人做某事的话']),
            List([1]),
            List([
              factory.getExample(
                14,
                'calls for the minister to resign',
                List(['让部长下台的呼声', '让部长辞职的要求']),
                'book7',
                'page7',
                List()
              ),
              factory.getExample(
                15,
                'calls for national unity',
                List(['让国家统一的呼声', '让国家团结的要求']),
                'book8',
                'page8',
                List()
              ),
              factory.getExample(
                16,
                'This is the last call for passengers travelling on British Airways flight 199 to Rome.',
                List(['这是最后一次催登机', '登机不说第二遍']),
                'book9',
                'page9',
                List()
              ),
            ]),
            List()
          ),
          factory.getSubSense(
            17,
            'no call for something | no call (for somebody) to do something',
            'no demand for something; no reason for somebody’s behaviour',
            List(),
            List([2]),
            List([
              factory.getExample(
                18,
                'There is not a lot of call for small specialist shops nowadays.',
                List(),
                '',
                '',
                List()
              )
            ]),
            List()
          ),
          factory.getSubSense(
            19,
            'call on somebody/something',
            'a demand or pressure placed on somebody/something',
            List(),
            List([1]),
            List([
              factory.getExample(
                20,
                'She is a busy woman with many calls on her time.',
                List(),
                'book',
                'page',
                List()
              )
            ]),
            List()
          )
        ]),
        List(),
        List()
      )
    ]),
    List(),
    List()
  ),
  factory.getSenseGroup(
    21,
    2,
    List(),
    List<BaseSense>([
      factory.getBaseSense(
        22,
        'describe',
        List(['描述', '形容']),
        List([
          factory.getSubSense(
            27,
            '',
            'to describe somebody/something in a particular way; to consider somebody/something to be something',
            List(['用一种特别方式描述人或者事']),
            List(),
            List([
              factory.getExample(
                29,
                'I wouldn\'t call German an easy language.',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                30,
                'I wouldn\'t call German an easy language.',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                31,
                'Are you calling me a liar?',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                32,
                'He was in the front room, or the lounge or whatever you want to call it.',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                33,
                'I make it ten pounds forty-three you owe me. Let\'s call it ten pounds.',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                34,
                'Would you call it blue or green?',
                List(),
                'book',
                'page',
                List()
              )
            ]),
            List()
          ),
          factory.getSubSense(
            28,
            'call yourself + noun',
            'to claim that you are a particular type of person, especially when other people question whether this is true',
            List(['自称']),
            List(),
            List([
              factory.getExample(
                35,
                'Call yourself a friend? So why won\'t you help me, then?',
                List(),
                'book',
                'page',
                List()
              ),
              factory.getExample(
                36,
                'She\'s no right to call herself a feminist.',
                List(),
                'book',
                'page',
                List()
              )
            ]),
            List()
          )
        ]),
        List(),
        List()
      ),
      factory.getBaseSense(
        23,
        'shout',
        List(),
        List(),
        List(),
        List()
      )
    ]),
    List<Example>([
      factory.getExample(
        24,
        'They decided to call the baby Mark.',
        List(['他们决定给婴儿起名马克', '他们决定叫婴儿马克', '他们给婴儿命名马克']),
        'book',
        '111',
        List()
      ),
      factory.getExample(
        25,
        'His name is Hiroshi but everyone calls him Hiro.',
        List(['他叫hiroshi但别人都叫他hiro']),
        'book',
        '111',
        List()
      ),
      factory.getExample(
        26,
        'What do they call that new fabric?',
        List(['他们把新纤维叫啥', '新纤维称做什么']),
        'book',
        '111',
        List()
      )
    ]),
    List<Story>()
  )
]);
