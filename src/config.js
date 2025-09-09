const { REACT_APP_MAPBOX_ACCESS_TOKEN } = process.env;

export default {
  style: 'mapbox://styles/mongabay/cmf27h1uu01lt01pg0m0mcupt',
  accessToken: REACT_APP_MAPBOX_ACCESS_TOKEN,
  showMarkers: false,
  theme: 'mongabay',
  intro: {
    title: 'Damming the Arai River',
    subtitle:
      'Irrigation Dam 2 will close the Arai River, which feeds into the Pursat River - an important ecosystem that sustains the Tonle Sap Lake, Cambodia’s most productive freshwater fishery. The new dam will clear some 7,300 hectares of protected forest and deprive communities of access to free-flowing water.',
    date: 'Sept. 9 2025',
    social: [
      {
        name: 'twitter',
        src: 'twitter.svg',
        href: 'https://x.com/Mongabay',
      },
      {
        name: 'facebook',
        src: 'facebook.svg',
        href: 'https://www.facebook.com/Mongabay/',
      },
    ],
  },
  logos: [
    {
      name: 'mongabay',
      src: 'mongabaylogo.png',
      width: '140',
      href: 'https://news.mongabay.com',
    },
    {
      name: 'vizzuality',
      src: 'vizzualitylogo.png',
      width: '100',
      href: 'https://vizzuality.com',
    },
  ],
  alignment: 'left',
  footer: 'Cartography by Andrés Alegría for Mongabay.',
  chapters: [

    // chapter 1
    {
      id: 'first chapter',
      alignment: 'left',
      hidden: false,
      title: 'The Cardamoms',
       images: [
        {
          src: 'Photo1.jpg',
          position: 'top',
          title: 'Dam construction in Pursat',
          author: 'Image provided by source',
        },
      ],
      description:
        "Despite being one of the best-preserved forest landscapes still standing in Cambodia, the Cardamoms’ lush rainforests face increasing threats, largely in the form of hydropower projects.",
      location: {
        center: [104.5, 12.0],
        zoom: 4.5,
        pitch: 0.0,
        bearing: 0,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
             {
          layer: 'satellite color',
          opacity: 0,
        },
      
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    // chapter 2
    {
      id: 'second-chapter',
      alignment: 'right',
      hidden: false,
      title: "Dams",
      description:
        "Dams have been built and more are under construction within protected forests in Cambodia’s Cardamom Mountains, with five hydropower dams already operational and others in various stages of development, including projects like Irrigation Dam 2 in Pursat province.",
      legend: [
        {
          title: 'Samkos REDD+ project area',
          pattern: { angle: 120, thickness: 2, gap: 6, bg: '#fafafa' },
          color: '#bde2af',
        },
           {
          title: 'Protected Areas',
          color: '#006a54',
        },
      ],
      location: {
        center: [103.700, 12.160],
        zoom: 8.25,
        pitch: 40.0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
                  {
          layer: 'satellite color',
          opacity: 0,
        },
                       {
          layer: 'Project Area line',
          opacity: 0,
        },
               {
          layer: 'Rokat commune line',
          opacity: 0,
        },
                     {
          layer: 'Rokat commune',
          opacity: 0,
        },
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    // chapter 3
    {
      id: 'third-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Overlaps',
      description:
          'Irrigation Dam 2’s project area which lies within Rokat commune, but also looks set to clear protected forest within the Samkos REDD+ project area.',
      legend: [
        {
          title: 'Irrigation Dam 2 project area',
          border: '#de595b',
        },
        {
          title: 'Rokat commune',
          color: '#e6a444',
        },
      ],
      location: {
        center: [103.700, 12.160],
        zoom: 10.25,
        pitch: 40.0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
                       {
          layer: 'Project Area line',
          opacity: 1,
        },
               {
          layer: 'Rokat commune line',
          opacity: 1,
        },
                     {
          layer: 'Rokat commune',
          opacity: 0.5,
        },
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
                         {
          layer: 'satellite color',
          opacity: 0,
        },
      ],
      onChapterExit: [
           {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },

    // chapter 4a
    {
      id: 'fourth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Satellite imagery, before',
      description:
        'Project area before the construction phase.',
      legend: [
      ],
      sources: 'Mapbox',
      location: {
        center: [103.700, 12.160],
        zoom: 12.5,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
        {
          layer: 'redd-cambodia',
          opacity: 0,
        },
                         {
          layer: 'satellite color',
          opacity: 1,
        },
      ],
      onChapterExit: [
        {
          layer: 'satellite color',
          opacity: 0,
        },
      ],
    },

    // chapter 4b
    {
      id: 'fourth-chapter-B',
      alignment: 'right',
      hidden: false,
      title: 'Satellite imagery, after',
      description:
        'Satellite imagery appears to show a roughly 10-kilometer (6-mile) road being carved through the forest to the dam site between February and March 2025, followed by some 60 hectares of forest clearance taking place within the project area through at least Aug. 12.',
      legend: [
      ],
      sources: 'Copernicus',
      location: {
        center: [103.700, 12.160],
        zoom: 12.5,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 1,
        },
        {
          layer: 'redd-cambodia',
          opacity: 0,
        },
                         {
          layer: 'satellite color',
          opacity: 0,
        },
      ],
      onChapterExit: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0.25,
        },
      ],
    },
    
    // chapter 5
    {
      id: 'fifth-chapter',
      alignment: 'right',
      hidden: false,
      title: 'Restricted water flow',
      description:
        'The dam is being built on the Arai River, the largest natural source of water for upwards of 40 families in Rokat commune who use it for everything from cooking, bathing and drinking to irrigating crops and sustaining livestock. It is also a key tributary of the Pursat River, which in turn empties into the Tonle Sap Lake.',
      location: {
        center: [103.9, 12.15],
        zoom: 9.25,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
                         {
          layer: 'satellite color',
          opacity: 0,
        },
      ],
      onChapterExit: [
             {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
    // chapter 6
    {
      id: 'sixth-chapter',
      alignment: 'left',
      hidden: false,
      title: 'Tonle Sap Lake',
      images: [
        {
          src: 'photo2.jpg',
          position: 'top',
          title: 'Artisanal fisher',
        },
      ],
      description:
        "The proliferation of irrigation dams and other barriers across the river’s catchment area has restricted the access of fish to and from the Tonle Sap Lake, Southeast Asia’s largest freshwater lake. Irrigation Dam 2 looks set to exacerbate these conditions, restricting the river flows and cutting off riverine communities.",
      location: {
        center: [104.070, 12.900],
        zoom: 9.25,
        pitch: 0,
        bearing: 25,
      },
      mapAnimation: 'flyTo',
      rotateAnimation: false,
      callback: '',
      onChapterEnter: [
        {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
                         {
          layer: 'satellite color',
          opacity: 0,
        },
      ],
      onChapterExit: [
             {
          layer: 'Satelitte_August_12_2025',
          opacity: 0,
        },
      ],
    },
    
  ],
};
