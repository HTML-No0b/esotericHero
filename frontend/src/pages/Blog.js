import React from 'react'
const posts = [
    {
      id: 1,
      title: 'Boost your conversion rate',
      href: '/Profile',
      description:
        'Code with elegance, strike with precision. Refactor mercilessly, optimize for performance, and never leave a bug alive.',
      date: 'Mar 16, 2022',
      datetime: '2020-03-16',
      category: { title: 'Web developemnt', href: '#' },
      author: {
        name: 'John Wick',
        role: 'CEO',
        href: '#',
        imageUrl:
          'https://cdnb.artstation.com/p/assets/images/images/026/053/645/large/marcin-sowinski-jw2.jpg?1587739769',
      },
    },
    {
        id: 1,
        title: 'Web development journey',
        href: '/Profile',
        description:
          'Start your web development journey by mastering HTML, CSS, and JavaScript. These building blocks are essential for creating engaging, dynamic, and responsive websites and web applications.',
        date: 'Jan 8, 2023',
        datetime: '2023-01-08',
        category: { title: 'Web Development', href: '#' },
        author: {
          name: 'Emily Anderson',
          role: 'Freelancer',
          href: '#',
          imageUrl:
            'https://cdna.artstation.com/p/assets/images/images/026/692/098/large/alexandra-volkova-ppp.jpg?1589461237',
        },
      },
      {
        id: 1,
        title: 'Stay-up-to-date',
        href: '/Profile',
        description:
          'Web development is a constantly evolving field. Stay up-to-date by regularly learning new technologies and best practices to create modern, user-friendly, and secure web applications.',
        date: 'Jan 10, 2023',
        datetime: '2023-01-10',
        category: { title: 'Web Development', href: '#' },
        author: {
          name: 'Samantha Lee',
          role: 'Intern',
          href: '#',
          imageUrl:
            'https://cdnb.artstation.com/p/assets/images/images/055/781/119/large/alexandra-volkova-priestess.jpg?1667750810',
        },
      },
      {
        id: 1,
        title: 'Thing that matter most',
        href: '/Profile',
        description:
          'I\'m not a great programmer; I\'m just a good programmer with great habits.',
        date: 'Jan 13, 2023',
        datetime: '2023-01-13',
        category: { title: 'Web Development', href: '#' },
        author: {
          name: 'David Chen',
          role: 'Intern',
          href: '#',
          imageUrl:
            'https://cdnb.artstation.com/p/assets/images/images/032/370/309/large/alexandra-volkova-boy-old2.jpg?1606240596',
        },
      },
]

const Blog = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8 text-gray-600">
            Things people talk about
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.datetime} className="text-gray-500">
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 py-1.5 px-3 font-medium text-gray-600 hover:bg-gray-100"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 text-gray-600 line-clamp-3">{post.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600">{post.author.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Blog