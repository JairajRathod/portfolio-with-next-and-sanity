import {defineType, defineField} from 'sanity'

export default defineType({
  name: 'skill',
  title: 'Skill',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Skill Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'experience',
      title: 'Experience (Years)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),

    defineField({
      name: 'rating',
      title: 'Rating (1–5)',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(5),
      description: 'Rate your proficiency from 1 to 5',
    }),

    // ✅ Category (Professional Upgrade)
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Frontend', value: 'frontend'},
          {title: 'Backend', value: 'backend'},
          {title: 'Database', value: 'database'},
          {title: 'DevOps', value: 'devops'},
          {title: 'Tools', value: 'tools'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    // ✅ Optional Icon
    defineField({
      name: 'icon',
      title: 'Skill Icon',
      type: 'image',
      options: {hotspot: true},
    }),

    // ✅ Featured Skill
    defineField({
      name: 'featured',
      title: 'Featured Skill',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'icon',
    },
  },
})
