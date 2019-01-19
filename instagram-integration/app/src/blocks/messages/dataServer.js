const conversation = {
    'data': {
        'meta': {
            'pagination': {
                'prev_cursor': '...',
                'next_cursor': '...'
            },
            'messages': [
                {
                    'username': 'Nika',
                    'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                    'side': 'left',
                    'type': 'photo', // photo, video, gif, like, link
                    'value': 'http://www.zr.ru/d/story/ad/913581/0-0.jpg',
                    'timestamp': '14:33'

                },
                {
                    'side': 'right',
                    'type': 'text',
                    'value': 'Йоу(right)',
                    'timestamp': '14:32'
                },
                {
                    'username': 'Nika',
                    'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                    'side': 'left',
                    'type': 'text', // photo, video, gif, like, link
                    'value': 'Заходи сюда: google.com',
                    'timestamp': '14:34'
                },
                {
                    'username': 'Nika',
                    'profile_pic_url': 'https://instagram.fhel2-1.fna.fbcdn.net/vp/c9d3add4b34748e12a4229350fb611e4/5CC667B8/t51.2885-19/s150x150/41710527_319004788655082_1651515706719600640_n.jpg?_nc_ht=instagram.fhel2-1.fna.fbcdn.net',
                    'side': 'left',
                    'type': 'link', // photo, video, gif, like, link
                    'value': 'http://www.zr.ru/d/story/ad/913581/0-0.jpg',
                    'timestamp': '14:33'
                },
                {
                    'side': 'right',
                    'type': 'photo',
                    'value': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg',
                    'timestamp': '19:38'
                }
            ]
        }
    }
};

const userList = {
    'data': {
        'settings': {
            'do_notification': true,
            'invoke_in_millis': 3000
        },
        'meta': [
            {
                'username': 'the_rostyslav',
                'unread_conversations': 0,
                'pagination': {
                    'prev_cursor': '...',
                    'next_cursor': '...'
                },
                'conversations': [
                    {
                        'id': '1',
                        'name': 'Тест1',
                        'to': [
                            {
                                'username': 'dianacober7',
                                'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                            },
                            {
                                'username': 'your_dieta',
                                'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                            }
                        ],
                        'last_message': 'йоу',
                        'is_unread': false
                    },
                    {
                        'id': '2',
                        'name': 'Sergant',
                        'to': [
                            {
                                'username': 'dianacober7',
                                'profile_pic_url': 'https://s.auto.drom.ru/i24224/pubs/4/63060/gen340_2880636.jpg'
                            }
                        ],
                        'param_value': 'dianacober7',
                        'last_message': 'Жіночко \uD83D\uDE0A',
                        'is_unread': false
                    }
                ]
            }
        ]
    }

};

export {userList, conversation};
