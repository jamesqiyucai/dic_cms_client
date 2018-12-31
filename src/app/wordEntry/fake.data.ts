import {List} from 'immutable';

const data = List([
  {
    id: 1,
    type: 'SENSEGROUP',
    text: '',
    pos: 1,
    attachments: [
      {
        id: 4,
        type: 'BASESENSE',
        text: 'on telephone',
        translations: ['电话', '一通电话'],
        attachments: [
          {

          }
        ]
      },
      {
        id: 5,
        type: 'BASESENSE',
        text: 'loud sound',
        translations: ['大的声音', '大声']
      }
    ]
  },
  {
    id: 2,
    type: 'SENSEGROUP',
    text: '',
    pos: 2,
    attachments: [
      {
        id: 6,
        type: 'BASESENSE',
        text: 'give name',
        translations: ['起名字', '命名'],
        attachments: [
          {
            id: 7,
            type: 'SUBSENSE',
            text: 'to give somebody/something a particular name; to use a particular name or title when you are talking to somebody',
          }
        ]
      },
      {
        id: 8,
        type: 'BASESENSE',
        text: 'describe',
        translations: ['描述', '形容'],
        attachments: [
          {
            id: 9,
            type: 'SUBSENSE',
            text: 'to describe somebody/something in a particular way'
          },
          {
            id: 10,
            type: 'SUBSENSE',
            text: 'to claim that you are a particular type of person'
          }
        ]
      },
      {
        id: 11,
        type: 'BASESENSE',
        text: 'shout',
        translations: ['喊', '叫'],
        attachments: [
          {
            id: 12,
            type: 'SUBSENSE',
            text: ' to shout or say something loudly to attract somebody’s attention',
            attachments: [
              {
                id: 14,
                type: 'EXAMPLE',
                text: 'I thought I heard somebody calling.',
                translations: ['我想我听到有人在叫喊。'],
                source: 'ijjjj',
                location: '14'
              },
              {
                id: 15,
                type: 'EXAMPLE',
                text: 'She called out to her father for help',
                translations: ['她叫她爸来帮忙。'],
                source: 'ijjsdfejj',
                location: '142'
              },
              {
                id: 16,
                type: 'EXAMPLE',
                text: 'He called out a warning from the kitchen.',
                translations: ['他在厨房里发出了报警的声音。'],
                source: 'ijjsdfejj',
                location: '142'
              },
            ]
          },
          {
            id: 13,
            type: 'SUBSENSE',
            text: 'to ask somebody to come by shouting or speaking loudly',
            attachments: [
              {
                id: 17,
                type: 'EXAMPLE',
                text: 'Will you call the kids in for lunch?'
              },
              {
                id: 18,
                type: 'EXAMPLE',
                text: 'Did you call?'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    type: 'SENSEGROUP',
    text: '',
    pos: 3,
    attachments: []
  }
]);
