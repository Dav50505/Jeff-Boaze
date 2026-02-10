/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

export type ContentBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'paragraphs'; texts: string[] }
  | { type: 'list'; items: string[] }
  | { type: 'section'; title: string; blocks: ContentBlock[] }
  | {
      type: 'numbered'
      items: { title: string; content?: string; subItems?: string[] }[]
    }

export interface ServiceEntry {
  slug: string
  title: string
  content: ContentBlock[]
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

export const DEFAULT_SERVICE_SLUG = 'residential-plumbing-construction'

export const SERVICE_SLUGS = [
  'residential-plumbing-construction',
  'plumbing-services-repair-replacement',
  'plumbing-fixture-installation',
  'water-heater',
  'tankless-water-heaters',
  'garbage-disposal-solutions',
  'toilet-repair-installation',
] as const

export type ServiceSlug = (typeof SERVICE_SLUGS)[number]

/* ------------------------------------------------------------------ */
/*  Data – exact copy as provided                                      */
/* ------------------------------------------------------------------ */

export const SERVICES_DATA: ServiceEntry[] = [
  {
    slug: 'residential-plumbing-construction',
    title: 'Residential Plumbing Construction',
    content: [
      {
        type: 'paragraphs',
        texts: [
          'If you are building or remodeling your residential home, you know the value of a reliable plumbing construction system. At Jeff Boaze Plumbing, we have the capability and experience to plan and construct a modern plumbing system that will provide peak performance for the life of your home.',
          'With all of the aspects involved in a quality home plumbing job, it is important to hire a reputable contractor that you can trust with all aspects of your plumbing.',
          'Whether it be the selection and installation of fixtures, appropriate architecture routing, or adhering to the many building and construction codes, we have the experience necessary to provide only the best service for your home.',
        ],
      },
      {
        type: 'section',
        title: 'Our Professional Plumbing Construction Solutions',
        blocks: [
          {
            type: 'numbered',
            items: [
              {
                title: 'New Construction & Planning',
                subItems: [
                  'Residential Plumbing Planning: Comprehensive blueprints and system design for new builds.',
                  'Gas Line Installation: Safe, code-compliant routing for stoves, fireplaces, and outdoor grills.',
                  'Drain & Sewer Installation: Precision grading and heavy-duty piping for reliable waste management.',
                ],
              },
              {
                title: 'Full-Scale Remodeling',
                subItems: [
                  'Kitchen Remodel: Expert reconfiguration of lines for islands, dishwashers, and refrigerators.',
                  'Bathroom Remodel: Complete transformation of your private oasis, ensuring style meets functionality.',
                ],
              },
              {
                title: 'Fixture & Appliance Upgrades',
                subItems: [
                  'Sink & Shower Installation: Modernizing your space with the latest in water-efficient technology.',
                  'Toilet Installation: High-efficiency and comfort-height options for every bathroom.',
                  'Water Heating Installation: Reliable hot water solutions, including traditional tanks and tankless options.',
                ],
              },
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Committed to Excellence in Residential Plumbing Construction',
        blocks: [
          {
            type: 'paragraphs',
            texts: [
              'At Jeff Boaze Plumbing we understand the aspects of general contracting and are committed to providing the highest quality of work on time and to budget.',
              'We are a family owned and operated business and we truly care about our clients and their projects.',
              'Jeff Boaze Plumbing  is often asked to finish, repair or replace work begun by other plumbers or plumbing companies. Because residential construction plumbing is hidden in walls or ceilings, under floors or underground, problems can often lie undetected after construction is completed and won\'t show up until much later. When this happens the problems are generally very expensive to repair or correct.',
              'We take our responsibility as a construction plumbing company very seriously and are committed to standing behind our work, ensuring that we conform to state of the industry practices and strict adherence to the specifications of the project.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'plumbing-services-repair-replacement',
    title: 'Plumbing Services (Repair & Replacement)',
    content: [
      {
        type: 'paragraph',
        text: 'Plumbing Services: Repairs & Replacement in Folsom, El Dorado Hills, Granite Bay, Orangevale, Fair Oaks, Roseville, Citrus Heights, Rocklin, and Sacramento',
      },
      {
        type: 'paragraphs',
        texts: [
          'Keeping your plumbing system in the best condition possible should be a priority in your home. You can rely upon Jeff Boaze Plumbing Services to help keep your home plumbing system functioning at its optimum. When and if you have a problem with your plumbing– no matter how large or small, you need to have it fixed as swiftly (and precisely) as possible. Many things can fail within your plumbing system. We will do our best to detect, and repair your plumbing problem. If we are unable to fix your problem, we will refer you to someone who can. We will always give you an honest, and reliable quote up front for any job we perform.',
          'Jeff Boaze Plumbing is licensed plumbing contractor, and with decades of journeyman level experience. We can always guarantee exceptional workmanship and well-mannered customer service on every job. Whether you require a regular inspection or more complex plumbing repairs, we are ready and eager to ensure you  receive the service you need.',
          'The root causes of a plumbing problem can often be difficult to detect. A less experienced plumber will frequently find and treat just the surface area trouble. We believe in quickly identifying the underlying cause to ensure we have isolated and repaired the problem at it\'s source. To do this we employ tools such as fiber optic video camera detection. We are able to use the video technology to visually inspect piping for leaks, sewer and drain lines for clogs. We employ technology along with our forty plus years of experience at finding and solving complicated problems. This knowledge has saved our customers thousands of dollars in unnecessary plumbing repairs.',
        ],
      },
      {
        type: 'section',
        title: 'Plumbing Services',
        blocks: [
          {
            type: 'paragraphs',
            texts: [
              'Installation and replacement of Wirsbo, Wardflex, and Pex Piping, as well as copper, ABS, water, sewer and gas systems. Repair, service and installation of all plumbing fixtures. No matter how big or small your project is, we will work with you to make your vision become reality.',
              'Our specialties include: Tankless water heaters, hot water recirculating systems, standard water heaters of all sizes; both electric and gas. We install the most efficient hot water systems on the market to save both time and money.',
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Plumbing Fixture Repairs & Replacement',
        blocks: [
          {
            type: 'paragraphs',
            texts: [
              'Your home faucets and sinks see as much use as any other major appliance in your home. To avoid a plumbing emergency such as a clogged and backup drain or a faucet fixture leak it\'s important to make sure that they are properly maintained and serviced. Most water municipalities provide us with H20 that is less than optimum for our plumbing systems. Because of this corrosion can occur over time and sediment can build up on a homes fixtures. It always costs less to perform periodic maintenance on a plumbing system than to incur an emergency repair. If fixtures are beyond repair, we are happy to recommend or install a quality replacement for your home.',
              'Give us a call and schedule an inspection of your home plumbing system for some peace of mind.',
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Sewer Line Repair & Replacement Causes',
        blocks: [
          {
            type: 'paragraph',
            text: 'The repair or replacement of an entire sewer line or even just a section is sometimes required when drain clearing efforts don\'t work.  These are the primary indicators that a repair or replacement procedure is required:',
          },
          {
            type: 'list',
            items: [
              'Broken, cracked or collapsed pipe due to shifting soil, frozen ground, settling, among other possible causes.',
              'Severe grease buildup or a foreign object restricting flow.',
              'Corrosion of an older pipe that caused the pipe to break or collapse.',
              'A "bellied" pipe where a section of the pipe has sunk due to ground or soil conditions, creating a low spot in the line where paper and waste collect and cause repeated blockages.',
              'Leaking joints where the seals between sections of pipe have broken, allowing water and sewage to escape.',
              'An excessive amount of roots in the line that cannot be cleared using a cable machine.',
            ],
          },
          {
            type: 'paragraph',
            text: 'Jeff Boaze Plumbing will not only identify the problem, but pinpoint its exact location with the use of  an in-line video inspection camera.  The images captured by the camera are transmitted to a device operated by the camera technician. These images are recorded for further review. At the same time, a radio transmitter on the camera records the physical location of the line and its depth from the surface so that the appropriate repairs can be properly planned and implemented.  And that usually results in faster and less costly repairs.',
          },
        ],
      },
    ],
  },
  {
    slug: 'plumbing-fixture-installation',
    title: 'Plumbing Fixture Installation',
    content: [
      {
        type: 'paragraphs',
        texts: [
          'Jeff Boaze Plumbing, Inc. is experienced in the installation and repair of all brands and models of plumbing fixture installation. These brands include: American Standard, Delta, Kohler, Moen, Price Pfister, Grohe, Rohl, Toto, Rheem, and  Bradford White. Whether you need installation, repair, or replacement of a plumbing fixture, we partner with the top manufacturers to provide you the highest quality products. We specialize in high-end kitchen and bathroom remodels, including bathroom fixtures and shower fixtures and all kitchen fixtures. We have the background and knowledge to repair and replace all types of plumbing fixtures. We provide service in Folsom, Granite Bay, Roseville, Citrus Heights, Fair Oaks, Orangevale, Rocklin and Sacramento areas.',
        ],
      },
      {
        type: 'section',
        title: 'We are Experts in all Plumbing Fixture Installations including:',
        blocks: [
          {
            type: 'list',
            items: [
              'Bathroom fixtures and sinks',
              'Shower fixtures',
              'Kitchen fixtures',
              'Faucets',
              'Tub and shower trims',
              'Toilets',
              'Bathtubs',
              'Garbage disposal',
              'Laundry room fixtures',
              'Outdoor kitchen fixtures',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'water-heater',
    title: 'Water Heater',
    content: [
      {
        type: 'paragraphs',
        texts: [
          'A water heater is one of the most important parts of your household plumbing system. Nobody wants to wake up to a cold shower and the need for a water heater repair or replacement!',
          'The average lifespan of a modern tank type water heater is 10-15 years. Your water heater however may give you signs that it is in need of service such as:',
        ],
      },
      {
        type: 'list',
        items: [
          'Discolored water or a strange odor.',
          'Leaks around the heaters base, or upper water connections.',
          'Excessive noises like whining or popping or hissing.',
        ],
      },
      {
        type: 'paragraph',
        text: 'In a conventional water heater, cold water enters the tank and is forced to the bottom to be heated by an electric element or gas burner. The water temperature is regulated by a thermostat, usually 120 to 140 degrees. When you turn on a water fixture, pressurized  hot water is sent to the fixture.',
      },
      {
        type: 'section',
        title: 'Here are typical issues we see with a conventional tank type water heater:',
        blocks: [
          {
            type: 'list',
            items: [
              'The circuit breaker on an electric water heater trips.',
              'The pilot light on a gas water heater goes out.',
              'The heating element or burner fails.',
              'A broken gas valve or thermostat.',
              'A relief valve that won\'t close.',
            ],
          },
          {
            type: 'paragraph',
            text: 'If you notice any of these problems, call Jeff Boaze Plumbing, and we will examine your heater and advise on the best course of repair or replacement options. If replacing your heater is the most cost-effective solution, we will provide knowledgeable information and choices that best meet your hot water needs for the size and function of your home.',
          },
        ],
      },
      {
        type: 'section',
        title: 'Replacing Your Water Heater',
        blocks: [
          {
            type: 'paragraphs',
            texts: [
              'Over time corrosion occurs within your water heater tank from minerals reacting with the steel. A water heater that is leaking cannot be repaired and must be replaced.',
              'Modern water heaters are far more energy-efficient than your existing unit. Heaters are now built with foam insulation between the tank and its outer shell, resulting in improved heat retention and glass liners make tanks less prone to corrosion. The modern high-efficiency models that meet Energy Star standards saves up to 20% in energy costs as well.',
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Your Options for a Modern Water Heater Are.',
        blocks: [
          {
            type: 'numbered',
            items: [
              {
                title: 'Conventional Tank Water Heater',
                content:
                  'This type of water heater is still effective, providing you with the results you need for a regular household. Tanks generally range in capacity from 20 to 100 gallons and your existing water heater size may be the most economical solution. We have extensive experience in tank water heaters, including gas and electric models. We will help you determine which option is best for your household or facility, finding you the most cost effective solution.',
              },
              {
                title: 'Tankless Water Heater',
                content:
                  'A tankless water heater produces hot water on-demand instantly making them much more convenient to use with a significant cost saving due to less wasted water and heating energy. A tankless water heater is also able to supply hot water to any size house or building. The compact design of a tankless water heater also takes up less space and is more efficient and cost effective.',
              },
            ],
          },
          {
            type: 'paragraphs',
            texts: [
              'Whichever type of heater you choose, we will remove your old unit, perform a professional installation, and clean up when were finished. Replacing a water heater is not a good idea for the inexperienced. Many communities even require a permit and inspection. Jeff Boaze Plumbing, Inc. will address the considerable safety and code issues involved and protect your home and family by ensuring you have a safe and reliable hot water system.',
              'Regular maintenance of your water heater can prevent future issues. Please call us to schedule an annual maintenance and inspection, we will make a careful check of your water heater to make sure it\'s safe and in good working order. Whether it\'s a water heater repair and service, or replacement and installation, Jeff Boaze Plumbing, Inc. is here to serve.',
            ],
          },
        ],
      },
    ],
  },
  {
    slug: 'tankless-water-heaters',
    title: 'Tankless Water Heaters',
    content: [
      {
        type: 'paragraphs',
        texts: [
          'A tankless water heater not only eliminates the need for a bulky storage tank, it\'s a great way to reduce your household energy costs.',
          'Tankless water heaters provide hot water on an as-needed basis, thereby eliminating bulky and inconvenient storage tanks and saving energy at the same time.',
          'Unlike conventional water heaters, which may hold 40 to 50 gallons of hot water ready at all times, tankless water heaters save energy by producing hot water only when needed. Tankless water heaters can, in fact, be 24 percent to 34 percent more efficient than a traditional tank-style water heater, depending on a home\'s daily hot water demand, according to the U.S. Department of Energy\'s Energy Efficiency & Renewable Energy Web site.',
          'According to the U.S. Energy Star program, "Energy Star-certified tankless water heaters save the typical family more than $80 per year, or $1,700 over the lifetime of the water heater, on gas bills compared to a standard storage model. Gas tankless models are a great choice for new construction and major remodeling, but they are also becoming popular as a replacement for gas storage water heaters."',
          'There are many different sizes and styles of tankless water heaters, including electric, natural gas, and propane, in single-room or whole-house sizes. Generally, you can replace an existing conventional water heater with a similarly powered tankless unit, however there are considerations depending on the type of tankless water heater. For electric systems, additional voltage and amperage may be required. For gas systems, there must be proper ventilation and the correct size gas line.',
          'Before purchasing a tankless water heater, you will need to determine your hot water usage, which is measured in gallons per minute (GPM), and figure out your maximum hot water demand. A typical shower requires about 2.5 GPM; dishwashers, washing machines, and other appliances all place additional demands on hot water production. Therefore, if you have multiple people showering or multiple appliances using hot water at the same time, you will need a larger water heater that delivers more gallons per minute.',
          'The average energy savings and additional lifespan make tankless heaters a viable option for many homes. In addition, many state and local utilities offer rebates and incentives for converting to energy-saving appliances, which can help mitigate the cost of installing a tankless system. However, if an additional gas line needs to be ran, a tankless water heater may not be the best option for your home due to the added cost which can run thousands of dollars.',
        ],
      },
    ],
  },
  {
    slug: 'garbage-disposal-solutions',
    title: 'Garbage Disposal Solutions',
    content: [
      {
        type: 'section',
        title: 'Quality Garbage Disposal Solutions by Jeff Boaze Plumbing:',
        blocks: [
          {
            type: 'paragraphs',
            texts: [
              'Garbage disposals are great little inventions… when they work. Like any other appliance that\'s handy to have around the house, disposals are bound to have problems at some point throughout their life. If you have a garbage disposal in your home, and the kitchen sink is starting to get full of dirty water and food,  or the disposal is leaking out of the bottom, you know you have an issue that needs repairing. We offer  quality garbage disposal solutions performed with professional integrity.',
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Your disposal could be malfunctioning because of:',
        blocks: [
          {
            type: 'list',
            items: [
              'A Jammed Grinder',
              'Something Stuck In The Grinding Plates',
              'Misuse',
              'A Failed Electrical Connection',
              'A Tripped Reset Button',
              'Excess Food Remnants',
              'Clogs',
            ],
          },
        ],
      },
      {
        type: 'section',
        title: 'Garbage Disposal Solutions',
        blocks: [
          {
            type: 'paragraph',
            text: 'For most issues, including jams and clogs, we can remove the problem and return your garbage disposal to normal. If, however, your garbage disposal has reached the end of its useful life, has an electrical problem, or the motor is blown, replacing the unit may be your best option. We will professionally evaluate your garbage disposal and recommend a quality replacement suited optimally to your needs and plumbing fixture.',
          },
        ],
      },
      {
        type: 'section',
        title: 'How to Avoid Problems In The Future',
        blocks: [
          {
            type: 'paragraph',
            text: 'Once your garbage disposal has been repaired, it is important to take steps to avoid the problem in the future. What\'s the best way to ensure you will get the most of your garbage disposal going forward? Try to avoid putting these items into it:',
          },
          {
            type: 'list',
            items: [
              'Fat Or Grease',
              'Pasta',
              'Rice',
              'Stringy Vegetables Such As Celery',
              'Potato Skins',
              'Whole Fruits Or Vegetables',
              'Any Non-Food Items',
            ],
          },
          {
            type: 'paragraph',
            text: 'Call Jeff Boaze Plumbing for a reliable garbage disposal solution.',
          },
        ],
      },
    ],
  },
  {
    slug: 'toilet-repair-installation',
    title: 'Toilet Repair & Installation',
    content: [
      {
        type: 'paragraph',
        text: 'Toilet Repair and Installation by A Master Plumber.',
      },
      {
        type: 'paragraphs',
        texts: [
          'A proper working toilet is crucial in order keep your home and daily life running smoothly. An improperly functioning toilet is a common issue that homeowners deal with on a daily basis. Not only will a poorly working toilet waste water which raises your water bill, it can lead to other issues such as clogs and leaks.',
        ],
      },
      {
        type: 'section',
        title: 'Symptoms of a toilet that may need repair or replacement include:',
        blocks: [
          {
            type: 'list',
            items: [
              'The toilet drains slowly or not at all.',
              'The toilet leaks in between the tank and the bowl.',
              'The bowl overflows every time you flush.',
              'The bowl leaks from the base every time the toilet is flushed.',
              'The toilet itself is loose and shifts when you sit and stand.',
              'The tank doesn\'t stop filling, and the water runs continuously.',
              'The tank vibrates or make noise as it fills up.',
              'The tank fills slowly.',
              'The handle must be held down to get a decent flush.',
            ],
          },
          {
            type: 'paragraph',
            text: 'If you are experiencing any of these symptoms listed above, repairing your toilet or installing an updated toilet may be your best option. Toilet repair is a good option for homeowners looking to fix a newer style name brand toilet that uses 1.6 gallons per flush (gpf) or less. New toilet installation is a good option for homeowners looking to upgrade to a more efficient toilet that has a better flush and uses less water (all new toilets sold in CA must be 1.28 gpf), saving money in the long run. We recommend name brand toilets such as Kohler, American Standard, or Toto. Let us be your first choice in toilet replacement or repair!',
          },
        ],
      },
      {
        type: 'section',
        title: 'Expert Toilet Repair Jeff Boaze Plumbing',
        blocks: [
          {
            type: 'paragraph',
            text: 'Is your toilet acting up? While some issues are minor, others can lead to expensive water damage or high utility bills. At Jeff Boaze Plumbing, we specialize in diagnosing and fixing the most common (and uncommon) toilet problems for homeowners in Sacramento and Placer Counties.',
          },
          {
            type: 'numbered',
            items: [
              {
                title: 'Running Toilets:',
                content:
                  'If you hear water trickling constantly, you likely have a worn-out flapper or a faulty fill valve. This can waste hundreds of gallons of water a day.',
              },
              {
                title: 'Leaking at the Base:',
                content:
                  'Water pooling around the floor usually points to a failed wax ring seal or loose mounting bolts. We provide fast wax ring replacement to protect your bathroom subfloor.',
              },
              {
                title: 'Weak or Incomplete Flushes:',
                content:
                  'This is often caused by low water levels in the tank or mineral deposits clogging the siphon jets. We\'ll restore your toilet\'s flushing power in one visit.',
              },
              {
                title: 'Phantom Flushing:',
                content:
                  'If your toilet refills on its own without being used, there\'s an internal leak. We\'ll pinpoint the leak and stop the "ghost flushing" immediately.',
              },
            ],
          },
        ],
      },
    ],
  },
]

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

export function getServiceBySlug(slug: string | null): ServiceEntry | null {
  if (!slug) return null
  return SERVICES_DATA.find((s) => s.slug === slug) ?? null
}

export function getDefaultService(): ServiceEntry {
  const found = getServiceBySlug(DEFAULT_SERVICE_SLUG)
  return found ?? SERVICES_DATA[0]
}

export function getServiceOrDefault(typeParam: string | null): ServiceEntry {
  const found = getServiceBySlug(typeParam)
  return found ?? getDefaultService()
}
