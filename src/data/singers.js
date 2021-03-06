const singers = [
    {
        name: 'Katy Perry',
        famous_as: 'Singer-Songwriter',
        net_worth: '$330 million',
        sun_sign: 'Scorpio',
        birth_place: 'Santa Barbara',
        birth_date: 'October 25, 1984',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/katy-perry-5.jpg',
        famous_song: 'One of the Boys',
        per_show_salary: 100000
    },
    {
        name: 'Billie Eilish',
        famous_as: 'Singer-Songwriter',
        net_worth: '$410 million',
        sun_sign: 'Sagittarius',
        birth_place: 'Los Angeles',
        birth_date: 'December 18, 2001',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/billie-eilish-10.jpg',
        famous_song: 'Ocean Eyes',
        per_show_salary: 300000
    },
    {
        name: 'Wiz Khalifa',
        famous_as: 'Rapper & Songwriter',
        net_worth: '$340 million',
        sun_sign: 'Virgo',
        birth_place: 'North Dakota',
        birth_date: 'September 8, 1987',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/wiz-khalifa-4.jpg',
        famous_song: 'See You Again',
        per_show_salary: 200000
    },
    {
        name: 'Nick Jonas',
        famous_as: 'Singer-songwriter',
        net_worth: '$235 million',
        sun_sign: 'Virgo',
        birth_place: 'Dallas',
        birth_date: 'September 16, 1992',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/nick-jonas-7.jpg',
        famous_song: 'Last Year Was Complicated',
        per_show_salary: 150000
    },
    {
        name: 'Camila Cabello',
        famous_as: 'Singer',
        net_worth: '$450 million',
        sun_sign: 'Pisces',
        birth_place: 'Havana',
        birth_date: 'March 3, 1997',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/camila-cabello-1.jpg',
        famous_song: 'Fifth Harmony',
        per_show_salary: 300000
    },
    {
        name: 'Lana Del Rey',
        famous_as: 'Singer-Songwriter',
        net_worth: '$150 million',
        sun_sign: 'Gemini',
        birth_place: 'New York',
        birth_date: 'June 21, 1985',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/lana-del-rey-4.jpg',
        famous_song: 'Born to Die',
        per_show_salary: 320000
    },
    {
        name: 'Mandy Moore',
        famous_as: 'Singer',
        net_worth: '$50 million',
        sun_sign: 'Aries',
        birth_place: 'New Hampshire',
        birth_date: 'April 10, 1984',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/mandy-moore-3.jpg',
        famous_song: 'I Wanna Be With You',
        per_show_salary: 150000
    },
    {
        name: 'Joe Jonas',
        famous_as: 'Singer',
        net_worth: '$90 million',
        sun_sign: 'Leo',
        birth_place: 'Casa Grande',
        birth_date: 'August 15, 1989',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/joe-jonas-1.jpg',
        famous_song: 'Fastlife',
        per_show_salary: 80000
    },
    {
        name: 'Fergie',
        famous_as: 'Singer-songwriter',
        net_worth: '$75 million',
        sun_sign: 'Aries',
        birth_place: 'Hacienda Heights',
        birth_date: 'March 27, 1975',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/fergie.jpg',
        famous_song: 'Boom Boom Pow',
        per_show_salary: 115000
    },
    {
        name: 'Khalid',
        famous_as: 'Singer',
        net_worth: '$220 million',
        sun_sign: 'Aquarius',
        birth_place: 'Georgia',
        birth_date: 'February 11, 1998',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/khalid-singer-1.jpg',
        famous_song: 'Stuck On You',
        per_show_salary: 90000
    },
    {
        name: 'Kesha',
        famous_as: 'Singer-songwriter',
        net_worth: '$110 million',
        sun_sign: 'Pisces',
        birth_place: 'Los Angeles',
        birth_date: 'March 1, 1987',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/kesha-4.jpg',
        famous_song: 'Cannibal',
        per_show_salary: 200000
    },
    {
        name: 'John Mayer',
        famous_as: 'Singer',
        net_worth: '$100 million',
        sun_sign: 'Libra',
        birth_place: 'Connecticut',
        birth_date: 'October 16, 1977',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/john-mayer-1.jpg',
        famous_song: 'Room for Squares',
        per_show_salary: 290000
    },
    {
        name: 'Sabrina Carpenter',
        famous_as: 'Singer',
        net_worth: '$70 million',
        sun_sign: 'Taurus',
        birth_place: 'Pennsylvania',
        birth_date: 'May 11, 1999',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/sabrina-carpenter-6.jpg',
        famous_song: 'Too Young',
        per_show_salary: 120000
    },
    {
        name: 'Becky G',
        famous_as: 'Singer',
        net_worth: '$30 million',
        sun_sign: 'Pisces',
        birth_place: 'Inglewood',
        birth_date: 'March 2, 1997',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/rebecca-marie-gomez-5.jpg',
        famous_song: 'Play It Again',
        per_show_salary: 220000
    },
    {
        name: 'Tori Kelly',
        famous_as: 'Singer',
        net_worth: '$10 million',
        sun_sign: 'Sagittarius',
        birth_place: 'Connecticut',
        birth_date: 'December 14, 1992',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/tori-kelly-1.jpg',
        famous_song: 'Nobody Love',
        per_show_salary: 160000
    },
    {
        name: 'Macklemore',
        famous_as: 'Rapper',
        net_worth: '$33 million',
        sun_sign: 'Gemini',
        birth_place: 'Washington',
        birth_date: 'June 19, 1983',
        img: 'https://www.thefamouspeople.com/profiles/thumbs/macklemore-1.jpg',
        famous_song: 'Cant Hold Us',
        per_show_salary: 125000
    }


]