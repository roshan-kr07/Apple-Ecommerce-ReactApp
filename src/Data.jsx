const DATA = [
  {
    id: 0,
    title: "IPhone 13",
    price: 850,
    desc: (
      <p>
        ⟴ 15.4 cm (6.1-inch) Super Retina XDR display.
        <br />
        ⟴ Dual-camera system for incredible low-light photos and videos.
        <br />⟴ A15 Bionic with 4-core GPU for lightning-fast performance.
        <br />⟴ Ceramic Shield, and water and dust resistance footnote.<br />
        ⟴ Superfast 5G. With SmartData mode, iPhone downshifts automatically to
        save power when you don’t need all that speed.
      </p>
    ),
    img: "/assets/images/products/iphone 13.jpg",
  },

  {
    id: 1,
    title: "IPhone 14",
    price: 1000,
    desc: <p>
    ⟴ 6.1-inch durable design¹ with Ceramic Shield and water and dust resistance.
    <br />
    ⟴ All-day battery life with up to 20 hours of video playback.
    <br />⟴ A Pro-level Main camera and advanced image processing for sensational shots in all kinds of light.
    <br />⟴ Ceramic Shield, and water and dust resistance footnote.<br />
    ⟴ Connect and charge with USB-C.
  </p>,
    img: "/assets/images/products/iphone 14.jpg",
  },

  {
    id: 2,
    title: "IPhone 15 pro",
    price: 1950,
    desc: <p>
    ⟴ 15.5 cm (6.1-inch) durable colour-infused glass and aluminium design footnote ◊ with Ceramic Shield front.
    <br />
    ⟴ Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else.
    <br />⟴ 48MP Main camera with 2x Telephoto captures breathtaking detail up close or far away.
    <br />⟴ Ceramic Shield, and water and dust resistance footnote.<br />
    ⟴ Connect and charge with USB-C.
  </p>,
    img: "/assets/images/products/iphone 15 pro.jpg",
  },

  {
    id: 3,
    title: "IPhone 15 ",
    price: 1800,
    desc: <p>
    ⟴ 15.5 cm (6.1-inch) durable colour-infused glass and aluminium design footnote ◊ with Ceramic Shield front.
    <br />⟴ Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else.
    <br />⟴ 48MP Main camera with 2x Telephoto captures breathtaking detail up close or far away.
    <br />⟴ A16 Bionic powers computational photography and smooth gaming performance with great efficiency for all-day battery life.<br />
    ⟴ Connect and charge with USB-C.
  </p>,
    img: "/assets/images/products/iphone 15.jpg",
  },
  {
    id: 4,
    title: "IPhone 11",
    price: 800,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone11.png",
  },

  {
    id: 5,
    title: "IPhone 11 Pro",
    price: 850,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone11pro.png",
  },
  {
    id: 6,
    title: "IPhone 11 Pro Max",
    price: 900,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone11promax.png",
  },

  
  {
    id: 7,
    title: "IPhone 12 Mini",
    price: 950,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone12mini.png",
  },
  {
    id: 8,
    title: "IPhone 12",
    price: 1050,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone12.png",
  },
  {
    id: 9,
    title: "IPhone 12 Pro",
    price: 1150,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone12pro.png",
  },
  {
    id: 10,
    title: "IPhone 12 Pro Max",
    price: 1250,
    desc: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.",
    img: "/assets/images/products/iphone12promax.png",
  },
  {
    id: 11,
    title: "IPhone SE",
    price: 1250,
    desc: `11.94 cm (4.7-inch) Retina HD display footnote ¹ that’s bright, colourful and sharp.  
    A15 Bionic, the same superpowerful chip that’s in iPhone 13.  
    Smarter camera makes automatic adjustments so faces, places, everything looks fabulous.  
    Home button with Touch ID — securely unlock and sign into apps.  
    5G for fast downloads and high-quality streaming.`,
    img: "/assets/images/products/iPhone SE.jpg",
  },
  
];

export default DATA;
