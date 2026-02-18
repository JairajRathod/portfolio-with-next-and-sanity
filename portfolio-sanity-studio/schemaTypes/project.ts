import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Project Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'technologies',
      title: 'Technologies Used',
      type: 'array',
      of: [{type: 'string'}],
      validation: (Rule) => Rule.required().min(1),
    }),

    // ✅ Project Screenshots
    defineField({
      name: 'screenshots',
      title: 'Project Screenshots',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
      validation: (Rule) => Rule.min(1),
    }),

    // ✅ Project Link
    defineField({
      name: 'projectLink',
      title: 'Project Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https'],
        }).required(),
    }),
  ],
})
