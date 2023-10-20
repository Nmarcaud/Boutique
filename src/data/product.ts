function getRandomIntBetween(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default [
  {
    id: 1,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Macbook Pro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 1500,
  },
  {
    id: 2,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Levono Pro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 2300,
  },
  {
    id: 3,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Rider',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 1200,
  },
  {
    id: 4,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'LDLC benolo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 4500,
  },
  {
    id: 5,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Asus gamer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 3755,
  },
  {
    id: 6,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Rog desktop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 2452,
  },
  {
    id: 7,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'MSI play',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 1478,
  },
  {
    id: 8,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Think pad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 899,
  },
];