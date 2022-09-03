import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const userData: Prisma.UserCreateInput[] = [
  {
    name: 'user1',
    email: 'user1@example.com',
    posts: {
      create: [
        {
          title: 'title1',
          content: 'content1',
          published: true,
        },
      ],
    },
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    posts: {
      create: [
        {
          title: 'title2',
          content: 'content2',
          published: true,
        },
      ],
    },
  },
  {
    name: 'user3',
    email: 'user3@example.com',
    posts: {
      create: [
        {
          title: 'title3',
          content: 'content3',
          published: false,
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);

  for (const u of userData) {
    const user = await prisma.user.create({
      data: u,
    });

    console.log(`Created user with id: ${user.id}`);
  }

  console.log(`Seeding finished.`);
}

main()
  .catch((e) => {
    console.error(e);

    process.exit(1);
  })

  .finally(async () => {
    await prisma.$disconnect();
  });
