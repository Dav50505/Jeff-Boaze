export interface ServiceImageConfig {
  folderName: string
  files: string[]
}

export const SERVICE_IMAGES: Record<string, ServiceImageConfig> = {
  'residential-plumbing-construction': {
    folderName: 'Residential Plumbing Construction',
    files: ['2842311304-340x255.jpg', 'Bath3.jpg', 'Construction-340x226.jpg'],
  },
  'plumbing-services-repair-replacement': {
    folderName: 'Plumbing Services (Repair & Replacement)',
    files: ['IMG_2174-340x255.jpg', 'IMG_6129-x-255x340.jpg', 'IMG_6354-x.jpg'],
  },
  'plumbing-fixture-installation': {
    folderName: 'Plumbing Fixture Installation',
    files: ['2842304004.jpg', 'Faucet-2-sm-340x227.jpg', 'ORG_0524.jpg'],
  },
  'water-heater': {
    folderName: 'Water Heater',
    files: ['IMG_0364.jpg', 'Water-Heater-x.jpg', 'WaterHeater-On-Demand.jpg'],
  },
  'tankless-water-heaters': {
    folderName: 'Tankless Water Heaters',
    files: ['WaterHeater-On-Demand (1).jpg'],
  },
  'garbage-disposal-solutions': {
    folderName: 'Garbage Disposal Solutions',
    files: ['IMG_3265-768x576.jpg'],
  },
  'toilet-repair-installation': {
    folderName: 'Toilet Repair & Installation',
    files: ['IMG_3274.jpg'],
  },
}

export function getServiceImages(slug: string): string[] {
  const config = SERVICE_IMAGES[slug]
  if (!config) return []
  return config.files.map((file) => `/images/${config.folderName}/${file}`)
}
