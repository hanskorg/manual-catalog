<template>
        <div class=" mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-10 lg:max-w-none lg:grid-cols-3">
          <card v-for="app in apps" :key="app.id" class=" flex max-w-xl flex-col items-start justify-between">
            <div class="flex items-center gap-x-4 text-xs">
              <time :datetime="app.datetime" class="text-gray-500">{{ app.date }}</time>
            </div>
            <div class="group relative">
              <h3 class="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                <a :href="app.href">
                  <span class="absolute inset-0" />
                  {{ app.title }}
                </a>
              </h3>
            </div>
            <div class="relative mt-8 flex items-center gap-x-4">
              <img  class="h-10 w-10 rounded-full bg-gray-50" :src="app.author.imageUrl"/>
              <div class="text-sm leading-6">
                <p class="font-semibold text-gray-900">
                  <a :href="app.author.href">
                    <span class="absolute inset-0" />
                    {{ app.author.name }}
                  </a>
                </p>
                <p class="text-gray-600">{{ app.author.org }}</p>
              </div>
            </div>
          </card>
        </div>

  </template>
  
  <script setup lang="ts">
  const apps = [
    {
      id: 1,
      title: 'The Rust Refernce',
      href: 'https://manual.icool.io/rust-reference/',
      date: 'Aug 1, 2023',
      datetime: '2023-08-01',
      author: {
        name: 'reference-cn',
        org: 'rust-lang-cn',
        href: 'https://github.com/rust-lang-cn/reference-cn',
        imageUrl:
          'https://avatars.githubusercontent.com/u/18444797?s=48&v=4',
      },
    },
    {
      id: 2,
      title: 'The Rust Edition Guide',
      href: 'https://manual.icool.io/rust-book/',
      date: 'Jul 10, 2024',
      datetime: '2024-07-10',
      category: { title: 'Marketing', href: '#' },
      author: {
        name: 'trpl-zh-cn',
        org: 'KaiserY',
        href: 'https://github.com/KaiserY/trpl-zh-cn.git',
        imageUrl:
          'https://avatars.githubusercontent.com/u/10757937?s=48&v=4',
      },
    },
    {
      id: 3,
      title: 'The Rustonomicon',
      href: 'https://manual.icool.io/rust-nomicon/',
      date: 'Jun 13 2024',
      datetime: '2024-06-13',
      author: {
        name: 'nomicon-zh-Hans',
        org: 'rust-lang-cn',
        href: 'https://github.com/rust-lang-cn/nomicon-zh-Hans.git',
        imageUrl:
          'https://avatars.githubusercontent.com/u/18444797?s=48&v=4',
      },
    }
  ]
  </script>