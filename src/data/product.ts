import type { ProductInterface } from '@/interfaces/Product.interface';
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
    category: 'desktop'
  },
  {
    id: 2,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Levono Pro',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 2300,
    category: 'desktop'
  },
  {
    id: 3,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Rider',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 1200,
    category: 'gamer'
  },
  {
    id: 4,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'LDLC benolo',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 4500,
    category: 'streaming'
  },
  {
    id: 5,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Asus gamer',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 3755,
    category: 'gamer'
  },
  {
    id: 6,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Rog desktop',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 2452,
    category: 'streaming'
  },
  {
    id: 7,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'MSI play',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 1478,
    category: 'gamer'
  },
  {
    id: 8,
    image: `https://picsum.photos/id/${getRandomIntBetween(0,1000)}/600/300`,
    title: 'Think pad',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing edolor tempore ipsam cum ipsum reiciendis',
    price: 899,
    category: 'desktop'
  },
] as ProductInterface[];