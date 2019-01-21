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
                },
                {
                    'side': 'right',
                    'type': 'text',
                    'value': 'demos -> fineuploader.com',
                    'timestamp': '19:38'
                },
                {
                    'side': 'right',
                    'type': 'link',
                    'value': 'https://fineuploader.com/demos#gallery-view',
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
        'accounts': [
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
                                'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///+re1CSXkV4QDqAqr9kl7GibT1eMi1zobhke5BxMyzDsK+mdU6KUDJuLCOQWj+fbUvn4N+ndUXXxLWsiXukbjrbrJiETz9TjqpkNTB1PDmpeEuVYUOIW0BqJBpZLCvv5+G/nIHk6/BxRTalajOInqlzj52aXh+NnKt1OjPNurK8xMyaeHXNnYmee2C5iHONsMOgvs5fAACDQRnAp5ygdWL38/DbzcZ9QjDQw8GUbmqVZUa7lnivjHHMtKKbZ0LBkXw/hKSnZSAqI9PKAAADR0lEQVR4nO3d21YaMRhAYbWCtB0QEKqAFbS0atXagkc81vd/qF41+amZhgxJJq619+WsyeFzbuIoi5UVIiIiIiIiIiIiKrXbj3G7jS6cNT7ErDGLLjw9fhez41OECBEiRIgQYSxhSzcLJtwWaeFMrB1QOGmoggH72apqt6+JeulJQOFeKJYUNrVwrW+6Yw8hQoQIESJE+EaFfZ35TBNQ2JrsqcIBtWp1W2jNd+sNTXycUVuNYK4cocO4BkKECL2FMC+ECBEuDjD3ZoT9nqWNu6z5uuxuQ9/yRScG5pzaogt7G5aG4tcFUXNoG9hDiBAhQoQIEZYs1Iev3tCYk9A8Rc/2TiqkcE332dzQQTjMmUOsElso32rm5CS0zpYZn2JIoXnT4YRNhAgRIkSIEKF34dVIdX2zbcp+phGvz8w3Z+IO62yZcRc313qjV07CrXH1b23r4mXWVvscb7kJ03aZaiNEmHwIEaYfQoSvqnZVbZG+2nXaX9c2XTW2sCpOgSfvVUdiDhdiV4w70tOd6KtXNqJ34SiycIQQIUKECBEiROhfOLjfVz380Omr+wMH4UCME7M96Kv3tum8n7wHIvNlB2DeuJxF4giTCyHC9EOIMP0Q/isUb7zK3vp/E6/l3ISjLdXjk+GzEvMfnAi2f9PHNOZ6etQbHTkJJba+Zsn+J/2iNW1L1wuzRK2khV7+FwMhQoQIESJEuIgwC1UqwhJDiBBh+SFEiLD8ECJEWH4IESIsP4QIEZafH+G0riq6kU2dF5dq6uW7LvQ3Z9j/WJoDfD5TnXsAjsJ9mUdR4dkn1fnyT7Hum4UQIUKECBEinGta7PTlRaiXngYUftdduuzuXOc0TnQp1g4oFHXcnuKyJ+/NThxWYeHSIUSIECFChIkKbbkJbMUXXnRs7bpkne0iutDeYXXxDsvebKEQIkw/hAjTDyHC9HuTwt87pio1Y2M7TDU2TpwzcyWgcKdiqrZuzElonDhn5hpChAgRIkSIMB3hy3jxXsoUHvzSuexj/Zuxr+acZv6pWj/wIRTLOO0jxs07CBEiRIgQIUKECwpzXqUlUcWLUBy3zT/SmvkBxLi5hhAhQoQIESJEiBAhQoQIESJEiBBhKsI/XikgQrJf9G0AAAAASUVORK5CYII='
                            },
                            {
                                'username': 'your_dieta',
                                'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAw1BMVEX///+re1CRd15Em8XPqYYbhbiibT3brJiPd19ke5DMo32te0+eeVf17umpeEzIoHysmomJbVCndUXq5uPXxLXo18jg7PMxlMG/nIGmelPavaTSrIqXeFvv5+EmirujbDsAh7+pay6ig2yzhl2+k20AfLRFgKN+enXNoo16s9KNcl/NwrqHaUyee2BTboa4k328xMx1e4SfiXWwaRvInHG/sqeslH/MtqTjzbvh5ehJZ4BqcXzcwanUs5WvjHG7lnhYe5eai2xoAAAD/klEQVR4nO3cbVfTSBiAYQyli7SppUChUAwVWN9Qd1WQfUH5/79KP8g8T/c82emEmUl6vO+POcnMXC09DGl0Y4OIiIiIfrnKY9edOnwrhw/sC+/kjDLLSptW7vQe2lGHj93hnRqhum49hT2ECDsTQoQI2w/hOgkPzG57yiLdyeF/7QtF2Lu1z8guPN6x6qn8h0POOM4v7OUNIUKECBEiRJhNWEpK+CxdSliaxRZ+NrdZF6NUXahZzL3c59jEpe2jEj5J05LQLPofIggRIkSIECHCFoQnUjphaW/VcgifqA3cuUmMI6xx5RCqECJEiBAhQoTZhCdmF6OBK4JlYI52bm7gYgtPzs2Gc9fw8cSBHk4TpZN0QvPHcTDcLn62PY8gnMtw9gs2alFYRBEWCBEiRIgQ4doIZW813HbN7S3XCi5pLsMNzdEyCYfeQogD/3C5hTWv9EyObgcJ1XWzmp+O7ELz0zKTj2SgUK6bqXfW/IQjRIgQIUKEHRQWQ/mWb1Y8WljMZLhhkUxYnroO1IN0IhzdjF03R5IcHYfcRR2p69RoehI1t1rRgSw0DLtf9R+aqC9iZUl9/3hVgLDyv+Z99XpIE7fOaj9MOPEsqX+aWXja9wwxQYgQIUKECBGuv7DsiPCvv9+7fEOsIPxDhvvHt5HPJXz/9KH7GEI32tM/ESJEiBAhQoQtCO07UdPIQjfcfXbh6NuR1bd3Usj90pE52tHXgOFiC/UdPV3T7/EfP1x0YedCiLD7IUTY/RD+V1hNXE1/iadLrUiWGfj94em+60vDh/HSpR/z+yIL9d/frGlvt9nDeOlSj/nt7jVlLQmbPXyQLvVYA0KECFsKIUKE7ZdSOJOyu9Tc6YSF/lcRuYFq7iKdUFnzC61lIESIECFChAgTCwcB+f/HYO8Q2YV6A+fv1W++/GOYq0gpDMovbDgwQoQIESJEiDCW8GrX1XAdK+xpwlyuqxjCjT1XGUR8JX194SsIWMqSYgB1VyELUe9QEMDbVWwWQoQIESJEiHBZGLKBiyxUW7WEwrfSR++SPkgRhB/V3AmFqvHjFx3UOA8LIUKECBEiRLgsjHCTMaDd/MLrsdlLaR6Sus4e+Dq70G56eeZaVKu3kMsup20j/rfp5dZDZ4v+6i3O3HUIWw4hQoTthxDhegk/LVyVyarkhE9dET4/tNq6lLYk2YidvbGI1Rt1hrpOj2bO9zyh8HDT6nDLU63Qd2HNfAgRIkSIECHCTgqLhVXREeH0tWRO+GNKq0210t/t1Bk1Y9ipFcXYxE7r5vHle4OWajjHIUKECBEiRIgQYWKhujFXw1K3z9ZSqLEmsCkLIUKECBEiRIgQIUKECBEiRIgQIcIuCr8DS8wc0PgR4R4AAAAASUVORK5CYII='
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
                                'profile_pic_url': 'data:image/png;base64,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'
                            }
                        ],
                        'param_value': 'dianacober7',
                        'last_message': 'hallo static sergant',
                        'is_unread': false
                    }
                ]
            },
            {
                'username': 'the_rostyslav2',
                'unread_conversations': 0,
                'pagination': {
                    'prev_cursor': '...',
                    'next_cursor': '...'
                },
                'conversations': [
                    {
                        'id': '1',
                        'name': 'Тест22',
                        'to': [
                            {
                                'username': 'dianacober7',
                                'profile_pic_url': 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAyVBMVEX///+re1CSXkV4QDqAqr9kl7GibT1eMi1zobhke5BxMyzDsK+mdU6KUDJuLCOQWj+fbUvn4N+ndUXXxLWsiXukbjrbrJiETz9TjqpkNTB1PDmpeEuVYUOIW0BqJBpZLCvv5+G/nIHk6/BxRTalajOInqlzj52aXh+NnKt1OjPNurK8xMyaeHXNnYmee2C5iHONsMOgvs5fAACDQRnAp5ygdWL38/DbzcZ9QjDQw8GUbmqVZUa7lnivjHHMtKKbZ0LBkXw/hKSnZSAqI9PKAAADR0lEQVR4nO3d21YaMRhAYbWCtB0QEKqAFbS0atXagkc81vd/qF41+amZhgxJJq619+WsyeFzbuIoi5UVIiIiIiIiIiIiKrXbj3G7jS6cNT7ErDGLLjw9fhez41OECBEiRIgQYSxhSzcLJtwWaeFMrB1QOGmoggH72apqt6+JeulJQOFeKJYUNrVwrW+6Yw8hQoQIESJE+EaFfZ35TBNQ2JrsqcIBtWp1W2jNd+sNTXycUVuNYK4cocO4BkKECL2FMC+ECBEuDjD3ZoT9nqWNu6z5uuxuQ9/yRScG5pzaogt7G5aG4tcFUXNoG9hDiBAhQoQIEZYs1Iev3tCYk9A8Rc/2TiqkcE332dzQQTjMmUOsElso32rm5CS0zpYZn2JIoXnT4YRNhAgRIkSIEKF34dVIdX2zbcp+phGvz8w3Z+IO62yZcRc313qjV07CrXH1b23r4mXWVvscb7kJ03aZaiNEmHwIEaYfQoSvqnZVbZG+2nXaX9c2XTW2sCpOgSfvVUdiDhdiV4w70tOd6KtXNqJ34SiycIQQIUKECBEiROhfOLjfVz380Omr+wMH4UCME7M96Kv3tum8n7wHIvNlB2DeuJxF4giTCyHC9EOIMP0Q/isUb7zK3vp/E6/l3ISjLdXjk+GzEvMfnAi2f9PHNOZ6etQbHTkJJba+Zsn+J/2iNW1L1wuzRK2khV7+FwMhQoQIESJEuIgwC1UqwhJDiBBh+SFEiLD8ECJEWH4IESIsP4QIEZafH+G0riq6kU2dF5dq6uW7LvQ3Z9j/WJoDfD5TnXsAjsJ9mUdR4dkn1fnyT7Hum4UQIUKECBEinGta7PTlRaiXngYUftdduuzuXOc0TnQp1g4oFHXcnuKyJ+/NThxWYeHSIUSIECFChIkKbbkJbMUXXnRs7bpkne0iutDeYXXxDsvebKEQIkw/hAjTDyHC9HuTwt87pio1Y2M7TDU2TpwzcyWgcKdiqrZuzElonDhn5hpChAgRIkSIMB3hy3jxXsoUHvzSuexj/Zuxr+acZv6pWj/wIRTLOO0jxs07CBEiRIgQIUKECwpzXqUlUcWLUBy3zT/SmvkBxLi5hhAhQoQIESJEiBAhQoQIESJEiBBhKsI/XikgQrJf9G0AAAAASUVORK5CYII='
                            }
                        ],
                        'last_message': 'hallo static',
                        'is_unread': false
                    }
                ]
            }
        ]
    }

};

export {userList, conversation};
