({
    block: 'b-page',
    title: 'Руслан Керимов — orion@yandex-team.ru',
    favicon: '/favicon.ico',
    head: [
        { elem: 'css', url: 'mishanga.css' },
        { elem: 'css', url: 'mishanga.ie.css', ie: 'lte IE 7' },
        { block: 'i-jquery', elem: 'core' },
        { elem: 'js', url: 'mishanga.js' }
    ],
    i18n: { langs: ['ru', 'en'], lang: 'ru' },
    content: {
        block: 'b-card',
        mods: { lang: 'ru' },
        content: [
            {
                block: 'b-card-layout',
                lang: 'ru',
                info: {
                    name: 'Руслан Керимов',
                    position: 'Руководитель группы',
                    company: {
                        country: 'Россия',
                        locality: 'Санкт-Петербург',
                        zip: '195027',
                        address: 'Пискаревский проспект, дом 2, корпус 2, литер Щ, БЦ «Бенуа»',
                        phone: '+7 812 633-36-00',
                        'phone-add': '8593',
                    //  fax: '+7 (495) 739-70-70',
                        site: 'www.yandex.ru'
                    },
                    person: {
                        email: 'orion@yandex-team.ru',
                        cellular: '+7 (921) 339-52-96',
                    //  skype: 'mishanga',
                        github: 'ruslankerimov'
                    }
                }
            },
            {
                block: 'b-card-layout',
                lang: 'en',
                info: {
                    name: 'Ruslan Kerimov',
                    position: 'Team lead',
                    company: {
                        country: 'Russia',
                        locality: 'Saint-Petersburg',
                        zip: '195027',
                        address: 'Piskarevskiy prospekt, building 2, block 2, 4th floor, Benois Business Centre',
                        phone: '+7 812 633-36-00',
                        'phone-add': '8593',
                        site: 'www.yandex.com'
                    },
                    person: {
                        email: 'orion@yandex-team.ru',
                        cellular: '+7 (921) 339-52-96',
                        github: 'ruslankerimov'
                    }
                }
            }
        ]
    }
})
