export interface ServiceImageSource {
  file: string
  width: number
  height: number
}

export interface ServiceImageConfig {
  folderName: string
  files: ServiceImageSource[]
}

export interface ServiceImage {
  src: string
  width: number
  height: number
  aspectRatio: number
  isLowRes: boolean
}

const LOW_RES_WIDTH_THRESHOLD = 500

export const SERVICE_IMAGES: Record<string, ServiceImageConfig> = {
  'residential-plumbing-construction': {
    folderName: 'Residential Plumbing Construction',
    files: [
      { file: '2842311304-340x255.jpg', width: 340, height: 255 },
      { file: 'Bath3.jpg', width: 399, height: 600 },
      { file: 'Construction-340x226.jpg', width: 340, height: 226 },
    ],
  },
  'plumbing-services-repair-replacement': {
    folderName: 'Plumbing Services (Repair & Replacement)',
    files: [
      { file: 'IMG_2174-340x255.jpg', width: 340, height: 255 },
      { file: 'IMG_6129-x-255x340.jpg', width: 255, height: 340 },
      { file: 'IMG_6354-x.jpg', width: 600, height: 800 },
    ],
  },
  'plumbing-fixture-installation': {
    folderName: 'Plumbing Fixture Installation',
    files: [
      { file: '2842304004.jpg', width: 576, height: 768 },
      { file: 'Faucet-2-sm-340x227.jpg', width: 340, height: 227 },
      { file: 'ORG_0524.jpg', width: 799, height: 507 },
    ],
  },
  'water-heater': {
    folderName: 'Water Heater',
    files: [
      { file: 'IMG_0364.jpg', width: 400, height: 533 },
      { file: 'Water-Heater-x.jpg', width: 400, height: 533 },
      { file: 'WaterHeater-On-Demand.jpg', width: 387, height: 600 },
    ],
  },
  'tankless-water-heaters': {
    folderName: 'Tankless Water Heaters',
    files: [{ file: 'WaterHeater-On-Demand (1).jpg', width: 387, height: 600 }],
  },
  'gas-line-services': {
    folderName: 'Gas',
    files: [
      { file: 'gas.jpg', width: 768, height: 512 },
      { file: 'Water-Heater-x.jpg', width: 400, height: 533 },
      { file: 'WaterHeater-On-Demand (1).jpg', width: 387, height: 600 },
    ],
  },
  'garbage-disposal-solutions': {
    folderName: 'Garbage Disposal Solutions',
    files: [{ file: 'IMG_3265-768x576.jpg', width: 768, height: 576 }],
  },
  'toilet-repair-installation': {
    folderName: 'Toilet Repair & Installation',
    files: [{ file: 'IMG_3274.jpg', width: 400, height: 533 }],
  },
}

export function getServiceImages(slug: string): ServiceImage[] {
  const config = SERVICE_IMAGES[slug]
  if (!config) return []
  return config.files.map(({ file, width, height }) => ({
    src: `/images/${config.folderName}/${file}`,
    width,
    height,
    aspectRatio: width / height,
    isLowRes: width < LOW_RES_WIDTH_THRESHOLD,
  }))
}
