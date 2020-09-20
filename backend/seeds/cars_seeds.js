
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('cars').del()
  
      // Inserts seed entries
      await knex('cars').insert([
        // {make:, model:, year:, cost:, horsepower:,zerotosixty:, torque:, fueleconomycity:, fueleconomyhighway: , description:, imageurl1:, imageurl2:, imageurl3:, imageurl4:,  }
        // {make:"",
        //   model:"",
        //   year: ,
        //   cost:,
        //   horsepower:,
        //   zerotosixty: ,
        //   torque:, 
        //   fueleconomycity:, 
        //   fueleconomyhighway:, 
        //   description:"", 
        //   imageurl1:"", 
        //   imageurl2:"", 
        //   imageurl3:"", 
        //   imageurl4:""  }

        {make:"Mercedes Benz", 
        model:"AMG G63", 
        year:2020, 
        cost:157445, 
        horsepower:577,
        zerotosixty:4.5, 
        torque:627, 
        fueleconomycity:13, 
        fueleconomyhighway:15, 
        description:"The Mercedes-Benz G-class is a cultural icon and one of the most versatile SUVs on the planet. However, it's also among the most expensive, which caters to the company's elite clientele. A potent twin-turbo V-8 helps move this unmistakable box posthaste, and its sturdy all-wheel-drive system ensures few roads are off limits. The Merc's airy and cargo-friendly cabin includes luxurious amenities and high-tech features. It also can be outfitted with extravagant options, but they'll further inflate the G-wagen's already lofty price. While it isn't as agile or serene as high-dollar alternatives from Bentley and Rolls-Royce, the 2020 AMG G63 has the added bonus of being seriously capable off-road and undeniably cool everywhere else", 
        imageurl1:"https://besthqwallpapers.com/Uploads/14-5-2018/52616/mercedes-amg-g63-edition-1-4k-2019-cars-parking-suvs.jpg", 
        imageurl2: "https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/g/gallery/amg/gallery-class-page/2020-AMG-G-SUV-GAL-005-H-FE-DR.jpg", 
        imageurl3:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/g/gallery/amg/gallery-class-page/2020-AMG-G-SUV-GAL-013-F-FI-DR.jpg", 
        imageurl4:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/g/gallery/amg/gallery-class-page/2020-AMG-G-SUV-GAL-006-G-FE-DR.jpg",  }
          
        ,
        
        {make:"Mercedes Benz",
          model:"GLE SUV",
          year:2020,
          cost:55245,
          horsepower:255,
          zerotosixty:7.0,
          torque:273, 
          fueleconomycity:20, 
          fueleconomyhighway:27, 
          description:"The 2020 Mercedes-Benz GLE is more than just good – it's outstanding. Mercedes implemented many improvements for this redesign, leaving nothing untouched. The body has updated styling and a longer wheelbase, with the latter adding stability and extra passenger space. The bevy of advanced technology includes an all-new infotainment system that's packed with features. Performance and handling also take a serious step up from the previous GLE.  Thanks to its performance enhancements, the 2020 GLE is now livelier on the highway and will appeal to a wider customer base. Some nifty new tech toys – from the clever adaptive suspension system to the state-of-the-art entertainment options – will also turn heads. You'll be hard-pressed to find an interior as luxurious as the GLE's, but before you shell out more than $50,000 for a new SUV, there are a few other contenders that merit a look", 
          imageurl1:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gle/suv/gallery/non-amg/gallery-class-page/2020-GLE-SUV-GALLERY-001-SET-Q-FI-DR.jpg", 
          imageurl2:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gle/suv/gallery/non-amg/gallery-class-page/2020-GLE-SUV-GALLERY-003-SET-Q-FI-DR.jpg", 
         imageurl3:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gle/suv/gallery/non-amg/gallery-class-page/2020-GLE-SUV-GALLERY-013-SET-C-FI-DR.jpg", 
          imageurl4:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gle/suv/gallery/non-amg/gallery-class-page/2020-GLE-SUV-GALLERY-008-SET-E-FI-DR.jpg"  }

       ,

       {make:"Mercedes Benz",
          model:"Maybach Sedan",
          year:2020,
          cost:173995,
          horsepower:463,
          zerotosixty:4.8,
          torque:516, 
          fueleconomycity:16, 
          fueleconomyhighway:25, 
          description:"If you've got the means for an ultra-premium luxury sedan, let alone one you'll likely experience exclusively from the back seat, the 2019 Mercedes-Benz Maybach should be right at the top of your list. Based on the Mercedes S-Class, the Maybach has a longer wheelbase, longer bumper-to-bumper dimensions, and a big increase in interior space (mostly in the rear). The Maybach also comes with some exclusive cabin materials and upgraded interior features, catering to clients who will likely be driven to their destination by a chauffeur. And while it doesn't get much in the way of changes this year — a new grille and some new paint schemes — this big Mercedes is still worth your time.One of the most comfortable cars on the road today, the Maybach competes with the best of the best. Sure, you'll find most of the same equipment in a standard S-Class, but it won't feel as exclusive as a Bentley Mulsanne or a Rolls-Royce Phantom — and the Maybach does that. What's more, the Maybach may be significantly more expensive than the standard S-Class, or even the fancy AMG models, but compared to brands like Bentley and Rolls, it's a bargain", 
          imageurl1:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/s/maybach/gallery/gallery-class-page/2020-MAYBACH-GAL-001-A-FE-DR.jpg", 
          imageurl2:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/s/maybach/gallery/gallery-class-page/2020-MAYBACH-GAL-003-A-FE-DR.jpg", 
          imageurl3:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/s/maybach/gallery/gallery-class-page/2020-MAYBACH-GAL-010-C-FI-DR.jpg", 
          imageurl4:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/s/maybach/gallery/gallery-class-page/2020-MAYBACH-GAL-004-A-FE-DR.jpg"  }

          ,

          {make:"Mercedes Benz",
          model:"AMG GT",
          year:2020,
          cost:163895,
          horsepower:469,
          zerotosixty:3.9,
          torque:465, 
          fueleconomycity:19, 
          fueleconomyhighway:24, 
          description:" Yes, the 2020 AMG GT is an excellent luxury sports car. The GT is a blast to drive on winding roads. This Mercedes is also astoundingly quick in a straight line because of its direct steering, finely tuned suspension, and lineup of brawny six- and eight-cylinder engines.It’s the overall refinement that makes the GT truly special. It’s comfortable enough to drive on broken pavement and in everyday traffic. There are lots of standard tech and safety features. The stylish and well-trimmed cabin is a feast for the senses, and there’s even decent cargo space. For 2020, the AMG GT family includes two-door coupe and convertible models, as well as a four-door sedan.The AMG GT is a great pick in this class, but so are a number of rivals. Before buying, test-drive the Porsche 911, BMW 8 Series, and Chevrolet Corvette. The 911 is a perennial favorite because of its balanced handling, distinctive flat-six engines, and urbane interior. The 8 Series is offered in sleek coupe, convertible, and sedan models, much like the AMG. Finally, the Corvette delivers high-performance driving at a more affordable price point. All are great options", 
          imageurl1:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gt/coupe/gallery/amg-gt-c/gallery-class-page/2020-AMG-GT-COUPE-GAL-005-M-FE-DR.jpg", 
          imageurl2:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gt/coupe/gallery/amg-gt-c/gallery-class-page/2020-AMG-GT-COUPE-GAL-012-S-FI-DR.jpg", 
          imageurl3:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gt/coupe/gallery/amg-gt-c/gallery-class-page/2020-AMG-GT-COUPE-GAL-008-H-FE-DR.jpg", 
          imageurl4:"https://www.mbusa.com/content/dam/mb-nafta/us/myco/my20/gt/coupe/gallery/amg-gt-c/gallery-class-page/2020-AMG-GT-COUPE-GAL-001-M-FE-DR.jpg"  }

       ,


        {make:"BMW",
          model:"i8",
          year:2020,
          cost:148495,
          horsepower:369,
          zerotosixty:4.2,
          torque:420, 
          fueleconomycity:26, 
          fueleconomyhighway:29, 
          description:"In almost every way, the 2019 BMW i8 is a supercar. It's outrageous and futuristic styling draws looks from down the block, its wild flip-up doors announce your presence whenever they're opened.Hybrid vehicles have a stigma of being unexciting, but the BMW i8 shatters that legend. With its sports car looks and advanced interior, the i8 brings exclusivity and passion to a segment that has long emphasized moderation. Fuel economy is better than other sports cars, and it can run 18 miles on electricity alone. All of this comes at a price, though, making the BMW i8 a unique vehicle that will interest fans of exotics and fuel-savers alike", 
          imageurl1:"https://www.bmwusa.com/content/dam/bmwusa/BMWi/i8/Gallery/2020/BMW-MY20-i8-Gallery-Exterior-10.jpg", 
          imageurl2:"https://www.bmwusa.com/content/dam/bmwusa/BMWi/i8/2020/BMW-MY20-i8-Overview-Design-05-Desktop.jpg", 
          imageurl3:"https://www.bmwusa.com/content/dam/bmwusa/BMWi/i8/Gallery/2020/BMW-MY20-i8-Gallery-Exterior-08.jpg", 
          imageurl4:"https://www.bmwusa.com/content/dam/bmwusa/BMWi/i8/Gallery/2020/BMW-MY20-i8-Gallery-Exterior-03.jpg"  }
    
     ,

        {make:"BMW",
          model:"x6",
          year:2020 ,
          cost:65295,
          horsepower:335,
          zerotosixty:5.2,
          torque:330, 
          fueleconomycity:18, 
          fueleconomyhighway:24, 
          description:"The BMW X6 is a good 2-row SUV. The X6 boasts a handsome interior with five seats and a generous array of standard features. It’s a blast to drive, thanks to its agile handling and punchy turbocharged engine options. Better still, it delivers this performance without sacrificing ride quality for everyday driving.Standard features include a moonroof and the iDrive infotainment system, which includes a 10.2.-inch touch screen, navigation, a nine-speaker audio system, Bluetooth, a USB port, and Apple CarPlay. Available features include wireless device charging and an upgraded infotainment system with a Wi-Fi hot spot, satellite radio, and one of two premium audio systems.The X6 comes with a 300-horsepower turbocharged six-cylinder base engine. Two V8s – that put out 445 and 567 horsepower – are available. All three engines have enough power to move the X6 with ease, but the V8s deliver much more dynamic acceleration than the six-cylinder. A smooth-shifting eight-speed automatic transmission comes with each engine.The BMW X6 has a starting price of $63,550. The price rises to $78,300 when equipped with its V8 engine, and again to $105,700 in the high-performance X6 M trim. At both ends of the spectrum, the X6 is more expensive than most SUVs in its class, often by a wide margin", 
          imageurl1:"https://www.bmwusa.com/content/dam/bmwusa/XModels/myu-x6-2020/gallery/exterior/BMW-MY20-X6-Gallery-Exterior-03.jpg", 
          imageurl2:"https://www.bmwusa.com/content/dam/bmwusa/XModels/myu-x6-2020/gallery/interior/BMW-MY20-X6-Gallery-Interior-08.jpg", 
          imageurl3:"https://www.bmwusa.com/content/dam/bmwusa/XModels/myu-x6-2020/gallery/exterior/BMW-MY20-X6-Gallery-Exterior-10.jpg", 
          imageurl4:"https://www.bmwusa.com/content/dam/bmwusa/XModels/myu-x6-2020/gallery/exterior/BMW-MY20-X6-Gallery-Exterior-02.jpg"  } 


          ,

        {make:"BMW",
          model:"M4",
          year:2020 ,
          cost:70145,
          horsepower:425,
          zerotosixty:4.1,
          torque:406, 
          fueleconomycity:18, 
          fueleconomyhighway:25, 
          description:"The traditional magic behind BMW's vaunted M-car lineup lies in its balance of comfort and high performance. A prime example is the 2020 BMW M4. A strong six-cylinder engine, taut handling and powerful braking make the M4 a world-class sports coupe, but you don't need to drive it at world-class levels to enjoy it. Its cosseting seats, large trunk and user-friendly tech interface make it just as good on the daily commute or long drives out of town.Sure, you can get those same qualities from BMW's regular 4 Series coupe. But what you won't get is the M4's brash alter ego, the one that grips the tarmac with tenacity and wildly accelerates with nearly 450 horsepower under the hood. It also looks more aggressive than the regular 4 Series thanks to subtle styling enhancements such as wider fenders and a domed hood.Overall  the M4 continues to be a great sport coupe that maximizes both performance and daily livability", 
          imageurl1:"https://www.bmwusa.com/content/dam/bmwusa/4Series/2020/m4/gallery/exterior/BMW-MY20-M4-Gallery-04.jp", 
          imageurl2:"https://www.bmwusa.com/content/dam/bmwusa/4Series/2020/m4/gallery/interior/BMW-MY20-M4-Gallery-21.jpg", 
          imageurl3:"https://www.bmwusa.com/content/dam/bmwusa/4Series/2020/m4/gallery/exterior/BMW-MY20-M4-Gallery-10.jpg", 
          imageurl4:"https://www.bmwusa.com/content/dam/bmwusa/4Series/2020/m4/gallery/exterior/BMW-MY20-M4-Gallery-01.jpg"  }

          ,

        {make:"BMW",
          model:"M8",
          year:2020,
          cost:133995,
          horsepower:600,
          zerotosixty:3.1,
          torque:553, 
          fueleconomycity:15, 
          fueleconomyhighway:21, 
          description:" Fans of BMW have been calling for the birth of the range-topping M8 nameplate for years now - since before BMW had even confirmed the revival of the 8 Series. BMW has finally delivered, with 2020's M8 and M8 Competition coupes, with little changes from the internet-breaking concepts and clear GTE-racer inspiration (the GTE was, unusually, launched before the road-going models). Although not quite as much a supercar as the original M8 concept of the 1990s, the M8's 4.4-liter twin-turbocharged powerplant is a key ingredient for a hellraising full-size luxury coupe, developing 600 horsepower in the regular M8, and 617 hp in Competition trim. Both versions produce 553 lb-ft of torque, although the Competition carries the spread over an additional 160 rpm. Advancements on regular 8 Series models include a host of performance-oriented upgrades and M-specific features, as well as more muscular bodywork and sportier styling accents. A large, tech-laden grand tourer with a similarly large price tag, the M8 wages war with the Mercedes-AMG S63 Coupe and Bentley Continental GT.Compared to rivals such as the Porsche 911 and the Mercedes AMG GT, it's a more luxurious, refined and practical alternative", 
          imageurl1:"https://www.bmwusa.com/content/dam/bmwusa/M/m8-coupe/gallery/exterior/BMW-8-Series-M8-Coupe-Gallery-Exterior-10.jpg", 
          imageurl2:"https://www.bmwusa.com/content/dam/bmwusa/M/m8-coupe/gallery/interior/BMW-8-Series-M8-Coupe-Gallery-Interior-2.jpg", 
          imageurl3:"https://www.bmwusa.com/content/dam/bmwusa/M/m8-coupe/gallery/exterior/BMW-8-Series-M8-Coupe-Gallery-Exterior-7.jpg,", 
          imageurl4:"https://www.bmwusa.com/content/dam/bmwusa/M/m8-coupe/gallery/exterior/BMW-8-Series-M8-Coupe-Gallery-Exterior-4.jpg"  }


          ,

        {make:"Lamborghini",
          model:"Aventador S",
          year:2020,
          cost:417826,
          horsepower:729,
          zerotosixty:2.9,
          torque:507, 
          fueleconomycity:9, 
          fueleconomyhighway:17, 
          description:"There’s nothing else quite like the Aventador. It’s supercar 101: looks, noise, power, drama. Don’t overthink it, just do it. Pure pageantry. Alongside Lamborghini everyone else takes themselves too seriously. Among car companies only Lamborghini looks like it’s having fun.it’s the way the Aventador looks that sets the tone for the car. It’s a jaw-dropper alright. The proportions haven’t changed much, but the nose, taking cues from the SV, is more open and aggressive, channeling cooling air past fangs and splitters to vast standard-fit 400mm ceramic brakes. Air is also swept down the flanks to the intakes – extra ducts on the roof give the S a more hunkered down stance, and together with the rear arch shape gives something of the flavour of the old Countach – and there’s absolutely nothing wrong with that", 
          imageurl1:"https://media.fastestlaps.com/lamborghini-aventador-s-3.jpg", 
          imageurl2:"https://1.bp.blogspot.com/-2XHEkIfLikk/XLZhsq2lUXI/AAAAAAAANMM/7tGO_UjpLpk9NGdJaDW7II2kkmVO91pVgCLcBGAs/s2560/lamborghini-aventador-1920x1080-cockpit-interior-hd-17728.jpg", 
          imageurl3:"https://images.unsplash.com/photo-1570829174962-38c53efc5e5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1044&q=80", 
          imageurl4:"https://media.fastestlaps.com/lamborghini-aventador-s.jpg"  }


          ,
  

        {make:"Lamborghini",
          model:"Huracan Evo",
          year:2020,
          cost:261275,
          horsepower:630,
          zerotosixty:2.9,
          torque:443, 
          fueleconomycity:13, 
          fueleconomyhighway:18, 
          description:"The Lamborghini Huracan Evo. An evolution of the already fantastic Huracan that was first introduced in 2014 to replace the Gallardo money-maker, the Huracan Evo is Lamborghini's most affordable and daily drivable supercar, and it just got cheaper with a rear-wheel-drive variant entering the market. Starting with a price tag north of $260,000, Sant'Agata Bolognese's mid-engined exotic is fitted with a 5.2-liter V10 producing 630 horsepower and 443 lb-ft of torque. Sending power to all four wheels via a seven-speed dual-clutch automatic gearbox, the Huracan Evo can accelerate from 0-62 mph in 2.9 seconds (3.3 for the RWD), topping out at over 200 mph. With a host of new technologies integrated for 2020, the Huracan Evo is the most flattering Lambo on sale, making driving gods out of mere mortals in much the same way that a Ferrari 488's Side Slip Angle Control system allows the hamfisted to slide into the next corner instead of into a Mustang's hunting grounds. For those more confident in their abilities, the Evo RWD sends a little less grunt (602 hp and 413 lb-ft) exclusively to the rear wheels. With less weight and power, the price tag on this variant drops to just over $200,000", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2020-lamborghini-huracan-evo-front-angle-view-carbuzz-529315-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2020-lamborghini-huracan-evo-dashboard-carbuzz-529245-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2020-lamborghini-huracan-evo-front-view-driving-carbuzz-664686-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2020-lamborghini-huracan-evo-front-view-carbuzz-529323-1600.jpg"  }



        ,

        
        {make:"Lamborghini",
          model:"Urus",
          year:2020,
          cost:207326,
          horsepower:641,
          zerotosixty:3.6,
          torque:627, 
          fueleconomycity:12, 
          fueleconomyhighway:17, 
          description:"With the growing popularity of the SUV, every luxury manufacturer from Aston Martin to Rolls-Royce has clambered to get one of their own on the market. If only they'd had the foresight to build one of these super-SUVs 30 years ago - as Lamborghini did. At the time, the LM 002 was originally conceived as a military vehicle, but with an outrageous V12 from the Countach loaded under the hood, it quickly became sought after by sheiks and civilians alike, and could be outfitted in any number of opulent appointments you wanted. But the LM 002 was ahead of its time, and while it enjoyed some success, it was hardly the mass-market savior of the Lamborghini brand.Now, the Urus has come along to revive the spirit of the LM 002 for the 21st century, arriving at a time when the SUV revolution is in full swing. A 4.0-liter twin-turbo V8 and MLBevo platform shared with the Audi RS Q8, Porsche Cayenne Coupe, and Bentley Bentayga are the core components of the newest Rambo Lambo, with 641 horsepower on tap capable of propelling it from 0-62 mph in just 3.6 seconds. It's the dawn of a new supercar era, and this new breed of fighting bull is ready to go ", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2019-2020-lamborghini-urus-front-angle-view-carbuzz-541284-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2019-2020-lamborghini-urus-dashboard-carbuzz-400831-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2019-2020-lamborghini-urus-front-angle-view-carbuzz-583711-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2019-2020-lamborghini-urus-front-angle-view-carbuzz-541200-1600.jpg"  }

        
          ,

       {make:"Lamborghini",
          model:"Sian FKP 37",
          year:2020,
          cost:1000000,
          horsepower:808,
          zerotosixty:2.6,
          torque:531, 
          fueleconomycity:10, 
          fueleconomyhighway:18, 
          description:"The 2020 Lamborghini Sian is a hybrid supercar that the Italian firm unveiled ahead of the 2019 Frankfurt Motor Show. Powered by a V-12 gasoline engine and an electric motor, the Sian is Lambo’s first mass-produced hybrid. However, the supercar is limited to only 63 units, so it’s actually a preview of things to come, like an electrified successor to the Aventador.Design-wise, the Sian stands on its own by combining a new design language with styling cues inspired by the iconic Lamborghini Countach. Its interior, on the other hand, is based on the Aventador, albeit it comes with bespoke elements and fancier features. The Sian also showcases innovative technology, like a state-of-the-art energy recuperating system and a supercapacitor instead of a traditional lithium-ion battery.Lamborghini designed the Sian from scratch, ditching most of the familiar features seen on cars like the Huracan and Aventador. But it remains recognizable as a Lamborghini and, more importantly, it seems to be a tribute to the iconic Countach", 
          imageurl1:"https://pictures.topspeed.com/IMG/crop/201909/lamborghini-sian-rev-2_1600x0w.jpg", 
          imageurl2:"https://pictures.topspeed.com/IMG/crop/201909/lamborghini-sian-rev-8_1600x0w.jpg", 
          imageurl3:"https://pictures.topspeed.com/IMG/crop/201909/the-2020-lamborghini-18_1600x0w.jpg", 
          imageurl4:"https://pictures.topspeed.com/IMG/crop/201909/lamborghini-sian-rev-3_1600x0w.jpg"  }


       ,


       {make:"Ferrari",
          model:"F8 Tributo",
          year:2020,
          cost:276550,
          horsepower:710,
          zerotosixty:2.9,
          torque:568, 
          fueleconomycity:15, 
          fueleconomyhighway:19, 
          description:"Ferrari seems to be on an unstoppable roll; its mid-engined V8-powered range of cars is on a relentless warpath, dedicated to destroying our perception of what the rear-wheel-drive two-door sports car is capable of. The F8 Tributo says it all in its name; it's a tribute to all the great mid-engined V8 supercars produced by Ferrari over the years, including the F40, F430 and 458. Not only is it stunningly beautiful, but it's powered by the most potent non-special edition V8 engine ever produced by Ferrari, and kicks out a massive 710 horsepower from its 3.9-liters of capacity. The F8 might be more relaxed than the ballistic 488 Pista, but it's all the better for it. It's comfortable to drive on a day-to-day basis and is still more than capable on the track.The evolution of the original 458 has come a very long way, and we're at a point in the evolutionary process where its successors are delivering hypercar levels of performance without the official title. The Ferrari F8 Tributo replaces the stunningly evocative 488GTB, which was praised for its visceral performance and stunningly good looks. The 488GTB took the fight directly to big dogs such as the McLaren 720S and the Lamborghini Aventador. With over 700 horsepower and an even more shapely body design, the Ferrari F8 Tributo is more capable than any of its predecessors, which is saying a whole lot", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/front-angle-view-carbuzz-552547-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/steering-wheel-carbuzz-667827-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/front-angle-view-carbuzz-667842-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/side-view-carbuzz-667857-1600.jpg"  }


        ,

        {make:"Ferrari",
          model:"Portofino",
          year:2020,
          cost:215000,
          horsepower:592,
          zerotosixty:3.5,
          torque:561, 
          fueleconomycity:16, 
          fueleconomyhighway:22, 
          description:"Not everyone who wants a Ferrari plans to spend all day out on the track. For a specific clientele with a deep appreciation for the marque that desires something a bit less uncompromising, there is the Portofino grand tourer. With 2+2 seating, a retractable hardtop, and a front mid-engine layout, it's a Ferrari that you can use every day. Fortunately, it's not all soft because under the hood lies a 3.9-liter twin-turbocharged V8 producing 592 horsepower, enough to send the graceful Portofino from 0-62 mph in a much less gentle 3.5 seconds. While softer than a 488, the Portofino is still a rewarding driving machine but is also comfortable enough when you're taking it easy. There's also a usable, high-quality cabin to enjoy, although the rear seats are better thought of as extra storage space. Competitors include the all-conquering Porsche 911 Cabriolet, which although even more dynamic, lacks the Portofino's allure. As with virtually any other Ferrari, one drive in the Portofino is all it takes to fall in love", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2018-2020-ferrari-portofino-front-angle-view-carbuzz-398748-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2018-2020-ferrari-portofino-dashboard-carbuzz-406580-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2018-2020-ferrari-portofino-front-view-carbuzz-398749-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2018-2020-ferrari-portofino-front-view-carbuzz-398784-1600.jpg"  }

        ,

        {make:"Ferrari",
          model:"Roma",
          year:2020,
          cost:220000,
          horsepower:612,
          zerotosixty:3.4,
          torque:560, 
          fueleconomycity:15, 
          fueleconomyhighway:20, 
          description:"Ferrari knows it's supercars are in high demand, hence its decision to increase production figures and add new models. However, its annual production count is still far lower than any other mainstream automaker. This is very much done on purpose to keep Ferraris exclusive and their values high, but the new product is still essential. Meet the first-ever Ferrari Roma, a new GT hardtop coupe powered by an award-winning V8 that pumps out over 600 horsepower.Although it shares a platform and engine with the Ferrari Portofino, the Roma features an all-new interior and exterior styling that continues Ferrari's new styling language, begun by the SF90 Stradale. Although not as powerful as the firm's V12 offerings, the Roma is anything but entry-level. This is a coupe intended for driving purists not interested in the Portofino's retractable hardtop. As the fifth new Ferrari model this year, the Roma is a stunning Italian stallion aimed squarely at the likes of the Aston Martin DB11", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/1600/648000/400/648455.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/1600/648000/100/648153.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/1600/648000/100/648155.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/1600/648000/400/648457.jpg"  }

        ,

        {make:"Ferrari",
          model:"SF90 Stradale",
          year:2020,
          cost:625000,
          horsepower:986,
          zerotosixty:2.5,
          torque:590, 
          fueleconomycity:10, 
          fueleconomyhighway:15, 
          description:"Celebrating 90 years of Ferrari’s Scuderia racing team, the Ferrari SF90 Stradale arrives with the most powerful V8 engine the Italian carmaker has ever produced as well as a trio of electric motors. Together, the 4.0-liter V8 sitting midship, two electric motors powering the front wheels and a MGUK motor that sits between the 769-hp V8 and eight-speed dual-clutch transmission, produce a whopping 986 horsepower and 590 lb-ft of torque. As Ferrari’s first all-wheel-drive sports car (the GTC4Lusso is a grand touring wagon), the SF90 Stradale can sprint from 0-60 mph in 2.6 seconds, reach 125 mph in 6.7 seconds and hit a top speed of 211 mph.Various drive modes include eDrive that allows the supercar to travel up to 16 miles on electric propulsion alone at speeds of up to 84 mph. At the other end of the spectrum is Qualify, which unleashes all the performance to help set record track times.The SF90 Stradale will be available in Assetto Fiorano spec, shaving 66 pounds off the standard model thanks to weight-saving measures such as carbon-fiber door panels and a titanium exhaust. At 3,461 pounds, it's 30 pounds lighter than the LaFerrari, Ferrari’s only other hybrid machine.Aggressive styling includes square taillights, a suspended rear wing with a shut-off gurney, and a black roof. Inside, a new look cabin boasts a 16-inch curved screen displaying a fully digital center instrument cluster and configured with a new touchpad and hepatic buttons on the steering wheel", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2020-ferrari-sf90-stradale-front-view-carbuzz-591070-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2020-ferrari-sf90-stradale-dashboard-carbuzz-591072-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2020-ferrari-sf90-stradale-side-view-carbuzz-591068-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2020-ferrari-sf90-stradale-top-view-carbuzz-591073-1600.jpg"  }


        ,

        {make:"Rolls Royce",
          model:"Cullinan",
          year:2020,
          cost:325000,
          horsepower:563,
          zerotosixty:5.0,
          torque:627, 
          fueleconomycity:12, 
          fueleconomyhighway:20, 
          description:"The Rolls-Royce Cullinan, is by far the most expensive ultra luxury SUV on the market, you might think that the Cullinan would feel considerable pressure to deliver on its sky-high price tag and the expectations that come with the Rolls Royce Spirit of Ecstacy badge resting atop its majestic grille. And yet, nothing about this extravagant SUV - the first of its kind from Rolls-Royce - feels remotely pressured. With a distinctly unstressed 6.75-liter V12 engine delivering 563 horsepower and a supremely comfortable ride, the Cullinan coasts along as if it doesn't have a care in the world and you, the driver, will feel the same by extension. The impression is heightened if you're seated at the back where you'll be greeted by a cabin that is a masterpiece of elegant design, artfully integrated technology, and unsurpassed luxury. The world's top athletes may relish in the arduous task of constantly keeping their challengers at bay, but the unmatched Cullinan ends up being the victor of the SUV world without so much as breaking a sweat. Game, set, match, Rolls-Royce", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2019-2020-rolls-royce-cullinan-front-angle-view-carbuzz-426360-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2019-2020-rolls-royce-cullinan-dashboard-carbuzz-426333-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2019-2020-rolls-royce-cullinan-front-view-driving-carbuzz-426324-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2019-2020-rolls-royce-cullinan-front-view-driving-carbuzz-676097-1600.jpg"  }

        ,

        {make:"Rolls Royce",
          model:"Wraith",
          year:2020,
          cost:320500,
          horsepower:624,
          zerotosixty:4.4,
          torque:605, 
          fueleconomycity:12, 
          fueleconomyhighway:18, 
          description:"Rolls-Royce has long been the purveyor of some of the world's finest luxury automobiles, the Wraith is the most performance-oriented model in the range but it hasn't resorted to anything as crass as adding stiffer suspension or removing luxuries to save weight. No, the additional dynamism comes from a more powerful engine and subtle suspension revisionsIt becomes clear as you step into the Wraith that the designers wanted to make the transition from luxury yacht to luxury coupe as seamless as possible. The massive rear-hinged doors and exquisitely detailed leather, wood and metal trim are not overtly nautical in design but the generous interior dimensions and high driving position does make one feel like they are piloting something rather substantial.While the Wraith is as long as some minivans it makes use of the available space by filling it with thick pile carpets, acres of fine wood veneer and some of the most comfortable seats around. Four adults will fit comfortably in the Wraith and there is enough space in the tapered rear end for their luggage too", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2017-2020-rolls-royce-wraith-front-angle-view-carbuzz-545307-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2017-2020-rolls-royce-wraith-dashboard-carbuzz-658519-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2017-2020-rolls-royce-wraith-front-angle-view-carbuzz-545301-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2017-2020-rolls-royce-wraith-front-angle-view-carbuzz-658513-1600.jpg"  }

        ,

        {make:"Rolls Royce",
          model:"Ghost",
          year:2020,
          cost:311390,
          horsepower:563,
          zerotosixty:4.8,
          torque:605, 
          fueleconomycity:12, 
          fueleconomyhighway:14, 
          description:"The Ghost is the smallest car in the Rolls-Royce stable – but being the baby Roller doesn't mean it's a junior in any way, least of all power and luxury. Beneath the hood, you'll still find a large displacement twin-turbo V12, in the cabin you'll find the softest leather and the most pristine wood trims, but underneath the skin, you'll find a GPS guided transmission, and importantly, you'll find the same platform that underpins the BMW 7 Series. Now dubbed Series II since 2015, the Ghost is available in a standard wheelbase, and a 7-inch longer extended wheelbase model.The inside of a Rolls-Royce is a special place indeed. The Ghost Series II is no different. Upon every surface you'll find the highest quality materials – plush, luxuriant leather, and rich genuine wood veneers. The big rimmed steering wheel is completely round and fuss free, and the design exudes luxury – even the BMW iDrive infotainment system. Inside the driver's door, you'll find the customary bespoke umbrella, now with two canopy colors and one for the beading. You'll also find plenty of space to stretch out, with sufficient headroom front and rear and masses of leg room. Whether you're up front driving, or in the back being chauffeured, the Ghost Series II is a great place to be", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2015-2020-rolls-royce-ghost-front-angle-view-carbuzz-544839-1600.jpg", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2015-2020-rolls-royce-ghost-dashboard-carbuzz-353116-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2015-2020-rolls-royce-ghost-front-view-driving-carbuzz-390091-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2015-2020-rolls-royce-ghost-front-view-carbuzz-544882-1600.jpg"  }


        ,


        {make:"Rolls Royce",
          model:"Phantom",
          year:2020,
          cost:450000,
          horsepower:563,
          zerotosixty:5.0,
          torque:664, 
          fueleconomycity:12, 
          fueleconomyhighway:20, 
          description:"The Rolls-Royce Phantom VIII has been totally redesigned for 2018 and while it looks more evolutionary than revolutionary, the changes under the skin are significant.The Phantom is an imposingly large sedan, its upright dimensions give it masses of interior space and although Rolls-Royce claims that owners may slip behind the wheel from time to time, the focus here is all on the rear occupants.Leg and headroom is excellent and each individual seat has multiple power settings that make even the longest journey a comfortable experience. For even more interior space, an extended wheelbase model is also available.Material quality and fit and finish is as good as it gets and the attention to even the smallest button and trim piece is astounding. Thick pile carpets, soft-touch leather, chromed metal surfaces and polished wood dominate the cabin.The driver and front passenger still have plenty of space to get comfortable and the imposing dashboard features the bare minimum of switches rotary controls.The previous Phantom was behind the times when it came to in-car entertainment and at first glance there do not seem to be the usual signs of USB connectors and audio inputs that are commonplace in most luxury cars. These have been discreetly placed behind swiveling covers, embedded into headrests and built into the center armrest, only appearing when required", 
          imageurl1:"https://cdn.carbuzz.com/gallery-images/2018-2020-rolls-royce-phantom-front-angle-view-carbuzz-390685-1600.jpg,", 
          imageurl2:"https://cdn.carbuzz.com/gallery-images/2018-2020-rolls-royce-phantom-steering-wheel-carbuzz-390667-1600.jpg", 
          imageurl3:"https://cdn.carbuzz.com/gallery-images/2018-2020-rolls-royce-phantom-front-view-driving-carbuzz-390664-1600.jpg", 
          imageurl4:"https://cdn.carbuzz.com/gallery-images/2018-2020-rolls-royce-phantom-front-view-carbuzz-544944-1600.jpg"  }



      ]);
   
};

