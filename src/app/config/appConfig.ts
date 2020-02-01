export const AppConfig = {
  map: {
    center: [-78.90395, 35.99695],
    zoom: 12,
    layers: [
      {
        label: 'Durham Trails',
        id: 'trails',
        url: 'https://webgis.durhamnc.gov/server/rest/services/PublicServices/Community/MapServer/6',
        popupTemplate: {
          // autocasts as new PopupTemplate()
          title: '{SYSTEMNAME}',
          content: [
            {
              // It is also possible to set the fieldInfos outside of the content
              // directly in the popupTemplate. If no fieldInfos is specifically set
              // in the content, it defaults to whatever may be set within the popupTemplate.
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'NAME',
                  label: '<b>Name</b>'
                },
                {
                  fieldName: 'TRAILTYPE',
                  label: '<b>Trail type</b>'
                },
                {
                  fieldName: 'SURFACETYPE',
                  label: '<b>Surface type</b>'
                },
                {
                  fieldName: 'STATUS',
                  label: '<b>Status</b>'
                },
                {
                  fieldName: 'LENGTH',
                  label: '<b>Length (mi)</b>'
                },
                {
                  fieldName: 'WIDTH',
                  label: '<b>Width (ft)</b>'
                }
              ]
            }
          ]
        }
      },
      {
        label: 'Parks',
        id: 'parks',
        url: 'https://webgis.durhamnc.gov/server/rest/services/PublicServices/Community/MapServer/8',
        popupTemplate: {
          // autocasts as new PopupTemplate()
          title: '{NAME}',
          content: [
            {
              // It is also possible to set the fieldInfos outside of the content
              // directly in the popupTemplate. If no fieldInfos is specifically set
              // in the content, it defaults to whatever may be set within the popupTemplate.
              type: 'fields',
              fieldInfos: [
                {
                  fieldName: 'PARKURL',
                  label: '<b>Name</b>'
                },
                {
                  fieldName: 'TRAILTYPE',
                  label: '<b>Trail type</b>'
                },
                {
                  fieldName: 'SURFACETYPE',
                  label: '<b>Surface type</b>'
                },
                {
                  fieldName: 'STATUS',
                  label: '<b>Status</b>'
                },
                {
                  fieldName: 'LENGTH',
                  label: '<b>Length (mi)</b>'
                },
                {
                  fieldName: 'WIDTH',
                  label: '<b>Width (ft)</b>'
                }
              ]
            }
          ]
        }
      }
    ],
  }
};
