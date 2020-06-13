'use strict'

const db = require('../server/db')
const {User, Change, Comment, Community} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      firstName: 'Cody',
      lastName: 'Pug',
      userName: 'Cody',
      isAdmin: true,
      email: 'cody@email.com',
      password: '123'
    }),
    User.create({
      firstName: 'Murphy',
      lastName: 'Fish',
      userName: 'Murphy',
      email: 'murphy@email.com',
      password: '123'
    })
  ])

  const communities = await Promise.all([
    Community.create({
      name: 'BLM',
      description: 'Black Lives Matter',
      userId: 1
    }),
    Community.create({
      name: 'ICB',
      description: 'I CANT BREATHE',
      userId: 1
    }),
    Community.create({
      name: 'NJNP',
      description: 'NO JUSTICE NO PEACE',
      userId: 1
    })
  ])

  const changes = await Promise.all([
    Change.create({
      title: 'Change is HERE!',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      allowComments: true,
      isAnonymous: false,
      userId: 2,
      communityId: 2
    }),

    Change.create({
      title: 'Change is COMING!',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      allowComments: true,
      isAnonymous: false,
      userId: 1,
      communityId: 1
    }),

    Change.create({
      title: 'I am the CHANGE!',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      allowComments: true,
      isAnonymous: false,
      userId: 2,
      communityId: 1
    }),

    Change.create({
      title: 'No Justice No Peace',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      allowComments: true,
      isAnonymous: false,
      userId: 1,
      communityId: 3
    }),

    Change.create({
      title: 'I Cant Breathe',
      body:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      allowComments: true,
      isAnonymous: false,
      userId: 1,
      communityId: 1
    })
  ])

  const comments = await Promise.all([
    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 1,
      changeId: 1
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 2,
      changeId: 1
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 1,
      changeId: 2
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 1,
      changeId: 3
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 2,
      changeId: 4
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 2,
      changeId: 5
    }),

    Comment.create({
      body: 'Lorem Ipsum is simply dummy text',
      userId: 1,
      changeId: 5
    })
  ])

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${changes.length} changes`)
  console.log(`seeded ${comments.length} comments`)
  console.log(`seeded ${communities.length} communities`)
  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

if (module === require.main) {
  runSeed()
}

module.exports = seed
