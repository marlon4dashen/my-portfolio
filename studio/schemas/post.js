export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'Institution',
      title: 'Institution',
      type: 'string',
    },
    {
      name: 'level',
      title: 'level',
      type: 'string'
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'type',
      title: 'type',
      type: 'string',
      options:{
        list:[
            { value: "work", title: "Work" },
            { value: "education", title: "Education" },
            { value: "award", title: "Award" },
            { value: "certificate", title: "Certificate" },
        ]
    }
    },
    {
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'Start',
      title: 'Start',
      type: 'datetime',
    },
    {
      name: 'End',
      title: 'End',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      media: 'mainImage',
    },
    prepare(selection) {
      const {author} = selection
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      })
    },
  },
}
