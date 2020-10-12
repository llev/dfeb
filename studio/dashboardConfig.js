export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f840fdbab26ca4f388e66ef',
                  title: 'Sanity Studio',
                  name: 'dfeb-studio',
                  apiId: '1c35f339-8d32-494d-b26b-cd509ec43483'
                },
                {
                  buildHookId: '5f840fdba642c95567fb1e5b',
                  title: 'Blog Website',
                  name: 'dfeb',
                  apiId: 'c7bca950-d869-484f-a985-44e0e40a8c4a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/llev/dfeb',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://dfeb.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
